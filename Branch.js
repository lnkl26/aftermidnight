document.addEventListener("DOMContentLoaded", () => {
    loadSaves();
    checkGameInProgress();
    updateNewGameButtonState(); // Check button state on load
});

function startNewGame() {
    const games = JSON.parse(localStorage.getItem("savedGames")) || [];
    if (games.length >= 6) {
        // Message is handled by #newGameMessage
        return;
    }
    localStorage.removeItem("currentGameIndex"); // Clear current game index for new game
    localStorage.setItem("allowMusic", "true"); // Ensure music plays on new game
    window.location.href = "index.html"; // Start fresh game
}

function checkGameInProgress() {
    const games = JSON.parse(localStorage.getItem("savedGames")) || [];
    if (games.length > 0) {
        setTimeout(() => {
            showGameInProgressNotification();
        }, 1000);
    }
}

function showGameInProgressNotification() {
    if (document.getElementById("gameInProgress")) return;
    const statusDiv = document.createElement("div");
    statusDiv.id = "gameInProgress";
    statusDiv.textContent = "Game in Progress...";
    Object.assign(statusDiv.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#621cd3",
        color: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)"
    });
    document.body.appendChild(statusDiv);
    setTimeout(() => statusDiv.remove(), 2000);
}

function loadSaves() {
    const slotsContainer = document.getElementById("saveSlots");
    if (!slotsContainer) return;
    slotsContainer.innerHTML = ""; // Clear previous content
    const games = JSON.parse(localStorage.getItem("savedGames")) || [];

    // Ensure exactly 6 slots for a 2x3 grid
    for (let i = 0; i < 6; i++) {
        const slot = document.createElement("div");
        slot.className = "save-slot" + (games[i] ? "" : " empty");

        if (games[i]) {
            const game = games[i];

            const dateDiv = document.createElement("div");
            dateDiv.className = "date";
            dateDiv.innerHTML = `<strong>${new Date(game.timestamp).toLocaleString()}</strong>`;
            slot.appendChild(dateDiv);

            const playerDiv = document.createElement("div");
            playerDiv.className = "player-name";
            playerDiv.textContent = `PLAYER: ${game.player.name || 'Unknown Player'}`;
            slot.appendChild(playerDiv);

            const progressDiv = document.createElement("div");
            progressDiv.className = "progress";
            progressDiv.textContent = game.player.currentSceneDisplay || 'Unknown Location'; // Use currentSceneDisplay
            slot.appendChild(progressDiv);

            // Update tooltip to use currentSceneDisplay
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.innerHTML = `
                Player: ${game.player.name || 'Unknown Player'}<br>
                Class: ${game.player.classType || 'None'}<br>
                Level: ${game.player.level || 0}<br>
                ATK: ${game.player.stats?.atk || 0}<br>
                DEF: ${game.player.stats?.def || 0}<br>
                HP: ${game.player.stats?.hp || 0}<br>
                Shop: ${game.player.shopName || 'Not set'}<br>
                Location: ${game.player.currentSceneDisplay || 'Unknown Location'}<br>
                Last Saved: ${new Date(game.timestamp).toLocaleString()}
            `;
            slot.appendChild(tooltip);

            const loadBtn = document.createElement("button");
            loadBtn.textContent = "Load";
            loadBtn.onclick = () => {
                localStorage.setItem("loadGameIndex", i);
                localStorage.setItem("allowMusic", "true");
                window.location.href = "index.html";
            };

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => {
                if (confirm("Are you sure you want to delete this save?")) {
                    deleteSave(i);
                }
            };

            const buttonContainer = document.createElement("div");
            buttonContainer.className = "save-slot-buttons";
            buttonContainer.appendChild(loadBtn);
            buttonContainer.appendChild(deleteBtn);
            slot.appendChild(buttonContainer);
        } else {
            slot.textContent = "Empty Slot";
        }
        slotsContainer.appendChild(slot);
    }
    updateNewGameButtonState(); // Update button state after loading saves
}

function deleteSave(index) {
    let games = JSON.parse(localStorage.getItem("savedGames")) || [];
    games.splice(index, 1);
    localStorage.setItem("savedGames", JSON.stringify(games));
    if (localStorage.getItem("currentGameIndex") == index) {
        localStorage.removeItem("currentGameIndex");
    } else if (localStorage.getItem("currentGameIndex") > index) {
        localStorage.setItem("currentGameIndex", localStorage.getItem("currentGameIndex") - 1);
    }
    loadSaves(); // Refresh the grid
}

function updateNewGameButtonState() {
    const newGameButton = document.getElementById("newGameButton");
    const newGameMessage = document.getElementById("newGameMessage");
    const games = JSON.parse(localStorage.getItem("savedGames")) || [];
    const isDisabled = games.length >= 6;
    newGameButton.disabled = isDisabled; // Disable if 6 saves exist
    newGameMessage.style.display = isDisabled ? "block" : "none"; // Show message if disabled
}