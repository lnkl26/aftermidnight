class DishPuzzle {
    constructor(callbackAfterAllPlates) {
        // this is a list of plates and the steps needed to clean each one
        this.plates = [
            {
                description: `The first plate had light tomato sauce and smudges on it.`, // light tomato sauce and smudges
                solution: ["more water", "more soap", "scrub harder"]
            },
            {
                description: "The second plate was greasy, as if it had fried bacon and eggs on it.", // greasy, like it held fried bacon and eggs
                solution: ["more soap", "more water", "scrub harder", "scrub harder"]
            },
            {
                description: "The third plate had burnt cheese that had crusted on its edge.", // burnt cheese crusted onto the edge
                solution: ["scrub harder", "more soap", "scrub harder", "more water"]
            },
            {
                description: "The fourth plate looked clean but it was rather dusty upon closer inspection.", // dusty
                solution: ["more water", "scrub harder"]
            },
            {
                description: "The fifth plate has clearly been through a lot. There was dried stew, grease and someone's half-melted cheese toast.", // dried stew, grease, and someone's half-melted cheese toast
                solution: ["more soap", "scrub harder", "scrub harder", "more water", "scrub harder"]
            }
        ];

        // messages to show based on whether the player made the right or wrong move
        this.feedbackMessages = {
            correct: {
                "more water": "A warm rinse loosens the dried-on mess. Much easier now.",
                "more soap": "The suds work their way into the grime. You can see it lifting.",
                "scrub harder": "You give it some elbow grease, and the plate starts to shine."
            },
            wrong: {
                "more water": "Water's not going to cut it.",
                "more soap": "A sudsy mess... but no progress.",
                "scrub harder": "All effort, no reward."
            }
        };

        // current plate the player is working on
        this.currentPlate = 0;
        // list of the steps the player has taken for the current plate
        this.progress = [];
        // function to call when all plates are cleaned
        this.onComplete = callbackAfterAllPlates;

        document.getElementById("puzzle-container").style.display = "block";

        // render the first plate
        this.render();
    }

    makeChoice(choice) {
        // get the correct solution for the current plate
        const solution = this.plates[this.currentPlate].solution;
        // figure out which step the player is on
        const step = this.progress.length;

        let feedback;

        // if the choice is correct, push it to progress and give correct feedback
        if (choice === solution[step]) {
            this.progress.push(choice);
            feedback = this.feedbackMessages.correct[choice];

            // if all steps for the plate are completed
            if (this.progress.length === solution.length) {
                this.render("The dish sparkles under the kitchen light. Clean.");

                const progBar = document.querySelector(".progress-bar");
                if(progBar) {
                    this.createSparklesAround(progBar);
                }

                // move to next plate after short delay
                setTimeout(() => {
                    this.currentPlate++;
                    this.progress = [];
                    this.render();
                }, 1500);
                return;
            }
        } else { // if the choice is wrong, reset progress and restart the plate
            // resets progress immediately
            this.progress = [];

            // show text feedback
            this.render("That seemed to make the plate dirtier...");

            // show visual feedback; add shake class to the progress bar
            const progBar = document.querySelector("#puzzle-container div"); // selects the progress bar container
            if(progBar) { // make the progress bar shake upon wrong action
                progBar.classList.add("shake");
                setTimeout(() => {
                    progBar.classList.remove("shake");
                }, 400);
            } else { // if progress bar is not found
                setTimeout(() => {
                    this.render();
                }, 1500);
            }

            return;
        }

        // show feedback for current step
        this.render(feedback);
    }

    render(feedback = "") {
        const container = document.getElementById("puzzle-container");
        container.innerHTML = "";

        // if all plates are done, trigger completion
        if (this.currentPlate >= this.plates.length) {
            this.completePuzzle();
            return;
        }

        // get the current plate
        const plate = this.plates[this.currentPlate];

        //progress bar
        const progBarContainer = document.createElement("div"); //create the bar to b filled
        progBarContainer.classList.add("progress-bar");
        progBarContainer.setAttribute("data-tooltip", "This is your progress cleaning this dish."); // tooltip
        progBarContainer.style.marginBottom = "10px"; //puts it at bottom
        progBarContainer.style.width = "100%";
        progBarContainer.style.backgroundColor = "#333"; //gray
        progBarContainer.style.borderRadius = "10px";
        progBarContainer.style.height = "20px";
        progBarContainer.style.border = "1px solid white";

        const progBarProg = document.createElement("div"); //represents actual progress
        progBarProg.style.height = "100%";
        //how many steps completed divided by total steps to complete * 100% to get a percentage
        progBarProg.style.width = `${(this.progress.length / plate.solution.length) * 100}%`;
        progBarProg.style.backgroundImage = "linear-gradient(to right, #6a0dad, #000)"; //purple/black graident
        progBarProg.style.borderRadius = "10px";

        progBarContainer.appendChild(progBarProg); //put prog in prog container
        container.appendChild(progBarContainer); //put prog container in page container

        // show plate description
        const description = document.createElement("p");
        description.innerHTML = `<b>${plate.description}</b>`;
        container.appendChild(description);

        // prompt for input
        const prompt = document.createElement("p");
        prompt.textContent = "What will you do?";
        container.appendChild(prompt);

        // create buttons for player choices
        const choices = ["more water", "more soap", "scrub harder"];
        choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => {
                playBtnSound();
                this.makeChoice(choice);
            };
            container.appendChild(button);
        });

        // show feedback message if provided
        if (feedback) {
            const feedbackEl = document.createElement("p");
            feedbackEl.innerHTML = `<i>${feedback}</i>`;
            feedbackEl.id = "feedback-log";
            container.appendChild(feedbackEl);

            // remove feedback after a delay
            setTimeout(() => {
                const feedbackElement = document.getElementById("feedback-log");
                if (feedbackElement) {
                    feedbackElement.remove();
                }
            }, 1500);
        }
    }

    createSparklesAround(el, count = 25) { // get the element and spawn sparkles
        const rect = el.getBoundingClientRect();
        const container = document.getElementById('puzzle-container');
    
        for (let i = 0; i < count; i++) {
            const sparkle = document.createElement("div");
            sparkle.classList.add("dish-sparkle");
    
            // position sparkle randomly around the progress bar
            const x = Math.random() * rect.width;
            const y = Math.random() * rect.height;
    
            sparkle.style.left = `${rect.left + x - container.getBoundingClientRect().left}px`;
            sparkle.style.top = `${rect.top - container.getBoundingClientRect().top + y + 125}px`;
    
            container.appendChild(sparkle);
    
            // remove sparkle after animation
            setTimeout(() => {
                sparkle.remove();
            }, 600);
        }

        console.log("sparkles wahoo!");
    }    

    completePuzzle() {
        // hide puzzle and send event to game that it's finished
        console.log("notification sent");
        document.getElementById('puzzle-container').style.display = 'none';
        document.dispatchEvent(new CustomEvent("dishPuzzleSuccess"));
    }
}

