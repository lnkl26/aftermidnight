document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story_container');
    const choiceContainer = document.getElementById('choices_container');
    const classChoiceContainer = document.getElementById('class_choices');
    const textInput = document.getElementById('text_input');
    const firstLoadDiv = document.getElementById('first_load');
    const startGameBtn = document.getElementById('start_button');

    const sceneDisplayNames = {
        // Ending scenes
        "good_ending": "Good Ending",
        "bad_ending": "Bad Ending",
        "secret_start": "Secret Path",
        // Room selection scenes (minimapLayout)
            "entrance": "Entrance",
            "bedrooms": "Bedrooms",
            "mom": "Mom's Room",
            "mom_info_shade" : "Mom's Room",
            "mom_info_shade2" : "Mom's Room",
            "kitchen": "Kitchen",
            "ally": "Ally's Room",
            "bedroomMom" : "Ally's Mom's Room",
            "ally_info_shade" : "Ally's Mom's Room",
            //Jash's room scene
                "jash": "Jash's Room",
                "bedroomJash" : "Jash's Room",
                "jash_info_shade" : "Jash's Room",
                "jash_info_shade2" : "Jash's Room",
                "jash_info_job" : "Jash's Room",
                "jash_info_job2" : "Jash's Room",
        // Room selection scenes (minimapLayout2)
            //Foyer
            "foyer": "Foyer",
            "info_floors": "Foyer",
            "info_paintings": "Foyer",
            //Kitchen
            "kitchen2": "Kitchen",
            "info_objects":"Kitchen",
            "info_pictures":"Kitchen",
            "info_blood":"Kitchen",
        "irrelevant": "Side Room",
        "living": "Living Room",
            //Guest Room
            "guest": "Guest Room",
            "guestBedroom":"Guest Room",
            "guestBedroom_unlocked":"Guest Room",
            "takeCashBox":"Guest Room",
            "takeRelic":"Guest Room",
            //garden
            "garden": "Garden",
            "damianAnalysis":"Garden",
            "damianAnalysis2":"Garden",
            "yourAnalysis": "Garden",
            "examineBody":"Garden",
            "inspectSoil":"Garden",
            "inspectBlood":"Garden",
            //Master BedRoom
            "master": "Master Bedroom",
            "masterBedroom":"Master Bedroom",
            "inspectObjects":"Master Bedroom",
            "applyPressure":"Master Bedroom",
            "otherStand":"Master Bedroom",
            "inspectMarks":"Master Bedroom",
            "touchMarks":"Master Bedroom",
            "lookMarks":"Master Bedroom",
            "inspectBlood2":"Master Bedroom",
        "property" :"Property",
        // Room selection scenes (minimapLayout3)
            "front_outside":"Golden Spoon",
            "petCat":"Entrance Golden Spoon",
            "talkKid":"Entrance Golden Spoon",
            "front_inside":"Inside Golden Spoon",
            //Couple
                "table_couple":"Talking to the Couple",
                "couple_info_shade":"Talking to the Couple",
            //Old Man
                "table_oldman":"Talking to the Old Man",
                "oldman_info1":"Talking to the Old Man",
                "oldman_info2":"Talking to the Old Man",
            //Mom
            "table_mom":"Talking to the Owner",
            "mom_info_her":"Talking to the Owner",
            //Father
            "father_info":"Talking to the Father",
            "father_info2":"Talking to the Father",
            //Upstairs
            "upstairs":"Upstairs Golden Spoon",
            "bedroom_grandma":"Grandma's Room",
            "grandma_info_spoon":"Grandma's Room",
        "entrance3": "Mansion Entrance",
        "stairway": "Stairway",
        "table1": "Dining Room",
        "table2": "Dining Room",
        "kitchen3": "Kitchen",
        "table3": "Dining Room",
        "table4": "Dining Room",
            //livingRoom
            "livingRoom": "Living Room",
            "living_room":"Living Room",
            "inspect_lr":"Living Room",
            "takeSpoon":"Living Room",
        "stairway2": "Upper Stairway",
        "bedroom2ndFloor": "Second Floor Bedroom",
        "storage": "Storage Room",
        // Other key scenes
        "start": "Class Selection",
        "firstCustomer": "Shop Naming",
        "act_end": "Job Complete",
        "act_end_fail": "Job Failed",
        "fight_scene": "Combat",
        "tutorial_fight": "Tutorial Combat",
        "storage_puzzle_begin": "Storage Puzzle",
        "storage_puzzle":"Storage Puzzle",
        "dish_puzzle" : "Dish Puzzle",
        "dish_puzzle_begin":"Dish Puzzle",
        "dish_puzzle_success":"Dish Puzzle",
        "startLocation" : "Ally's Apartment", 
        // Fallback for unknown scenes
        "default": "Game Complete",
        //Charater choice
        "defense" : "Sentinel",
        "attack" : "Exterminator",
        "health" : "Soulmender",
        //intros and tutorials
        "introduction1" : "The Beginning",
        "introduction2" : "The Beginning",
        "tutorial1" : "Tutorial",
        "tutorial2" : "Tutorial",
        "tutorial3" : "Tutorial Fight",
        "tutorial4" : "Tutorial",
        "tutorial5" : "Tutorial",
        "tutorial6" : "Tutorial",
        "tutorial_fight_complete" : "Tutorial Complete",
        //Finishing Investigations
        "finishInvestigation" : "Final Thoughts", //can be changed later
        //suspects info
            //job1
            "suspect_ally" : "First Suspect",
            "suspect_jash" : "First Suspect",
            "suspect_mom" : "First Suspect",
            //job2
            "suspectCops":"Second Suspect",
            "suspectHomeowner":"Second Suspect",
            "suspectAssociates":"Second Suspect",
            //job3
            "suspect_mother":"Third Suspect",
        //conclusions
        "incorrect_conclusion" : "Finish Investigation",
        "correct_conclusion" : "Found Suspect"
    };

    //will use to play button sound effect at each button listener
    const btnSound = document.getElementById('btn_sfx');
    function playBtnSound() {
        if (btnSound) {
            btnSound.currentTime = 0;
            btnSound.play();
        }
    }
    window.playBtnSound = playBtnSound; //to call in fight.js
    // object to store player's character information
    class Player {
        constructor(name) {
            this.name = name;
            this.shopName = '';
            this.level = 0;
            this.classType = 'To be decided.';
            this.stats = { atk: 10, def: 10, hp: 100 };
            this.skills = [];
            this.items = []; // inventory basically
            this.currentScene = 'start';
        }
        addSkill(skill) { this.skills.push(skill); }
        addItem(item) { this.items.push(item); }
        removeItem(item) { this.items.splice(this.items.indexOf(item), 1); }
        addHP(value) { this.stats.hp += value; }
        subHP(value) { this.stats.hp -= value; }
        addATK(value) { this.stats.atk += value; }
        subATK(value) { this.stats.atk -= value; }
        addDEF(value) { this.stats.def += value; }
        subDEF(value) { this.stats.def -= value; }
        getItem(findItem) {return this.items.find(item => item.name === findItem)}
    }

    let player; // must be global
    let storyAdventure;
    let visitedScenes = new Set();
    let requiredScenes = new Set(["player_eavesdrop", "revealCashBox", "grandma_info_spoon"]); // REPLACE WITH new Set(["player_eavesdrop", "revealCashBox", "grandma_info_spoon"]); when fights work
    let jobResults = 0; // keeps track of correct conclusions for jobs

    //defining tile layouts
    const minimap = document.getElementById('minimap');
    const minimapLayout = {
        entrance: [
            ['X', '.', '.'],
            ['.', '.', '.'],
        ],
        bedrooms: [
            ['.', 'X', '.'],
            ['.', '.', '.'],
        ],
        mom: [
            ['.', '.', 'X'],
            ['.', '.', '.'],
        ],
        kitchen: [
            ['.', '.', '.'],
            ['X', '.', '.'],
        ],
        ally: [
            ['.', '.', '.'],
            ['.', 'X', '.'],
        ],
        jash: [
            ['.', '.', '.'],
            ['.', '.', 'X'],
        ],
    };
    const minimapLayout2 = {
        foyer: [
            ['X', '.', '.'],
            ['.', '.'],
            ['.', '.'],
        ],
        kitchen2: [
            ['.', 'X', '.'],
            ['.', '.'],
            ['.', '.'],
        ],
        irrelevant: [
            ['.', '.', 'X'],
            ['.', '.'],
            ['.', '.'],
        ],
        living: [
            ['.', '.', '.'],
            ['X', '.'],
            ['.', '.'],
        ],
        guest: [
            ['.', '.', '.'],
            ['.', 'X'],
            ['.', '.'],
        ],
        garden: [
            ['.', '.', '.'],
            ['.', '.'],
            ['X', '.'],
        ],
        master: [
            ['.', '.', '.'],
            ['.', '.'],
            ['.', 'X'],
        ],
    };
    const minimapLayout3 = {
        entrance3: [
            ['X', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.'],
        ],
        stairway: [
            ['.', '.', 'X'],
            ['.', '.', '.'],
            ['.', '.', '.'],
        ],
        table1: [
            ['.', '.', '.'],
            ['X', '.', '.'],
            ['.', '.', '.'],
        ],
        table2: [
            ['.', '.', '.'],
            ['.', 'X', '.'],
            ['.', '.', '.'],
        ],
        kitchen3: [
            ['.', '.', '.'],
            ['.', '.', 'X'],
            ['.', '.', '.'],
        ],
        table3: [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['X', '.', '.'],
        ],       
        table4: [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', 'X', '.'],
        ],        
        livingRoom: [
            ['X', '.'],
            ['.', '.'],
        ],
        stairway2: [
            ['.', 'X'],
            ['.', '.'],
        ],
        bedroom2ndFloor: [
            ['.', '.'],
            ['X', '.'],
        ],
        storage: [
            ['.', '.'],
            ['.', 'X'],
        ],
    };
    class Skill {
        constructor(skillName, reqLvl) {
            this.skillName = skillName;
            this.reqLvl = reqLvl;
        }
        checkLvl(player) { // call this on each skill upon lvl up
            if (player.level >= this.reqLvl) {
                player.addSkill(this);
            }
        }
    }

    class Item {
        constructor(name) {
            this.name = name;
            this.isConsumable = false;
        }
    }

    class Choice {
        constructor(text, nextSceneTitle, job) {
            this.text = text;
            this.job = job;
            this.nextSceneTitle = nextSceneTitle;
            this.visible = true; //determines whether choice is rendered
            this.exclusive = null; // flag to determine if the choices are exclusive
            this.conditionalA = null; //flag to determine if choice appears based on condition
            this.conditionalD = null; //flag to determine if choice disappears based on condition
            this.limited = null; //flag to determine if choice is only visible for one time before disappearing for good
        }
        setExclusive(flagName) {
            this.exclusive = flagName;
        }
        setConditionalA(key) {
            this.conditionalA = key
            this.visible = false
        }
        setConditionalD(key) {
            this.conditionalD = key
        }
        setLimited(scene) {
            this.limited = scene;
        }
        renderChoice(sceneTitle) {
            // new container that holds class choices to add tooltips
            const choiceWrapper = document.createElement('div');
            choiceWrapper.classList.add("classChoice-button");
            const choiceButton = document.createElement('button');
            choiceButton.innerText = this.text;
            //if limited, warn player
            if(this.limited) {
                const warning = document.createElement('div');
                warning.classList.add('limited_warning');
                warning.innerText = "This opportunity will not last...";
                choiceWrapper.appendChild(warning); //add warning
            }

            choiceButton.addEventListener('click', () => {
                playBtnSound();
                this.renderNextScene();
            });
            const isClassSelectScene = sceneTitle.toLowerCase() === 'start'; // rework for new architecture to use in next if statement

            // add tooltips to buttons only if at class select screen
            if (isClassSelectScene && ["Exterminator", "Sentinel", "Soulmender"].includes(this.text)) {
                const tooltip = document.createElement('span');
                tooltip.classList.add("tooltip");
                tooltip.id = "myTooltip";

                // define what tooltips will say
                tooltip.innerText = this.text === "Exterminator" ? "Start with +50 ATK \n Skill: 75% chance to dodge an attack, if successful deal 2x DMG on next attack " :
                                    this.text === "Sentinel" ? "Start with +50 DEF \n Skill: Brace yourself with a defensive stance to record reduced DMG to unleash back" :
                                    "Start with +50 HP \n Skill: Siphon your own HP to greatly enhance ATK; overheal from DMG dealt";
                choiceWrapper.appendChild(choiceButton);
                choiceWrapper.appendChild(tooltip);
                classChoiceContainer.appendChild(choiceWrapper);
            } else {
                const element = document.getElementById("myTooltip");
                if (element) element.remove();
                choiceWrapper.appendChild(choiceButton);
                choiceContainer.appendChild(choiceWrapper);
            }
        }
        renderNextScene() {
            let nextScene = this.job.getScene(this.nextSceneTitle);

            // to hide unchosen choices
            if(this.exclusive) {
                window.exclusiveChosen = window.exclusiveChosen || {};
                window.exclusiveChosen[this.exclusive] = this.text;

                storyAdventure.currentJob.scenes.forEach(scene => {
                    scene.choices.forEach(choice => {
                        if(choice.exclusive === this.exclusive && choice.text !== this.text) {
                            choice.visible = false;
                        }
                    })
                });
            }
            nextScene.render();
            saveGameState();
        }
        setVisibleFalse() {
            this.visible = false;
        }
        getKeyScene(key) {
            let keyScene = this.job.getScene(key)
            return keyScene
        }
        testConditionals() {
            //test conditional appear
            if (this.conditionalA != null) {
                //test scenes
                let keyScene = this.getKeyScene(this.conditionalA)
                if (keyScene != undefined) {
                    if (keyScene.visited === true) {
                        this.visible = true
                    }
                }
                //test items
                let keyItem = player.getItem(this.conditionalA)
                if (keyItem != undefined) {
                    this.visible = true
                }
            }
            //test conditional disappear
            if (this.conditionalD != null) {
                let keyScene = this.getKeyScene(this.conditionalD)
                if (keyScene != undefined) {
                    if (keyScene.visited === true) {
                        this.visible = false
                    }
                }
                //test items
                let keyItem = player.getItem(this.conditionalD)
                if (keyItem != undefined) {
                    this.visible = false
                }
            }

            //test limited
            if (this.limited != null) {
                console.log("TESTLIMITED")
                let keyScene = this.getKeyScene(this.limited)
                if (keyScene.visited === true) {
                    console.log(this.visible)
                    this.visible = false
                }
                console.log(this.visible)
            }
        }
    }

    class Scene {
        constructor(title, text, job, player, item = null) {
            this.title = title;
            this.text = text;
            this.job = job;
            this.choices = []; // list of choice objects
            this.altText = null; // text for if player has already visited (optional)
            this.visited = false;
            this.minimapKey = null; //will determine which layout to render
            this.item = item;
        }
        setMinimapKey(key){
            this.minimapKey = key;
        }
        setAltText(newText) { this.altText = newText; }
        renderChoices() {
            this.choices.forEach(choice => {
                //test for conditionals
                choice.testConditionals(player)
                if (choice.visible === true) {
                    choice.renderChoice(this.title)
                }
            });
        }
        render() {
            // render the scene
            // display alternate text if scene has already been visited
            let sceneText = this.visited && this.altText ? this.altText : this.text;

            // update game container with scene text
            // replace <player> in text with actual player name
            // replace <shopName> in text with actual shop name
            sceneText = `<p>${sceneText.replaceAll('<player>', player.name).replaceAll('<shopName>', player.shopName)}</p>`;
            choiceContainer.innerHTML = ''; // clear previous choices
            classChoiceContainer.innerHTML = ''; // clear class choice buttons

            if(!this.visited && this.item) {
                const item = new Item(this.item.itemName);
                item.isConsumable = this.item.battleUse || this.item.puzzleUse;
                player.addItem(item);
                updateInventory(); //updates inv panel
                console.log(`Item added: ${item.name}`); 
                console.log("Current inventory:", player.items);
            }

            // call animation to render text and show buttons after animation or skip
            typeEffect(storyContainer, sceneText, 35, () => {
                const handler = sceneActionMap[this.title]; // grabs function based on scene title
                // this part collects shop name if in fisrtCustomer scene
                if (this.title === "firstCustomer") {
                    document.getElementById('shop_name_input').style.display = 'block';
                    document.getElementById('shop_submit').onclick = () => {
                        playBtnSound();
                        const shopInput = document.getElementById('shop_input').value.trim();
                        if (!shopInput) {
                            alert("Please enter a shop name.");
                            return;
                        }
                        player.shopName = shopInput; // assign to player
                        document.getElementById('shop_name_input').style.display = 'none'; // remove input box

                        // manually advance to next scene
                        const next = storyAdventure.currentJob.getScene("startLocation"); 
                        storyAdventure.currentJob.setCurrentScene(next);
                        next.render();
                        saveGameState();
                    };
                } else if(handler) {
                    handler(this);
                } else {
                    this.renderChoices(); // normal process, above if is only for one scene
                }
            });
            this.assignStats();
            player.currentScene = this.title;
            this.visited = true;
            visitedScenes.add(this.title);
            //if in scene w/ minimap, display correct minimap else hide
            if (this.minimapKey) {
                if (minimapLayout[this.minimapKey]) {
                    renderMinimap(this.minimapKey);
                    document.getElementById('minimap_container').style.display = 'block';
                //checking for minimap2 keys
                } else if (minimapLayout2[this.minimapKey]) {
                    renderMinimap2(this.minimapKey);
                    document.getElementById('minimap_container').style.display = 'block';
                    //else for minimap2
                } else if (minimapLayout3[this.minimapKey]) {
                    renderMinimap3(this.minimapKey);
                    document.getElementById('minimap_container').style.display = 'block';
                    //else for minimap3
                } else {
                document.getElementById('minimap_container').style.display = 'none';
            } 
        } else {
            document.getElementById('minimap_container').style.display = 'none';
        }
    }           
        addChoices(choices) {
            choices.forEach(choice => {
                let newChoice = new Choice(choice.text, choice.nextScene, this.job)
                //check if appears based on condition
                if (choice.conditionalA != undefined) {
                    newChoice.setConditionalA(choice.conditionalA)
                }
                //check if disappears based on condition
                if (choice.conditionalD != undefined) {
                    newChoice.setConditionalD(choice.conditionalD)
                }
                //check if limited
                if(choice.limited != null) {
                    newChoice.setLimited(choice.nextScene) //pass this scene to check visibility
                }

                if(choice.exclusive) {
                    newChoice.setExclusive(choice.exclusive);
                    if(window.exclusiveChosen && window.exclusiveChosen[choice.exclusive] && window.exclusiveChosen[choice.exclusive] !== choice.text) {
                        newChoice.setVisibleFalse();
                    }
                }

                this.choices.push(newChoice)
            });
        }
        assignStats() {
            if (this.visited) return; // only perform once
            const title = this.title.toLowerCase();
            if (title === "attack") {
                player.stats.atk += 40;
                player.classType = 'Exterminator';
            } else if (title === "defense") {
                player.stats.def += 40;
                player.classType = 'Sentinel';
            } else if (title === "health") {
                player.stats.hp += 50;
                player.classType = 'Soulmender';
            }
            // save stats after class is selected
            window.playerStats = JSON.stringify(player.stats);
            //console.log(window.playerStats); // debugging

            // updates stats so that dropdown stats can update itself/prev just showing base stats
            updateStatsPanel();
            saveGameState();

            localStorage.setItem('playerClass', player.classType);
            //console.log("Updated Stats:", player.stats); // debugging
        }
    }

    // TEMPORARY SOLUTION: ADDED SCENE ACTION MAP
    const sceneActionMap = {
        "fight_scene": handleFight,
        "tutorial_fight": handleTutorial,
        "incorrect_conclusion": () => handleConclusion("fail"), // does not execute immediately, waits for parameter first
        "storage_puzzle_begin": handleStoragePuzzle,
        "dish_puzzle": handleDishPuzzle
    }

    //  HANDLER FUNCTIONS FOR ABOVE
    function handleFight(scene) {
        const fightContainer = document.getElementById('fight-container'); // creates fightContainer
        const fightMusic = document.getElementById('fight_music'); //get mp3 from html

        if (fightMusic) { 
            music.muted = true; //mute bg music
            fightMusic.currentTime = 0; //restart each fight scene
            fightMusic.volume = parseFloat(volumeSlider.value);//sets to default 50%
            fightMusic.play(); //play intense music!
        }

        if(fightContainer) { // if fight container exists
            fightContainer.style.display = 'block'; // show fightContainer
        }

        // checks the what job we're currently in (probably a good idea to turn this into a function)
        const currentJobIndex = storyAdventure.getCurrentJobIndex();
        console.log(currentJobIndex);

        // story job index in localStorage so fight.js can access it
        const fightIndex = String(currentJobIndex);
        localStorage.setItem("jobIndex", fightIndex);

        document.addEventListener("fightEnded", () => {
            // hide fight container when fight ends
            fightContainer.style.display = 'none';

            //stops fight music and resumes bg music
            const fightMusic = document.getElementById('fight_music');
            if(fightMusic){
                fightMusic.pause();
                fightMusic.currentTime = 0; 
            }
            if (music) {
                music.muted = false;
            }

            // checks if player won the fight
            if(player.stats.hp > 0) {
                playerWon = true;
                handleConclusion("success");
            } else {
                handleConclusion("fail"); // CHANGE THIS LATER
            }
        }, { once: true });
    }

    function handleTutorial() {
        const fightContainer = document.getElementById('fight-container'); // creates fightContainer
        const fightMusic = document.getElementById('fight_music'); //get mp3 from html

        if (fightMusic) { 
            music.muted = true; //mute bg music
            fightMusic.currentTime = 0; //restart each fight scene
            fightMusic.volume = parseFloat(volumeSlider.value);//sets to default 50%
            fightMusic.play(); //play intense music!
        }

        if(fightContainer) { // if fight container exists
            fightContainer.style.display = 'block'; // show fightContainer
        }

        // checks the what job we're currently in (probably a good idea to turn this into a function)
        const currentJobIndex = storyAdventure.getCurrentJobIndex();
        console.log(currentJobIndex);

        // story job index in localStorage so fight.js can access it
        localStorage.setItem("jobIndex", "tutorial");

        document.addEventListener("fightEnded", () => {
            // hide fight container when fight ends
            fightContainer.style.display = 'none';

            //stops fight music and resumes bg music
            const fightMusic = document.getElementById('fight_music');
            if(fightMusic){
                fightMusic.pause();
                fightMusic.currentTime = 0; 
            }
            if (music) {
                music.muted = false;
            }

            const nextScene = storyAdventure.jobs[0].getScene("tutorial_fight_complete");
            if (nextScene) {
                storyAdventure.jobs[0].setCurrentScene(nextScene);
                nextScene.render();
            }
        },  { once: true });
    }

    function handleConclusion(outcome) {
        const currentJobIndex = storyAdventure.getCurrentJobIndex();
        const nextJobIndex = currentJobIndex + 1;
        
        if (outcome === "success") {
            jobResults++;
        }
    
        // after 3 jobs, check if we should go to the base ending or secret path
        if (nextJobIndex === 3) {
            const endingJob = storyAdventure.jobs[3];
    
            let endingScene = null;
    
            // check if the player has exactly 3 correct conclusions
            if (jobResults === 3) { // FOR TESTING THIS IS 1 BUT IN THE FINAL IT SHOULD BE 3
                // Check if the player has visited all secret path scenes
                const allSecretsVisited = [...requiredScenes].every(scene => visitedScenes.has(scene));
                if (allSecretsVisited) {
                    // player unlocked the secret path, go to secret_start scene
                    endingScene = endingJob.getScene("secret_start");
                } else {
                    // player did not unlock the secret path, go to good_ending
                    endingScene = endingJob.getScene("good_ending");
                }
            } else if (jobResults === 2) {
                // player got 2 correct conclusions, go to good_ending
                endingScene = endingJob.getScene("good_ending");
            } else {
                // player didn't reach 2 correct conclusions, go to bad_ending
                endingScene = endingJob.getScene("bad_ending");
            }
    
            if (endingScene) {
                storyAdventure.setCurrentJob(endingJob);
                storyAdventure.currentJobIndex = 3;
                endingJob.setCurrentScene(endingScene);
                endingScene.render();
            } else {
                console.error(`Ending scene not found in ending job.`);
            }
    
            return; // exit the function after handling the ending
        }
    
        // Normal progression to the next job
        const nextJob = storyAdventure.jobs[nextJobIndex];
        if (nextJob) {
            const sceneKey = outcome === "success" ? "act_end" : "act_end_fail"; // ternary operator if success then act_end otherwise act_end_fail
            const nextScene = nextJob.getScene(sceneKey);
    
            if (nextScene) {
                storyAdventure.setCurrentJob(nextJob);
                storyAdventure.currentJobIndex = nextJobIndex;
                nextJob.setCurrentScene(nextScene);
                nextScene.render();
            } else {
                console.error(`Scene "${sceneKey}" not found in job index ${nextJobIndex}`);
            }
        } else {
            console.warn("No more jobs left after current job.");
        }
    }

    function handleStoragePuzzle(scene) {
        const puzzleContainer = document.getElementById('puzzle-container');
        if(puzzleContainer) {
            puzzleContainer.style.display = 'block'; // show puzzleContainer
        }

        new MazePuzzle(); // create the mazePuzzle
        document.addEventListener("mazePuzzleSuccess", () => {
            puzzleContainer.style.display = 'none'; // hide puzzleContainer on success
            const next = storyAdventure.jobs[2].getScene("storage_puzzle_success");
            storyAdventure.setCurrentJob(storyAdventure.jobs[2]);
            storyAdventure.currentJob.setCurrentScene(next);
            next.render();
        });
        document.addEventListener("mazePuzzleFail", () => {
            puzzleContainer.style.display = 'none'; // hide puzzleContainer on fail
            const next = storyAdventure.jobs[2].getScene("storage_puzzle_fail");
            storyAdventure.setCurrentJob(storyAdventure.jobs[2]);
            storyAdventure.currentJob.setCurrentScene(next);
            next.render();
        });
    }

    function handleDishPuzzle(scene) {
        const puzzleContainer = document.getElementById('puzzle-container');
        if(puzzleContainer) {
            puzzleContainer.style.display = 'block'; // show puzzleContainer
        }

        new DishPuzzle(); // create the dishPuzzle
        document.addEventListener("dishPuzzleSuccess", () => {
            puzzleContainer.style.display = 'none'; // hide puzzleContainer on success
            const next = storyAdventure.jobs[2].getScene("dish_puzzle_success");
            storyAdventure.setCurrentJob(storyAdventure.jobs[2]);
            storyAdventure.currentJob.setCurrentScene(next);
            next.render();
        });
    }

    class Job {
        constructor(storyDataJob, player) {
            this.currentScene = null;
            this.scenes = storyDataJob.map(data => {
                let scene = new Scene(data.title, data.text, this, player, data.item || null);
                if (data.altText) scene.setAltText(data.altText);
                if (data.minimapKey) scene.setMinimapKey(data.minimapKey);
                scene.addChoices(data.choices);
                return scene;
            });
            this.visible = true //true or false
            this.battleSuccess = false //set to true when win
            this.secretPath = null;
        }
        setCurrentScene(scene) { this.currentScene = scene; }
        setLastScene(scene) { this.lastScene = scene; }
        setSecretPath(scene) { this.secretPath = scene; }
        setVisibleFalse() { this.visible = false }
        setVisibleTrue() { this.visible = true }
        setBattleSuccessTrue() { this.battleSuccess = true }
        getScene(newSceneTitle) { return this.scenes.find(scene => scene.title === newSceneTitle); }
        renderJob() { this.currentScene.render() }
        testVisible() {
            if (this.visible === false) {
                //test for visibility
                let success = true;
                for (let i = 0; i < 3; i++) {
                    //test for battles
                    if (storyAdventure.jobs[i].battleSuccess === false) {
                        success = false
                        break
                    }
                    //test for secretPath
                    if (storyAdventure.jobs[i].secretPath.visited === false) {
                        success = false
                        break
                    }
                }
                if (success === true) { this.setVisibleTrue() }
            }
        }
    }

    class Story {
        constructor() {
            this.currentJob = null;
            this.jobs = []; // list of jobs
            this.currentJobIndex = -1; // keeps track of current index of the jobs object 
        }
        addJob(storyDataJob) { this.jobs.push(new Job(storyDataJob, player)); }
        setCurrentJob(job) { 
            this.currentJob = job;
            this.currentJobIndex = this.jobs.indexOf(job);
        }
        getCurrentJob() { return this.currentJob; }
        getCurrentJobIndex() {
            return this.currentJobIndex;
        }
    }

    function saveGameState() {
        let games = JSON.parse(localStorage.getItem("savedGames")) || [];
        const gameIndex = localStorage.getItem("currentGameIndex");
    
        // Validate player and currentScene
        if (!player || !player.currentScene) {
            console.warn(`saveGameState: player.currentScene is ${player?.currentScene || 'undefined'}, using default location`);
        }
    
        const jobStates = storyAdventure.jobs.map(job => ({
            scenes: job.scenes.map(scene => ({
                title: scene.title,
                visited: scene.visited
            })),
            battleSuccess: job.battleSuccess,
            visible: job.visible,
            currentSceneTitle: job.currentScene ? job.currentScene.title : null
        }));
    
        const gameData = {
            player: {
                name: player.name || "Unknown Player",
                shopName: player.shopName || "",
                level: player.level || 0,
                classType: player.classType || "To be decided",
                stats: player.stats || { atk: 10, def: 10, hp: 100 },
                skills: player.skills?.map(skill => ({ skillName: skill.skillName, reqLvl: skill.reqLvl })) || [],
                items: player.items?.map(i => ({ name: i.name, isConsumable: i.isConsumable })) || [],
                currentScene: player.currentScene || "",
                currentSceneDisplay: sceneDisplayNames[player.currentScene] || sceneDisplayNames.default
            },
            currentJobIndex: storyAdventure.currentJobIndex,
            visitedScenes: Array.from(visitedScenes),
            jobResults: jobResults,
            requiredScenes: Array.from(requiredScenes),
            exclusiveChosen: window.exclusiveChosen || {},
            jobStates: jobStates,
            timestamp: new Date().toISOString()
        };
    
        // Log if scene is unmapped
        if (!sceneDisplayNames[player.currentScene] && player.currentScene) {
            console.warn(`saveGameState: Unmapped scene title "${player.currentScene}", add to sceneDisplayNames`);
        }
    
        if (gameIndex !== null) {
            games[gameIndex] = gameData;
        } else if (games.length < 6) {
            games.push(gameData);
            localStorage.setItem("currentGameIndex", games.length - 1);
        } else {
            games.shift();
            games.push(gameData);
            localStorage.setItem("currentGameIndex", 5);
        }
    
        localStorage.setItem("savedGames", JSON.stringify(games));
    }

    function loadGameState(index) {
        const games = JSON.parse(localStorage.getItem("savedGames")) || [];
        if (!games[index]) return;
    
        window.beenHere = false;
        const gameData = games[index];
    
        // Restore player
        player = new Player(gameData.player.name);
        player.shopName = gameData.player.shopName;
        player.level = gameData.player.level;
        player.classType = gameData.player.classType;
        player.stats = gameData.player.stats;
        player.skills = gameData.player.skills.map(s => new Skill(s.skillName, s.reqLvl));
        player.items = gameData.player.items.map(i => {
            const item = new Item(i.name);
            item.isConsumable = i.isConsumable;
            return item;
        });
        player.currentScene = gameData.player.currentScene;
        window.player = player; // Make player global for fight.js
    
        // Restore story and jobs
        storyAdventure = new Story();
        storyAdventure.addJob(storyDataJob1);
        storyAdventure.addJob(storyDataJob2);
        storyAdventure.addJob(storyDataJob3);
        storyAdventure.addJob(storyDataJob4);
    
        // Restore job states
        gameData.jobStates.forEach((jobState, jobIndex) => {
            const job = storyAdventure.jobs[jobIndex];
            job.battleSuccess = jobState.battleSuccess;
            job.visible = jobState.visible;
            jobState.scenes.forEach(sceneState => {
                const scene = job.getScene(sceneState.title);
                if (scene) scene.visited = sceneState.visited;
            });
            if (jobState.currentSceneTitle) {
                const scene = job.getScene(jobState.currentSceneTitle);
                if (scene) job.setCurrentScene(scene);
            }
        });
    
        // Set current job and scene
        storyAdventure.currentJobIndex = gameData.currentJobIndex;
        storyAdventure.setCurrentJob(storyAdventure.jobs[gameData.currentJobIndex]);
        const currentScene = storyAdventure.currentJob.getScene(player.currentScene);
        storyAdventure.currentJob.setCurrentScene(currentScene);
    
        // Restore global state
        visitedScenes = new Set(gameData.visitedScenes);
        jobResults = gameData.jobResults;
        requiredScenes = new Set(gameData.requiredScenes);
        window.exclusiveChosen = gameData.exclusiveChosen;
    
        // Hide first load screen
        document.getElementById('first_load').style.display = 'none';
    
        // Reattach volume slider and music
        music = document.getElementById('background_music');
        fightMusic = document.getElementById('fight_music');
        volumeSlider = document.getElementById('volume_slider');
        if (music && volumeSlider) {
            music.volume = parseFloat(volumeSlider.value);
            fightMusic.volume = parseFloat(volumeSlider.value);
            volumeSlider.addEventListener('input', () => {
                music.volume = volumeSlider.value;
                if (fightMusic) fightMusic.volume = volumeSlider.value;
            });
        }
    
        // Update UI
        updateStatsPanel();
        updateInventory();
    
        // Render the current scene
        currentScene.render();
    
        // Set the current game index
        localStorage.setItem("currentGameIndex", index);
    }

    // function to handle the start of the game
    startGameBtn.addEventListener('click', () => {
        playBtnSound();
        const playerName = textInput.value.trim();
        
        // basic validation
        if (!playerName) {
            alert("Please enter a valid character's name.");
            return;
        }

        // Check if there are available save slots
        let games = JSON.parse(localStorage.getItem('savedGames')) || [];
        if (games.length >= 6) {
            alert('All save slots are full. Please delete a saved game to start a new one.');
            localStorage.setItem('startNewGame', 'true'); // Flag to indicate new game attempt
            window.location.href = 'Branch.html';
            return;
        }

        // some browsers block pop up audio, so music begins when player starts story
        music = document.getElementById('background_music');
        fightMusic = document.getElementById('fight_music');
        if (music && playerName){
            music.play();
        }
        //volume slider logic
        volumeSlider = document.getElementById('volume_slider');
        music.volume = parseFloat(volumeSlider.value); //sets volume eqault to slider value/50%
        fightMusic.volume = parseFloat(volumeSlider.value);
        volumeSlider.addEventListener('input', () => {
            music.volume = volumeSlider.value;
            if (fightMusic) {
                fightMusic.volume = volumeSlider.value;
            }
        });
        window.player = null; //reset if player restarted so stats update
        //instantiate objects
        player = new Player(playerName);
        window.player = player; //so fight.js can sync and update stats panel 
        storyAdventure = new Story(player);
        storyAdventure.addJob(storyDataJob1);
        storyAdventure.addJob(storyDataJob2); // added job 2
        storyAdventure.addJob(storyDataJob3); // added job 3
        storyAdventure.addJob(storyDataJob4); // added job 4

        storyAdventure.setCurrentJob(storyAdventure.jobs[0]);
        firstLoadDiv.style.display = 'none'; // make sure firstLoadDiv disappears
        //render first scene
        storyAdventure.currentJob.setCurrentScene(storyAdventure.currentJob.scenes[0]); 
        storyAdventure.currentJob.currentScene.render();
        saveGameState();
    });
    //window makes it global so index.html can call it
    window.handleMenuSelection = function(option) { // yes or no pop up
        playBtnSound();
        if (option === 'option1') {
            if (confirm("Are you sure you want to restart?")) location.reload(); // restarts game if they click yes
        } else if (option === 'option2') { 
            if (!player || !player.name) {
                alert("You must enter a name to view stats.");
                return;
            }
            document.getElementById('stats_panel').style.display = 'block';
        } else if (option === 'option3') { 
            window.location.href = "Branch.html";
        } else if (option === 'option4'){
            saveGameState(); //it will have the current game to the appropriate slot
            /*The message that the game is saved in to top right corner*/
            const saveMessage = document.createElement('div');
            saveMessage.textContent = 'Game saved successfully!';
            saveMessage.style.position = 'fixed';
            saveMessage.style.top = '20px';
            saveMessage.style.right = '20px';
            saveMessage.style.padding = '10px';
            saveMessage.style.backgroundColor = '#621cd3';
            saveMessage.style.color = 'white';
            saveMessage.style.borderRadius = '5px';
            saveMessage.style.zIndex = '1000';
            document.body.appendChild(saveMessage);
            setTimeout(() => saveMessage.remove(), 3000);
        }
        else if (option === 'option5') { //settings menu
            const settingsPanel = document.getElementById('settings_panel');
            //only show if not showing
            if (settingsPanel.style.display === 'none' || !settingsPanel.style.display) {
                settingsPanel.style.display = 'block';
            } else {
                settingsPanel.style.display = 'none';
            }
        } else if (option === 'option6') {
            if (!player || !player.name) {
                alert("You must enter a name to view inventory.");
                return;
            }
            const inventoryPanel = document.getElementById('inventory_panel');
            if (inventoryPanel) {
            updateInventory(); //refresh 
            document.getElementById('inventory_panel').style.display = 'block';
            }
        }
    };
    //mute button logic
    const musicToggleBtn = document.getElementById('music_toggle_btn');
        if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', () => {
        playBtnSound();
        const music = document.getElementById('background_music');
        const fightMusic = document.getElementById('fight_music');
        if (music.muted) {  //toggle logic
            music.muted = false;
            if(fightMusic) {
                fightMusic.muted = false;
            }
            musicToggleBtn.textContent = "Mute";
        } else {
            music.muted = true;
            if (fightMusic){
                fightMusic.muted = true;
            }
            musicToggleBtn.textContent = "Unmute";
        }
         });
    }

    function updateStatsPanel() {
        if (!player) return;
        document.getElementById('stat_name').textContent = player.name;
        document.getElementById('stat_level').textContent = player.level;
        document.getElementById('stat_class').textContent = player.classType;
        document.getElementById('stat_atk').textContent = player.stats.atk;
        document.getElementById('stat_def').textContent = player.stats.def;
        document.getElementById('stat_hp').textContent = player.stats.hp;
    }
    window.updateStatsPanel = updateStatsPanel; //allow other scripts to access to call in fight.js

    let skipTyping = false; // flag to skip effect
    document.addEventListener('keydown', (x) => { if (x.key === ' ') skipTyping = true; }); // if spacebar pressed during ani. skip

    // animate the text to comeout as if being typed
    // adds letters 1 at a time, into the htmls element
    // thank you data structures        the call back below is render.choices to spawn after animation
    function typeEffect(element, htmlText, speed = 25, callback = null) {
        const skipTip = document.getElementById('skip-tip');
        if (skipTip) skipTip.classList.add('visible'); // show note
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlText; // turns the entire string into DOM nodes
        element.innerHTML = ''; // clear the container
        // uses nodes (blocks of text or html format, <p>, <br> etc.) from DOM tree
        let elements = Array.from(tempDiv.childNodes); // fill array w/ nodes to loop
        let currentNodeIndex = 0; // track index

        function typeNode(node, onComplete) { // recursive, types out one node, html or text
            if (node.nodeType === Node.TEXT_NODE) { // if just text, simple animation
                let text = node.textContent;
                let i = 0;
                let span = document.createElement('span'); // create span to put text so it doesnt bother layout
                element.appendChild(span); // construct text
                // function to type one char at a time
                function typeChar() {
                    if (skipTyping) { // if skipped, paste all nodes
                        span.textContent += text.slice(i);
                        if (onComplete) onComplete();
                        return;
                    }
                    if (i < text.length) {
                        span.textContent += text.charAt(i); // add one character
                        i++;
                        setTimeout(typeChar, speed); // wait before printing next character
                    } else if (onComplete) onComplete(); // ignore html flags // when done, move to next node
                }
                typeChar();
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                let clone = node.cloneNode(false);
                element.appendChild(clone);
                let childNodes = Array.from(node.childNodes);
                let j = 0;
                function typeChildren() { // put together text and tags/format
                    if (j < childNodes.length) {
                        typeNode(childNodes[j], () => {
                            j++;
                            typeChildren();
                        });
                    } else if (onComplete) onComplete(); // fail safe if hit a weird tag or end
                }
                typeChildren();  // call prev function
            } else if (onComplete) onComplete(); // skip unsupported nodes
        }

        // main function to do animation in sequential order
        function typeAll() { // the loop that processes each node
            if (skipTyping) {
                element.innerHTML = htmlText; // show original/final html if skipped
                skipTyping = false;
                if (skipTip) skipTip.classList.remove('visible'); // remove skip tip
                if (callback) callback(); // render choices
                return;
            }
            // process each node recursively
            if (currentNodeIndex < elements.length) { // if still nodes, process current
                typeNode(elements[currentNodeIndex], () => {
                    currentNodeIndex++;
                    typeAll(); // next node
                });
            } else if (callback) { // render choices
                if (skipTip) skipTip.classList.remove('visible');
                callback();
            }
        }
        typeAll(); // start the animation
    }

    const loadIndex = localStorage.getItem("loadGameIndex");
    const allowMusic = localStorage.getItem("allowMusic");
    if (loadIndex !== null) {
        loadGameState(parseInt(loadIndex));   
        localStorage.removeItem("loadGameIndex");

        //autoplay workaround
        if (allowMusic === "true") { //flag passed from branch.js
            const music = document.getElementById("background_music");
            //function called on interaction
            const resumeMusic = () => {
                if (music) {
                    music.play();
                }
                localStorage.removeItem("allowMusic");
                document.removeEventListener("click", resumeMusic);
                document.removeEventListener("keydown", resumeMusic);
            };
            //any interaction will start music again
            document.addEventListener("click", resumeMusic);
            document.addEventListener("keydown", resumeMusic);
            }
    }
    function renderMinimap(scene) {
        //show map based on scene
        const layout = minimapLayout[scene];
        //clear container
        minimap.innerHTML = '';
        //define rows and colums and sizes
        minimap.style.gridTemplateColumns = `repeat(${layout[0].length}, 30px)`
        minimap.style.gridAutoRows = `repeat(${layout.length}, 30px)`;
        //loop through each row and loop through each cell
        layout.forEach(row => {
            row.forEach(cell => {
                const tile = document.createElement('div');
                tile.classList.add('minimap-tile');
                //if X show the different color
                if (cell === 'X'){
                    tile.classList.add('minimap-player');
                }
                //add the tile to minimap
                minimap.appendChild(tile);
            });
        });
    }
    //need new function for different map
    function renderMinimap2(scene) {
        //show map based on scene
        const layout = minimapLayout2[scene];
        //clear container
        minimap.innerHTML = '';
        //hardcode rows and colums and sizes was getting weird behaviour otherwise
        minimap.style.gridTemplateColumns = `repeat(3, 30px)`;
        minimap.style.gridAutoRows = `30px`;
        //loop through each row and loop through each cell
        layout.forEach((row, rowIndex) => {
            for (let col = 0; col < 3; col++) {
                const tile = document.createElement('div');
                tile.classList.add('minimap-tile');
    
                //hide 3rd column for row 1 and 2
                if (((rowIndex === 1 || rowIndex === 2) && col === 2) || (rowIndex === 0 && col === 2)) {
                    tile.style.visibility = 'hidden';
                } else if (row[col] === 'X') {
                    tile.classList.add('minimap-player');
                }
                minimap.appendChild(tile);
            }
        });
    }
    //need new function for different map
    function renderMinimap3(scene) {
        //show map based on scene
        const layout = minimapLayout3[scene];
        //clear container
        minimap.innerHTML = '';
        //hardcode rows and colums and sizes was getting weird behaviour otherwise
        if (scene === "stairway2" || scene === "livingRoom" || scene === "bedroom2ndFloor" || scene === "storage") {
            minimap.style.gridTemplateColumns = `repeat(2, 30px)`;
            minimap.style.gridAutoRows = `30px`;
        } else {
        minimap.style.gridTemplateColumns = `repeat(3, 30px)`;
        minimap.style.gridAutoRows = `30px`;
        }
        //loop through each row and loop through each cell
        layout.forEach((row, rowIndex) => {
            for (let col = 0; col < layout[0].length; col++) {
                const tile = document.createElement('div');
                tile.classList.add('minimap-tile');
        
                //hide correct tiles
                if((scene === "stairway2" || scene === "livingRoom" || scene === "bedroom2ndFloor" || scene === "storage") && (rowIndex === 1 && col === 1)) {
                    tile.style.visibility = 'hidden';
                } else if ((scene !== "stairway2" && scene !== "livingRoom" && scene !== "bedroom2ndFloor" && scene !== "storage") && ((rowIndex === 0 && col === 1) || (rowIndex === 2 && col === 2) || (rowIndex === 0 && col === 2))) {
                    tile.style.visibility = 'hidden';
                } else if (row[col] === 'X') {
                    tile.classList.add('minimap-player');
                }
                minimap.appendChild(tile);
            }
        });
    }
    beenHere = false; //flag to fix bug where empty would duplicate each time empty inv opened
    //refreshes inventory
    function updateInventory() {
        const inventoryList = document.getElementById('inventory_list');
        if(!player) return;
        //if player has no items, display empty and return
        if(player.items.length === 0) {
            if (beenHere) {
                return;
            }
            const emptyMsg = document.createElement('li');
            emptyMsg.textContent = 'Empty';
            emptyMsg.style.fontStyle = 'body_font';
            inventoryList.appendChild(emptyMsg);
            beenHere = true;
            return;
        }
        inventoryList.innerHTML = '' //clear list, rebuilds each call
        player.items.forEach(item => { //loop and add each item
            const list = document.createElement('li');
            list.textContent = item.name;
            inventoryList.appendChild(list);
        });
    }
    window.updateInventory = updateInventory; //make it accessible 
});
