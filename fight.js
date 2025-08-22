let jobIndex = parseInt(localStorage.getItem("jobIndex") || "0", 10); // GRABBING INDEX OF CURRENT JOB
// function that checks if fight-container is visible (display: block)
function checkIfFightContainerIsBlock() {
    console.log("check");
    jobIndex = localStorage.getItem("jobIndex"); // GRABBING INDEX OF CURRENT JOB
    const fightContainer = document.getElementById('fight-container');
    return fightContainer && fightContainer.style.display === 'block';
}

// setup MutationObserver
const fightContainer = document.getElementById('fight-container');
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (checkIfFightContainerIsBlock()) {
            // once the fight container is visible, run the rest of the code
            //observer.disconnect(); // stop observing
            initializeGame();
        }
    });
});

// configure observer for style changes
observer.observe(fightContainer, { attributes: true, attributeFilter: ['style'] });

//example log box idea
function logTurn(message) {
    const logBox = document.getElementById('turn-log');
    const para = document.createElement('p');
    para.textContent = message;
    logBox.appendChild(para);
    logBox.scrollTop = logBox.scrollHeight; // auto scroll
}

// initialization code
function initializeGame() {
    console.log(window.playerStats);

    const turnLog = document.getElementById('turn-log');
    if (turnLog) {
        turnLog.innerHTML = '';
    }

    const attackButton = document.getElementById('attack-btn');
    const skillButton = document.getElementById('skill-btn');
    const itemButton = document.getElementById('item-btn');
    
    var getPlayerStats = JSON.parse(window.playerStats);

    function syncPlayers() { //fight.js makes a local player so updateStatsPanel() does not work, this syncs them so that it does
        if(window.player && window.player.stats){
            window.player.stats.hp = player.hp;
            window.player.stats.def = player.def;
            window.player.stats.atk = player.atk;
            window.playerStats = JSON.stringify(window.player.stats);
        }
    }

    //establishes action button control to prevent spamming
    function setActionButtons(enabled) {
        attackButton.disabled = !enabled;
        skillButton.disabled = !enabled;
        itemButton.disabled = !enabled;
    }

    var getPlayerStats = JSON.parse(window.playerStats);
    // creating player object
    class Player {
        constructor(atk, def, hp, name) {        
            this.atk = atk;                     //basic stats
            this.def = def;
            this.hp = hp;
            this.name = name;                   //Player name
            this.classType = localStorage.getItem("playerClass");
            this.turnSkipped = false;          //Exterminator dodge
            this.dodgeNext = false;
            this.critReady = false;
            this.tempDefBonus = 0;             //Sentinel skill
            this.isRecordingDamage = false;
            this.recordedDamage = 0;
            this.baseAtk = atk;                //Soulmender mechanics
            this.bonusAtk = 0;
            this.overheal = 0; 
        }

        //resets Sentinel DEF 
        resetTemporaryDefense() {
            this.def -= this.tempDefBonus;
            this.tempDefBonus = 0;
        }

        receiveDMG(rawDmg) {
            if (this.dodgeNext) {                               // Dodge chance
                const dodged = Math.random() < 0.85;
                if (dodged) {
                    logTurn("You dodged the Shade's attack!");
                    this.critReady = true;
                    this.dodgeNext = false;
                    return;
                } else {
                    logTurn("You failed to dodge the attack.");
                    this.critReady = false;
                    this.dodgeNext = false;
                }
            }

            let finalDmg = Math.ceil(rawDmg * Math.pow(0.9, this.def));
            if (finalDmg < 1) finalDmg = 1;

            const prevented = rawDmg - finalDmg;

            //Damage recording for Sentinel
            if (this.classType === "Sentinel" && this.isRecordingDamage) {
                this.recordedDamage += prevented;
                const scaledBonus = (prevented * 1.5).toFixed(1);
                logTurn("You guard against the blow, reducing the damage!");
                logTurn(`You stored ${scaledBonus} bonus damage for your next attack.`);
            } else if (this.classType === "Sentinel" && prevented > 0) {
                logTurn("You guard against the blow, reducing the damage!");
            }

            //Overheal for Soulmender
            if (this.overheal > 0) {
                const absorb = Math.min(finalDmg, this.overheal);
                this.overheal -= absorb;
                finalDmg -= absorb;
                logTurn(`Your overheal absorbs ${absorb} damage.`);
            }
        
            if (finalDmg > 0) {
                this.hp -= finalDmg;
                if (this.hp < 0) this.hp = 0;
                logTurn(`The Shade attacks you for ${finalDmg} damage...`);
            }
        }
    }

    // creating enemy object
    class Enemy {
        constructor(name, atk, def, hp) {
            this.name = name;             //Enemy name
            this.atk = atk;
            this.def = def;
            this.hp = hp;
            this.baseAtk = atk;
            this.dodgeNext = false;  
            this.critReady = false;  
            this.tempDefBonus = 0;      
            this.bonusAtk = 0;
        }
        receiveDMG(dmg) {
            this.hp -= dmg;
            if(this.hp <= 0) {
                this.hp = 0;
            }
        }
    }

    // instantiating objects
    const player = new Player(getPlayerStats.atk, getPlayerStats.def, getPlayerStats.hp, window.player.name);
    let enemyName = "Shade";
    let enemyATK = 10;
    let enemyDEF = 0;
    let enemyHP = 10;
    console.log("under const player", jobIndex);
    if(jobIndex === "tutorial") { // tutorial fight
        enemyName = "Shade of Unease";
        enemyATK = 30;
        enemyDEF = 0;
        enemyHP = 200;
    }
    else if(jobIndex === "0") { // first job
        console.log(player);
        enemyName = "Shade of Isolation";
        enemyATK = 30;
        enemyDEF = 0;
        enemyHP = 200;
    }
    else if(jobIndex === "1") {
        console.log(player);
        enemyName = "Wrath of Many";
        enemyATK = 50;
        enemyDEF = 40;
        enemyHP = 250;
    }
    else if(jobIndex === "2") {
        console.log(player);
        enemyName = "Shade of the Burden";
        enemyATK = 60;
        enemyDEF = 0;
        enemyHP = 300;
    }
    else if(jobIndex === "3") {
        console.log(player);
        enemyName = "Project Echo";
        enemyATK = 90;
        enemyDEF = 50;
        enemyHP = 350;
    }

    const enemy = new Enemy(enemyName, enemyATK, enemyDEF, enemyHP);
    enemy.maxHP = enemyHP;

    const originalEnemyHP = enemyHP;
    let burdenPhaseTwo = false;

    if (window.player.getItem("Figurine")) {
          player.atk += 10;
          logTurn("Your Figurine radiates power— +10 ATK!");
        }
            const relic = window.player.getItem("Relic");
            if (relic) {
              switch (player.classType) {
                case "Exterminator":
                  player.atk += 15;
                  logTurn("Your Relic empowers your strikes— +15 ATK!");
                  break;
                case "Sentinel":
                  player.def += 15;
                  logTurn("Your Relic fortifies your guard— +15 DEF!");
                  break;
                case "Soulmender":
                  player.hp = Math.min(
                    getPlayerStats.hp + 30,
                    getPlayerStats.hp
                  );
                  logTurn("Your Relic heals your spirit— +30 HP!");
                  break;
              }
            }

    // containers
    const playerHPDisplay = document.getElementById('player-hp');
    const enemyHPDisplay = document.getElementById('enemy-hp');

    //check for player turn
    let isPlayerTurn = true;

    //gets colors for HP transition
    function getHPColor(current, max) {
        const ratio = current / max;
    
        if (ratio >= 0.75) return "#00FF00";     //Green
        if (ratio >= 0.5) return "#FFFF00";      //Yellow
        if (ratio >= 0.25) return "#FFA500";     //Orange
        return "#FF0000";                        //Red
    }

    // update the fight scene display
    function updateDisplay() {
        const maxHP = getPlayerStats.hp;
        const enemyMaxHP = 300; // Or whatever the enemy's true max HP is
    
        const playerColor = getHPColor(player.hp, maxHP);
        const enemyColor = getHPColor(enemy.hp, enemyMaxHP);
    
        const playerOverhealText = player.overheal > 0 ? ` <span style="color: lightblue;">(+${player.overheal})</span>` : "";
    
        playerHPDisplay.innerHTML = `${player.name} HP: <span style="color:${playerColor};">${player.hp}</span>${playerOverhealText}`;
        enemyHPDisplay.innerHTML = `${enemy.name} HP: <span style="color:${enemyColor};">${enemy.hp}</span>`;
    }

    function endFight() {
        document.getElementById('fight-container').style.display = 'none';
        document.dispatchEvent(new CustomEvent("fightEnded"));
    }

    function enemyTurn() {
        logTurn("The Shade is preparing to attack...");

        setTimeout(() => {
            if (jobIndex === "1" && Math.random() < 0.15) {
                const selfDmg = 15; 
                enemy.hp = Math.max(0, enemy.hp - selfDmg);
                logTurn(`In their struggle, ${enemy.name} lashes out at itself for ${selfDmg} damage!`);
                updateDisplay();
                if (enemy.hp <= 0) {
                  logTurn(`You survived its self‐destruction!`);
                  return endFight();
                }
              }
            
            if (jobIndex === "3") {
                const skills = ["dodge","shield","siphon"];
                const choice = skills[Math.floor(Math.random() * skills.length)];
                switch (choice) {
                    case "dodge":
                        enemy.dodgeNext = true;
                        enemy.critReady = true;
                        logTurn(`${enemy.name} bristles, ready to dodge your next attack!`);
                        break;
                    case "shield":
                        const shieldAmt = Math.floor(enemy.def * 0.5);
                        enemy.def += shieldAmt;
                        enemy.tempDefBonus = shieldAmt;
                        logTurn(`${enemy.name} reinforces its defenses (+${shieldAmt} DEF)!`);
                        break;
                    case "siphon":
                        const cost    = Math.floor(enemy.maxHP * 0.1);
                        const buff    = Math.floor(cost * 1.5);
                        enemy.hp      = Math.max(1, enemy.hp - cost);
                        enemy.atk    += buff;
                        logTurn(`${enemy.name} siphons ${cost} HP for +${buff} ATK!`);
                        break;
                }
            }

            let echoAtk = enemy.atk;
            if (jobIndex === "3" && enemy.critReady) {
                echoAtk *= 1.5;
                logTurn(`${enemy.name} lands a critical blow!`);
                enemy.critReady = false;
            }
            player.receiveDMG(echoAtk);
            updateDisplay();
            syncPlayers(); //sync then update
            updateStatsPanel();

            if (player.hp <= 0) {
                logTurn("You were overwhelmed...");
                setTimeout(endFight, 1000);
            } else {
                isPlayerTurn = true;
                setActionButtons(true);
                logTurn("It's your turn.");
            }
        }, 800);
    }

    itemButton.onclick = () => {
        if (!isPlayerTurn) return;
        setActionButtons(false);
       // look for Small Healing Elixir in the story-level inventory
        const elixir = window.player.getItem("Small Healing Elixir");
        if (elixir) {
        // heal 50 HP, not exceeding max
            const maxHP = getPlayerStats.hp;
            player.hp = Math.min(player.hp + 50, maxHP);
            logTurn("You drink a Small Healing Elixir and recover 50 HP!");
                updateDisplay();
                syncPlayers();
                updateStatsPanel();
         
                // remove the elixir so it can't be reused
                window.player.removeItem(elixir);
                logTurn("Your Small Healing Elixir is used up.");
         
                // now enemy’s turn
                isPlayerTurn = false;
                return setTimeout(enemyTurn, 1500);
               }
         
               // no usable items
               logTurn("You search your pack, but find nothing to use...");
               isPlayerTurn = false;
               setTimeout(enemyTurn, 1500);
            };

    attackButton.onclick = () => {
        console.log("button clicked");
        playBtnSound();
        if (!isPlayerTurn) return;
        setActionButtons(false);

        if (jobIndex === "0" && Math.random() < 0.20) {
            logTurn(`${enemy.name} dodged your attack!`);
            // skip straight to its turn
            isPlayerTurn = false;
            return setTimeout(enemyTurn, 1500);
        }

        if (jobIndex === "3" && enemy.dodgeNext) {
            logTurn(`${enemy.name} dodged your attack!`);
            enemy.dodgeNext = false;
            return isPlayerTurn = false, setTimeout(enemyTurn, 1500);
        }

        if (player.classType === "Sentinel") {      // Resets DEF to prevent stacking
            player.resetTemporaryDefense();
        }

        let dmg = player.atk - enemy.def;

        if (player.classType === "Sentinel" && player.recordedDamage > 0) {     
            dmg += Math.floor(player.recordedDamage * 1.5);
            logTurn(`You unleash stored energy for +${Math.floor(player.recordedDamage * 1.5)} bonus damage!`);
            player.recordedDamage = 0;
            player.isRecordingDamage = false;
        }

        if (player.classType === "Exterminator" && player.critReady) {
            dmg *= 2;
            logTurn("You unleash a critical strike for double damage!");
            player.critReady = false;
        }

        dmg = Math.max(0, dmg);
        logTurn(`You strike the Shade for ${dmg} damage...`);


        setTimeout(() => {
            enemy.receiveDMG(dmg);
            updateDisplay();

            if (jobIndex === "2" && !burdenPhaseTwo && enemy.hp <= 0) {
                burdenPhaseTwo = true;
                logTurn(`The ${enemy.name} withers, but reveals another lurking presence...`);
                // swap into phase two
                enemy.name = "The Tethered";
                enemy.hp   = originalEnemyHP;
                enemy.def  =  25;
                enemy.atk  =  80;
                updateDisplay();
                // let it attack immediately
                isPlayerTurn = false;
                return setTimeout(enemyTurn, 1500);
              }

            if (player.classType === "Soulmender" && player.bonusAtk > 0) {
                const healAmount = Math.floor(player.bonusAtk * 2);
                const maxHP = getPlayerStats.hp;

                const normalHeal = Math.min(healAmount, maxHP - player.hp);
                const overhealAmount = healAmount - normalHeal;

                player.hp += normalHeal;
                player.overheal += overhealAmount;

                logTurn(`You absorb energy and heal for ${healAmount} HP.`);
                if (overhealAmount > 0) {
                    logTurn(`You are temporarily fortified with ${overhealAmount} extra HP.`);
                }

                player.atk = player.baseAtk;
                player.bonusAtk = 0;
            
                syncPlayers();
                updateStatsPanel();
            }

        updateDisplay();

        if (enemy.hp <= 0) {
            logTurn("You defeated the Shade!");
            endFight();
        } else {
            isPlayerTurn = false;
            setTimeout(enemyTurn, 1500);
        }
    }, 600);
};

    skillButton.onclick = () => {
        playBtnSound();
        if (!isPlayerTurn) return;
        setActionButtons(false);

        if (player.classType === "Sentinel") {
            player.resetTemporaryDefense();
            const bonus = player.def * 2;
            player.def += bonus;
            player.tempDefBonus = bonus;
            player.isRecordingDamage = true;
            logTurn("You brace yourself, increasing defense and preparing to store damage.");
            updateDisplay();
            syncPlayers();
            updateStatsPanel();
            isPlayerTurn = false;
            setTimeout(enemyTurn, 1500);
        }

        if (player.classType === "Exterminator") {
            player.turnSkipped = true;
            player.dodgeNext = true;
            logTurn("You prepare for a critical counter... hoping to dodge the next blow.");
            isPlayerTurn = false;
            setTimeout(enemyTurn, 1500);
        }

        if (player.classType === "Soulmender") {
            const maxHP = getPlayerStats.hp;
            const hpCost = Math.floor(maxHP * 0.15);
            const bonusAtk = Math.floor(hpCost * 2.5);

            player.hp -= hpCost;
            if (player.hp < 0) player.hp = 0;

            player.bonusAtk += bonusAtk;
            player.atk += bonusAtk;

            logTurn(`You siphon ${hpCost} HP to increase your strength!`);
            logTurn(`Your attack increased by ${bonusAtk}. (Total ATK Buff: ${player.bonusAtk})`);

            updateDisplay();
            syncPlayers();
            updateStatsPanel();

            isPlayerTurn = false;
            setTimeout(enemyTurn, 800);
            return;
        }
    };
    
    updateDisplay();
    setActionButtons(true);
}