class MazePuzzle {
    constructor(callbackWhenDone) {
        // 3x3 grid of sections with descriptions and possible items
        this.map = [
            [
                { desc: "Just an empty corner.", items: [] },
                { desc: "A pile of empty cans and jars.", items: [] },
                { desc: "Theres a rack of full of jars. You read some of the labels...", items: ["grill dust #2", "grill dust #3", "grill dust #5"] }
            ],
            [
                { desc: "A wall lined with with...", items: ["spicy green onions", "jar of sauerkraut", "pickled red onions"] },
                { desc: "There is nothing but a broken table in the middle of the pantry.", items: [] },
                { desc: "A shelf with...", items: ["homemade chili oil", "hot sauce #12", "bent spoon"] }
            ],
            [
                { desc: "There are multiple bags in this corner. Some are labeled...", items: ["blue cornmeal", "yellow cornmeal", "unlabeled bag"] },
                { desc: "The entrance of the pantry, there's only racks here.", items: [] },
                { desc: "There is a fridge in this corner. You opened it and you find a variety of herbs.", items: ["homegrown mint", "fresh thyme", "wet cilantro", "homegrown basil"] }
            ]
        ];

        // correct goal items the player must collect
        this.goalItems = [
            "pickled red onions",
            "homemade chili oil",
            "blue cornmeal",
            "fresh thyme",
            "grill dust #3"
        ];

        this.collectedItems = [];
        this.collectedFromSections = new Set(); // tracks sections where items were taken

        this.position = { x: 1, y: 2 }; // start position: section 8
        this.onComplete = callbackWhenDone;

        this.render();
    }

    renderMiniMap(parentEl) {
        const map = document.createElement("div");
        map.className = "pantry-minimap";
    
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                const cell = document.createElement("div");
                cell.className = "pantry-minimap-cell";
    
                if (x === this.position.x && y === this.position.y) {
                    cell.textContent = "\u2605"; // you are here
                    cell.classList.add("active");
                }
    
                map.appendChild(cell);
            }
        }
    
        parentEl.appendChild(map);
    }    

    move(direction) {
        const { x, y } = this.position;
        if (direction === "walk forward" && y > 0) this.position.y--;
        if (direction === "walk back" && y < this.map.length - 1) this.position.y++;
        if (direction === "take a left" && x > 0) this.position.x--;
        if (direction === "take a right" && x < this.map[0].length - 1) this.position.x++;

        this.render();
    }

    collectItem(item) {
        const room = this.map[this.position.y][this.position.x];
        const sectionKey = `${this.position.x},${this.position.y}`;

        if (this.collectedFromSections.has(sectionKey)) {
            this.render("You've already collected an item from this section.");
            return;
        }

        if (room.items.includes(item)) {
            this.collectedItems.push(item);
            this.collectedFromSections.add(sectionKey);
            this.render(`You picked up the <b>${item}</b>.`);

            // check if puzzle is complete
            if (this.goalItems.every(goal => this.collectedItems.includes(goal))) {
                this.completePuzzle();
                return;
            }

            // if all sections that have items have been used, check for failure
            if (this.checkFailure()) {
                this.failPuzzle();
            }
        } else {
            this.render("That item isn't here.");
        }
    }

    // checks if all sections that *could* give an item have already been used
    checkFailure() {
        let collectibleSections = 0;
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x].items.length > 0) {
                    const sectionKey = `${x},${y}`;
                    if (!this.collectedFromSections.has(sectionKey)) {
                        return false; // still possible to collect somewhere
                    }
                }
            }
        }
        return true; // no more sections left to collect from
    }

    render(message = "") {
        document.getElementById("puzzle-container").style.display = "block";
        
        const container = document.getElementById("puzzle-container");
        container.innerHTML = "";

        //progress bar mostly reused from other prgress bar
        const progBarContainer = document.createElement("div");
        progBarContainer.setAttribute("data-tooltip", "You can only carry five items, pick wisely!"); // tooltip
        progBarContainer.style.marginBottom = "10px";
        progBarContainer.style.width = "100%";
        progBarContainer.style.backgroundColor = "#333";
        progBarContainer.style.borderRadius = "10px";
        progBarContainer.style.height = "20px";
        progBarContainer.style.position = "relative"; //for label overlay
        progBarContainer.style.border = "1px solid white";

        const progBarProg = document.createElement("div");
        progBarProg.style.height = "100%";
        //collected items over items to be collected turned into a percentage
        progBarProg.style.width = `${(this.collectedItems.length / this.goalItems.length) * 100}%`;
        progBarProg.style.backgroundImage = "linear-gradient(to right, #6a0dad, #000)"; //purple/black gradient
        progBarProg.style.borderRadius = "10px";

        const progLabel = document.createElement("div");
        progLabel.textContent = `${this.collectedItems.length}/${this.goalItems.length}`;
        progLabel.style.position = "absolute"; //so it doesnt move other containers
        progLabel.style.top = "12%"; 
        progLabel.style.left = "50%";
        progLabel.style.transform = "translateX(-50%, -50%)"; //center it
        progLabel.style.lineHeight = "20px"; //match height of prog bar
        progLabel.style.fontSize = "16px";
        progLabel.style.color = "white";

        progBarContainer.appendChild(progBarProg);
        progBarContainer.appendChild(progLabel); //put x/5 in the prog bar
        container.appendChild(progBarContainer);

        const room = this.map[this.position.y][this.position.x];
        const sectionKey = `${this.position.x},${this.position.y}`;

        // create wrapper to hold minimap and dpad side-by-side
        const layoutWrapper = document.createElement("div");
        layoutWrapper.className = "maze-layout";

        // minimap block
        const minimap = document.createElement("div");
        minimap.className = "minimap";
        this.renderMiniMap(minimap); // draw into it

        // D-pad block
        const dpad = document.createElement("div");
        dpad.className = "dpad";

        const directions = [
            null, "walk forward", null,
            "take a left", null, "take a right",
            null, "walk back", null
        ];

        directions.forEach(dir => {
            const btn = document.createElement("button");
            btn.className = "dpad-button";

            if (dir) {
                btn.textContent = dir.includes("forward") ? "\u{2B06}" : // ↑
                                dir.includes("back") ? "\u{2B07}" :      // ↓
                                dir.includes("left") ? "\u{2B05}" :      // ←
                                                    "\u{27A1}";          // →
                btn.onclick = () => {
                    playBtnSound();
                    this.move(dir);
                };
            } else {
                btn.disabled = true;
                btn.style.visibility = "hidden";
            }

            dpad.appendChild(btn);
        });

        layoutWrapper.appendChild(minimap);
        layoutWrapper.appendChild(dpad);
        container.appendChild(layoutWrapper);
        
        const desc = document.createElement("p");
        desc.innerHTML = `${room.desc}`;
        container.appendChild(desc);

        if (!this.collectedFromSections.has(sectionKey) && room.items.length > 0) {
            const itemPrompt = document.createElement("p");
            itemPrompt.textContent = "Select an item to collect:";
            container.appendChild(itemPrompt);

            room.items.forEach(item => {
                const btn = document.createElement("button");
                btn.textContent = item;
                btn.onclick = () => {
                    playBtnSound();
                    this.collectItem(item);
                };
                container.appendChild(btn);
            });
        } else if (room.items.length > 0) {
            const alreadyCollected = document.createElement("p");
            alreadyCollected.innerHTML = "<i>You already collected an item from this section.</i>";
            container.appendChild(alreadyCollected);
        }

        const status = document.createElement("p");
        status.innerHTML = `<i>Collected: ${this.collectedItems.join(", ") || "none"}</i>`;
        container.appendChild(status);

        if (message) {
            const msg = document.createElement("p");
            msg.innerHTML = `<i>${message}</i>`;
            container.appendChild(msg);
        }

        // check for failure after movement, in case player explores all without collecting enough
        if (this.checkFailure() && !this.goalItems.every(goal => this.collectedItems.includes(goal))) {
            this.failPuzzle();
        }
    }

    completePuzzle() {
        // hide puzzle and send complete event
        document.getElementById("puzzle-container").innerHTML = "";
        document.getElementById("puzzle-container").style.display = "none";
        document.dispatchEvent(new CustomEvent("mazePuzzleSuccess"));
    }

    failPuzzle() {
        // hide puzzle and send failed event
        document.getElementById("puzzle-container").innerHTML = "";
        document.getElementById("puzzle-container").style.display = "none";
        document.dispatchEvent(new CustomEvent("mazePuzzleFail"));
    }
}