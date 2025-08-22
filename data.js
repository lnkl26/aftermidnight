const cityName = "Silver City"
const playerName = "<player>"
const shopName = "<shopName>"

storyDataJob1 = [{
    title: "start",
    text:   `Human feelings include a complex range of emotions, from happiness to sadness, from courage to fear, and from bitterness to anger.
            <p>In this world, there are monstrous creatures known as Shades that feed on negative emotions, growing in size and eventually attacking humans. They are usually invisible to the naked eye, but are active and more visible after midnight and before the sun rises.
            <p>Of course, humans have evolved to fight back against these Shades, creating wards to keep them away and tools to discover them before they become dangerous. There are even some humans with the rarer ability to exterminate them entirely.
            <p>You, <b>${playerName}</b>, are gifted with this ability, and have been honing your powers in order to defeat these Shades. Where did you focus your training?`,
    choices: [
        { text: "Exterminator", nextScene: "attack" },
        { text: "Sentinel", nextScene: "defense" },
        { text: "Soulmender", nextScene: "health" }
    ],
},
//character select
{
    title: "attack",
    text: `<p>You believe strength is the prime factor in defeating Shades. So, you invested all your time into strength training.
        <p>You will start off with an extra 50 points in your ATK stat.
        <p>When fighting a shade, you can use your skill. When you use your skill, you have a 75% chance to dodge an incoming attack. If you successully dodged the Shade's attack, your next attack will deal twice the DMG.`,
    choices: [
        { text: "continue", nextScene: "introduction1" }
    ]
},
{//"Start with +5 DEF \n Skill: Brace yourself with a defensive stance to record reduced DMG to unleash back" 
    title: "defense",
    text: `<p>You believe a high defense would ensure that you can handle the damage done by Shade, and ultimately defeating in the end. So, you invested all your time into defense training.
        <p>You will start off with an extra 50 points in your DEF stat.
        <p>When fighting a Shade, you can use your skill. When you use your skill, you will activate your Defense Stance, and the amount of reduced DMG you received during this stance, you will unleash back onto the Shade, when you leave your Defense Stance.`,
    choices: [
        { text: "continue", nextScene: "introduction1" }
    ]
},
{
    title: "health",
    text: `<p>You believe that as long as you could survive longer than a Shade, you could defeat it. So, you invested all your time into improving your constitution.
        <p>You will start off with an extra 50 points in your HP stat.
        <p>When fighting a Shade, you can use your skill. When you use your skill, you will siphon your own HP to enhance your own ATK stat for the next turn. You will also deal additional damage based on the amount you overhealed.`,
    choices: [
        { text: "continue", nextScene: "introduction1" }
    ]
},
//introduction scenes
{
    title: "introduction1",
    text:  `With so many people afflicted by Shades, you've made it your goal to help defeat them. After spending the time honing both your abilities and knowledge, you've made the decision to open up a shop offering your services to those in need.
    <p>Are you ready to explore the city after midnight?`,
    choices: [
        { text: "Begin the Story", nextScene: "introduction2" }
    ]
},
{
    title: "introduction2",
    text: `<p>You step out of the train station, a little overwhelmed by the sheer amount of <i>everything</i> that your destination is.
    <p><b>${cityName}</b>. A place known for its technology, its people, its culture, and most importantly, its high density of Shades. It's certainly grander than your hometown, if the heights of the skyscrapers are anything to go by. You take a few moments to just admire the scenery before taking on the task of finding your new store.
    <p>It takes you a while to navigate the busy city, but you do find your destination. It's a quaint little brick building with your living space above it, sharing walls with a coffee shop and a record store, rented to you by a family friend. Laying eyes on the building fills you with excitement, and so you quickly unlock it in order to really get a look at the store you've been waiting your whole life to run.
    <p>Chevron wooden floors compliment the painted green walls. The room is empty save for a counter close to the door and a few barren shelves. Plenty of natural light filters in through the windows, illuminating the dust floating in the air. You'll have to clean up around here.
    <p>The rest of the day is spent unpacking: both in your apartment and in the shop. You'll spend the morning tomorrow preparing some wards and talismans before opening up the shop in the evening, but for now, the building is starting to become a home.`,
    choices: [
        { text: "Continue Unpacking", nextScene: "tutorial1"}
    ]
},
{ // TUTORIAL BEGINS FOR THE DEMO
    title: "tutorial1",
    text: `<p>As you sort through your belongings, your fingers brush against a familiar yet forgotten object— the <b>Shade Manual</b>. The booklet is worn at the edges, a testament to the countless hands that have flipped through its pages before yours. It was handed to you upon earning your certification, a rite of passage for those tasked with eliminating Shades. Its cover bears the insignia of the governing body that oversees Shade extermination, a stark reminder of your duty. 
        <p>Flipping it open, the scent of aged paper and ink rises to meet you. Diagrams, cryptic warnings, and meticulous descriptions fill its pages, detailing the creatures that lurk in the shadows. Some sections are underlined, annotated with notes you scrawled in haste during training. The manual contains knowledge that has saved lives— and could save yours again.
        <p>Do you review it or do you wait for your first customer?`,
    choices: [
        { text: "review the manual", nextScene: "tutorial2" },
        { text: "wait for customer", nextScene: "firstCustomer" } // skips tutorial
    ]
},
{
    title: "tutorial2",
    text: `<p>You decide to brush up on your knowledge about Shades.
            <p>You flipped to the more worn pages of the booklet.
            <p><b>Shade Manual: Understanding the Unseen</b>
            <p>"Shades— silent manifestations of unchecked negativity— exist beyond the perception of ordinary people. Born from excessive distress, they reflect the host's deepest emotions, shaping their form, behavior, and distortive effects on the world. While a Shade does not directly end its host's life, its relentless strain can lead to inevitable decline if left unchecked.
            <p>The lifecycle of a Shade is measured in five stages. In its infancy, removal is simple, but as it grows, intervention demands professional hands. At its most severe, only control— not elimination— is possible, and death becomes the only certainty. 
            <p>Those gifted with <i>Residue Sight</i> see these elusive entities and their corrosive trails— dark distortions creeping through reality, avoided even by wild animals. Some of these individuals pursue the dangerous calling of Shade Extermination. Others, burdened but undeterred, rely on government-issued comfort animals to keep their own Shade at bay.
            <p>Shade outbreaks have shaped history, their numbers swelling in times of war and economic despair. Today, a dedicated branch of government studies and mitigates these occurrences, seeking to contain what most will never know exists.
            <p>This manual serves as both a guide and a warning. To understand Shades is to wield power over them— and perhaps, over oneself..."
            <p>As you continued to read the manual, you heard some shuffling coming from the corner of the shop. Do you check it or ignore it?`,
    choices: [
        { text: "check the noise", nextScene: "tutorial3" }, // fight
        { text: "ignore it", nextScene: "firstCustomer" }
    ]
},
{
    title: "tutorial3",
    text: `<p>You hold still, pulse quickening, ears straining against the silence. Then, it happens again— closer this time, accompanied by a flicker of movement at the very edge of your vision.
        <p>Your breath catches as you shift your gaze. Nestled in the corner, half-hidden by the dim lighting, is something small, dark, and wrong. It clings to the surface of the floor like a distortion in reality, its edges hazy, shifting unnaturally. <p><i>A Shade</i>.
        <p>But... it's tiny. Weak. Barely there.
        <p>Your mind reels back to the manual's words. Shades spawn from excessive negative emotions. You swallow, uneasy realization settling in. This thing— it's yours. Born from the nervous energy buzzing beneath your skin, from the uncertainties pressing against your thoughts.
        <p>It twitches, barely reacting, as if even existing takes effort. It's weak enough to be wiped away with ease— Stage 0, the manual called it— but still, the sight of it lingers in your chest like lead.
        <p>You exhale slowly. You'll have to deal with it.
        <p>But first... you need to steady your hands.`,
    choices: [
        { text: "exterminate shade", nextScene: "tutorial_fight" }
    ]
},
{
    title: "tutorial_fight",
    text: ``, // fight scene here
    choices: []
},
{
    title: "tutorial_fight_complete",
    text: `<p>The fight was brief— almost anticlimactic. The small Shade, weak and trembling, crumbled under the force of your actions. The rush of adrenaline fades almost as quickly as it came, leaving behind a strange quiet in the air. Your breath is still uneven, chest rising and falling with the weight of the encounter, yet there's a strange sense of satisfaction. You did what had to be done.
        <p>Although it was just a tiny, feeble Shade— barely more than a flicker in the corner of the room— it still left a lingering heaviness in your chest. It was a reminder of how easily things can spiral out of control if left unchecked. A Stage 0 Shade, the manual had called it, a mere spark of negativity before it could take on a more dangerous form. But even this small thing, born from your own anxious thoughts, felt real, felt too close for comfort.
        <p>The manual's words echo again: Shades spawn from negative emotions, from unresolved tension. This one may have been small, but it was yours. And the more you reflect on it, the clearer it becomes— you're not just fighting creatures born from the dark, twisted corners of the world. You're fighting your own fears, your insecurities, your doubts. And that battle might be harder than any Shade you'll ever face.
        <p>You exhale slowly, steeling yourself. One fight down, many more to come. You wipe your brow, your hands still a little shaky, but resolute. There's no time to linger on the unease. You've got more to do. More steps to take. You can't afford to hesitate now.
        <p>As you look to where the Shade was, you realize your shelves were still empty.`,
    choices: [
        { text: "stock the shelves", nextScene: "tutorial4" }
    ]
},
{
    title: "tutorial4",
    text: `<p>You wanted to stock the shelves with your healing elixirs, so you went to the chest that contained it.
        <p>However, it is locked, so you pulled out your keyring.
        <p>Which key do you try?`,
    altText: `<p>Which key do you try?`,
    choices: [
        { text: "silver key", nextScene: "tutorial4_wrong"},
        { text: "bronze key", nextScene: "tutorial5" } 
    ]
},
{
    title: "tutorial4_wrong",
    text: `You tried using the key, but it does not unlock the chest.`,
    choices: [
        { text: "use another key", nextScene: "tutorial4" }
    ]
},
{
    title: "tutorial5",
    text: `<p>The chest unlocks and you start filling up your shelves with healing elixirs.`,
    choices: [
        { text: "take an elixir", nextScene: "tutorial6" },
        { text: "finish setting up", nextScene: "firstCustomer" }
    ]
},
{
    title: "tutorial6",
    text: `<p>To prepare ahead of time, you decide to keep one of your small healing elixirs on you.
        <p><i>[Small Healing Elixir Obtained]</i>`,
    item: {
        itemName: "Small Healing Elixir",
        battleUse: true,
        puzzleUse: false
    },
    choices: [
        { text: "finish setting up", nextScene: "firstCustomer" }
    ]
},
//JOB 1
{
    title: "firstCustomer",
    text: `<b><i>[The next evening]</i></b>
            <p>You do one last check over your store before flipping the sign to Open. That done, you settle in your seat behind the counter, idly making more Shade wards while waiting for your first customer.
            <p>It's about an hour into opening hours– almost eleven at night–  that you hear a jingle come from the front door. You excitedly push the nth trinket you were working on to the side, turning to greet the customer that just entered.
            <p>She was a young woman, brown hair pulled into a messy bun, adjusting silver frames on her nose as she awkwardly made her way to the counter.
            <p>"Um, hi," she said. "Is this... ?"
            <p>You inform her of the shop's name.`,
            choices: [] //get shop name, goes to next scene manually in Scene.render()
},
{
    title: "startLocation",
    text: `"Yes, <b>${shopName}</b>! Your advertisement said you take requests to deal with Shades... " she said, nervously wringing her hands.
            <p>You nod encouragingly. Usually, the wards and other various trinkets you made would be enough to prevent a Shade from forming or even chase a weak one out, but you also provided the service of going to the home to exterminate it personally for a higher cost.
            <p>You take out a form and pen and hand them over to the girl. It's the first step to filling out a request, of course.
            <p><b><i>[The Next Morning]</b></i>
            <p>You arrive at an apartment complex and wait in the lobby for Ally.
            <p>She leads you to her family's apartment.
            <p>"Everyone's home right now," Ally explains, keys jingling as she unlocks the door. "So, you can ask anyone questions. I'll be in my mother's room if you need me."
            <p>With that, she darts down a hallway, leaving you alone at the entrace to the apartment. You sigh.
            <p>When it comes to Shades, knowing what emotions feed them maes it much easier to defeat them. Which is why your service for exterminating Shades always required a vist to learn as much as you can.
            <p>So, it's time to investigate the apartment. You step inside, closing the door behind you. Where do you go first?`,
    altText: `<p>And you are back at the entrance of the apartment. Where will you go now?`,
    choices: [
        { text: "Kitchen/Living Area", nextScene: "kitchen" },
        { text: "Towards bedrooms", nextScene: "bedrooms" },
        { text: "Finish investigation", nextScene: "finishInvestigation" }
    ],
    minimapKey: "entrance"
},
{
    title: "kitchen",
    text: `<p>You head deeper into the apartment into the combined kitchen and living area. It's clearly where the family spends most of their time: what looks like homework is sprawled over the coffee table, a red pencil bag tossed haphazardly next to it, the couch well-worn. Plenty of family pictures line the wall, showing off Ally, her mother, and her brother Jash at different stages of their lives.
    <p>A middle-aged woman, Ally's mother, is in the kitchen, seemingly rearranging the pantry. Several spices and jars are on the counter, and you even spot a snack you personally enjoy.
    <p>"Oh!" she exclaims, sheepishly closing the pantry door, though it does nothing to hide the stuff on the counter. "Sorry, I was just trying to keep myself busy before you arrived. Do you need anything?"`,
    altText: `"Is there something else you have to ask me?" Ally's mother asks.`,
    choices: [
        { text: "Ask about Shade", nextScene: "mom_info_shade" },
        { text: "Ask About Job", nextScene: "mom_info_job" , conditionalA: "jash_info_job2"}, // condition for visibility: player entered scene "jash_info_job2"
        { text: "No", nextScene: "startLocation" }
    ],
    minimapKey: "kitchen"
},
{
    title: "mom_info_shade",
    text: `"It's been making such a ruckus!" the mother exclaimed. "It's been so difficult cleaning up after it, it keeps messing with Ally's room, and I really don't have the time to keep cleaning after it... 
            <p>"Well, at least for now Ally's back, but I'm sure she doesn't like having to pick up after it either...  and knowing it's staying in her room...  it's probably not the nicest thing being home from college after all... "`,
    choices: [
        { text: "What does it do?", nextScene: "mom_info_shade2", exclusive: "momChoice"}, // one or the other choice here
        { text: "College?", nextScene: "mom_info_college", exclusive: "momChoice" }, // one or the other choice here
    ],
    minimapKey: "kitchen"
},
{
    title: "mom_info_shade2",
    text: `The woman taps her arm nervously. "Nothing terrible. It mostly just moves stuff around, I think. Occasionally stuff ends up on the floor but it's...  generally in the state Ally usually gets it into when she's at home. It'd be nostalgic, I suppose, if it weren't for the fact that it was a Shade doing all of that... 
        <p>"Though Jash– my son– would know better about the state it gets the room into. I'm not always home in the evening after all. I've got a night shift. Though sometimes when I am home it makes some awful whining noises– in Ally's bedroom, of course. Though Ally said she hasn't heard it at all since coming back, and I haven't either."`,
    choices: [
        { text: "continue", nextScene: "kitchen"}
    ],
    minimapKey: "kitchen"
},
{
    title: "mom_info_college",
    text: `"Oh, yes. My daughter's all grown up now. Off abroad for college, I'm so proud of her. In her third year. She usually only comes back on longer holidays, but since we've been afflicted by this Shade she came back out of concern."
            <p>That definitely rules out Ally as the cause of the Shade then, since she wasn't home when it formed.`,
    choices: [
        { text: "Continue", nextScene: "kitchen"}
    ],
    minimapKey: "kitchen"
},
{
    title: "mom_info_job",
    text:`"Hm...  now that I think about it, I guess the Shade did start becoming active after I started my new job."
            <p>You ask how she's doing at work. She laughs. "Well, it's a lot of work, of course, but nothing terrible. I love what I do. I only feel bad that I'm away from home so much. Feels as if I'm leaving Jash all alone here."
            <p>You recall Jash saying that they usually weren't home together. You ask her to elaborate on that.
            <p>She looks wistfully at the living room. "Hm, yes, I work nights so I'm usually asleep during the day, and I'm out of the apartment by the time he gets back from school, especially from his extracurriculars. I always try to be up in the morning so we can have breakfast together, but that's about it.
            <p>"But he's getting older now. I just have to hope he'll grow well into his independence. I'll still worry, though. Anything else you need from me?"`,
    choices: [
        { text: "No", nextScene: "startLocation"}
    ],
    minimapKey: "kitchen"
},
{
    title: "bedrooms",
    text:`You head down the hallway that Ally went. There's a door ajar: a bathroom. You quickly peer inside to see that it's a bathroom you'd expect from a three-family apartment. It's clean but cluttered, with several bottles of different products on the counter: a mix of girls' and boys'.
        <p>There's not much to see in there, and you don't need to use the restroom, so you instead look towards the bedroom doors.
        <p>They're handily labeled "Ally" and "Jash" respectively.`,
    altText: `You are now in front of the bedrooms again.`,
    choices: [
        { text: "Knock on Ally's door", nextScene: "bedroomAlly_locked"},
        { text: "Knock on Jash's door", nextScene: "bedroomJash"},
        { text: "Knock on Ally's Mom's door", nextScene: "bedroomMom"},
        { text: "Leave Bedrooms", nextScene:"startLocation" }
    ],
    minimapKey: "bedrooms"
},
{
    title: "bedroomAlly_locked",
    text: `<p>You try knocking on Ally's door, but there's no answer.
    <p>You try turning the doorknob, you realize it's locked.`,
    altText: `<p>The door to Ally's bedroom is locked.`,
    choices: [
        {text: "Use Bedroom Key", nextScene: "bedroomAlly_unlocked", conditionalA: "Ally's Bedroom Key"}, // conidtion for visibility: player entered scene "jash_info_shade2" OR player has KEY in inventory
        {text: "Check the Other Bedrooms", nextScene: "bedrooms"}
    ],
    minimapKey: "ally"
},
{
    title: "bedroomAlly_unlocked",
    text: `<p>You used [Ally's Bedroom Key]
    <p>You step into the room with the soft creak of the door, and immediately, you're hit with the faint smell of lavender mixed with the dry scent of a room that hasn't been fully lived in for a while. The walls are painted a pale shade of pink, dotted with a few faded posters of bands and movies that Ally must be a fan of. A light layer of dust covers most of the furniture, except for the figurine on the shelf, which seems to have been recently cleaned.`,
    altText: `You step into the room with the soft creak of the door, and immediately, you're hit with the faint smell of lavender mixed with the dry scent of a room that hasn't been fully lived in for a while. The walls are painted a pale shade of pink, dotted with a few faded posters of bands and movies that Ally must be a fan of. A light layer of dust covers most of the furniture.`,
    choices: [
        { text: "Inspect Figurine", nextScene: "player_desc_figurine", limited: true},
        { text: "Leave Room", nextScene: "bedrooms" }
    ],
    minimapKey: "ally"
},
{
    title: "player_desc_figurine",
    text: `<p>As you approach the shelf, your eyes are immediately drawn to the figurine. Unlike everything else in the room, which bears the subtle signs of neglect— dust settled on the furniture and small smudges marking surfaces— the figurine stands out in its surprising cleanliness. 
    <p>Despite its obvious age, with a few faint scratches along its base and a slight chip on one corner, the figurine appears well-cared-for. The smooth surface shines, as if it's been regularly wiped down, though there's a faint wear that speaks of its long history— perhaps from years of being cherished or handled gently.`,
    choices: [
        { text: "Pick Up Figurine", nextScene: "player_desc_figurine2"}, 
        { text: "Bring Figurine to Ally and Jash", nextScene: "player_bring_figurine"}, 
        { text: "Put Back and Leave Room", nextScene: "bedrooms"}
    ],
    minimapKey: "ally"
},
{
    title: "player_desc_figurine2",
    text: `<p>You decided that the figurine was somewhat related to the Shade and decided to keep it on you.
            <p>You locked the door behind you as you left.`, // item [FIGURINE] is now in player inventory
    item: {
        itemName: "Figurine",
        battleUse: true,
        puzzleUse: false
    },
    choices: [
        { text: "continue", nextScene: "bedrooms" }
    ],
    minimapKey: "ally"
},
{
    title: "player_bring_figurine",
    text: `<p>You left Ally's room with the figurine in hand and went to Jash's room. You find Jash sitting on the edge of his bed, his eyes meet yours. You gesture to him to follow you, and he nods hesitantly before getting up and following you down the hallway.
    <p>The two of you walk quietly towards his mom's room. You knock before entering, and Ally looks up from where she's sitting. The siblings look at each other for a moment, unsure of how to break the awkward silence. But eventually, Jash— despite his hesitation— sits down beside Ally on the bed.
    <p>You held out the figurine in front of them, its worn-down surface reflecting the light from the room. 
    <p>"This figurine was one of the few items that were messed with by the Shade," you pause, "and ideally we wouldn't want to keep items touched by the Shade once we've exterminated it."
    <p>"We don't have to throw it away, right?" Jash asked.
    <p>You recognize the worry coming from Jash, "We won't throw it away, but it surely needs to be cleaned and neutralized."
    <p>"I'll continue looking for clues, but I would like for the two of you to neutralize the Shade's traces, in the meantime."
    <p>Ally glances at the figurine, then looks at Jash, her voice steady. "We can do this, let's clean it up together, Jash."
    <p>You gave the two a nod of encouragement.
    <p>"I'll be back shortly, keep cleaning, and be careful. I'll check in soon." You handed Jash back Ally's room key.
    <p>You left the room and closed the door behind you as you left. But, you can't help overhear their conversation through the door.`,
    choices: [
        { text: "eavesdrop", nextScene: "player_eavesdrop", exclusive: "sneak100" }, // one or the other choice here (CHOICE BECOMES INVISIBLE IF IT WASNT CHOSEN THE FIRST TIME)
        { text: "leave", nextScene: "bedrooms" } 
    ],
    minimapKey: "mom"
},
{
    title: "player_eavesdrop",
    text: `<p>You overhear Jash's quiet voice coming through the crack in the door. The sound of his words is gentle, but filled with emotions he's been struggling to express.
    <p>"I kept the figurine safe. I didn't want it to get ruined." Jash continues, "I missed you... I didn't know how to tell you that."
    <p>"I missed you too, Jash. Sometimes, I thought you didn't like me anymore. Like you were getting too old for me or something." Ally's voice was gentle.`,
    choices: [
        { text: "leave", nextScene: "bedrooms" }
    ],
    minimapKey: "mom"
},
{
    title: "bedroomJash", // note (bug?) jash will still be here even if you bring him to Ally
    text:`"In here," a voice calls from the inside.
            <p>You enter the room, and a teenage boy is sitting at the desk in the corner. He removes his headphones, eyeing you warily.
            <p>"So...  you have to ask me stuff about the Shade?" Jash eventually says.
            <p>You nod, and the boy shrugs, pushing his chair back from the desk. "I think it started becoming active a couple months ago? After school started up again. Ally was already back at college. Oh yeah. It was like...  the same day Mom got her new job too."`,
            altText: `<p>Jash looks up from his desk, "You wanna ask me more questions?"`,
    choices: [
        { text: "Ask About Shades" , nextScene: "jash_info_shade" },
        { text: "Ask About Job", nextScene: "jash_info_job" },
        { text: "No Questions", nextScene: "bedrooms" }
    ],
    minimapKey: "jash"
},
{
    title: "jash_info_shade",
    text:`<p>"It just moves stuff," Jash says. "Ally's convinced that it's knocking her stuff off the shelf, but I dunno. I'm the one who usually cleans the stuff up, and it's kind of the same as when I helped Ally clean her room when we were younger."
    <p>You raise a questioning eyebrow. He sighs. "Like. Is it weird to say that maybe the Shade was just playing with her toys? They're usually strewn on the floor, but I've also seen them in a circle like...  a tea party, or something. Plus, I've been trying to keep track of what changes since you know, it's a whole Shade. Sometimes it puts stuff back."
    <p>You assure him that it's not weird– Shades follow the behavior of the feelings that form them until they're ready to attack humans, after all. It means it's another clue as to what exactly is happening.`,
    choices: [
        { text: "Ask to Elaborate", nextScene: "jash_info_shade2"}, 
        { text: "No More Questions", nextScene: "bedroomJash" } 
    ],
    minimapKey: "jash"
},
{
    title: "jash_info_shade2",
    text:`<p>"Huh? Oh, yeah, I did give her those," Jash said, kinda casually. He waved a hand at the shelf above his desk. "See? I got some too. They're from the same set. It's like something we both liked, so I gave her her favorite ones and I kept mine. We fought over some of the ones we both wanted, but we sorted it out. Though when she went off to college, she gave me some of hers."
    <p>He frowned, like he was thinking about it. "Guess she's not really into 'em anymore, since she gave them to me."
    <p>You remind him that she still has some. He just shrugs. "Eh, I dunno. I didn't really care about those ones. Maybe she still likes 'em though."
    <p>You ask why he doesn't just ask her. Jash scrunches up his face like you just said something really weird. "Man, have you never had a sibling before? Why would I do that? She's never home long enough for it to even matter anymore. And honestly, I don't even really care about it, okay?"
    <p>He pauses, like he's thinking about something, and then says, "Hey, you wanna go check out one of the figurines? I have a key to her room, so you can go take a look whenever. Just...  you know, don't mess with them too much, alright?"
    <p><i>[He gives you Ally's bedroom key.]</i>`, // new topic unlocked: player can now ask ally about figurines
    item: {
        itemName: "Ally's Bedroom Key",
        battleUse: false,
        puzzleUse: true
    },
    choices: [
        {text: "Continue", nextScene: "bedroomJash" }
    ],
    minimapKey: "jash"
},
{
    title: "jash_info_job",
    text:`<p>"Yeah, Mom got a new job. She works night shifts now. Used to be that we'd go out around the same time in the morning, and she'd get home a little bit after I got back from school. Now, though, we usually end up missing each other one way or another. Either she's sleeping or I'm sleeping or one of us isn't home."
    <p>Jash pauses. "Is that good?"`,
    choices: [
        {text: "Ask to Elaborate", nextScene: "jash_info_job2"},
        {text: "No More Questions", nextScene: "bedroomJash" }
    ],
    minimapKey: "jash"
},
{
    title: "jash_info_job2",
    text:`<p>Jash crosses his arms and hums a little. "Uh, let's see... 
    <p>She'd been wanting this job for a while now. Her dream job. Her last one was always just... go to work, get the check. Means to an end. Now she looks a lot happier going to work... "
    <p>He frowns a little. "Well, I wish I saw her more, but what can you do?"
    <p>After a pause, he adds, "But if you need to know more about Mom's job, go ask her. Not like I know what she's doing when she's out."
    <p>You understand that Jash has nothing else to say about this.`, // new topic unlocked: player can now ask jash's mother about her job
    choices:[
        {text: "Continue", nextScene: "bedroomJash" }
    ],
    minimapKey: "jash"
},
{
    title: "bedroomMom",
    text: `<p>You step into the room, and the first thing that hits you is the dim light filtering through the blinds, casting long shadows across the space. The room feels quiet and tired, as if it's been lived in by someone constantly on the move. The bed is unmade, the covers twisted from someone hastily crawling in after a long shift. A single pillow is pushed to the side, and a thick, knitted blanket is draped messily at the foot of the bed.
    <p>Ally is sitting on the edge of the bed, her back slightly hunched as she scrolls through her phone, absorbed in whatever's on the screen. The glow from her device casts a soft, blue light on her face, standing out in the otherwise dim room. She glances up as she notices you.
    <p> "Hey, is there anything I can do to help?" she asks, her voice a mix of casual curiosity and something more, like she's genuinely interested in how things are unfolding.`,
    altText: `<p>Ally looks up from her phone, "Is there anything else you need?"`,
    choices: [
        { text: "Ask About Shades" , nextScene: "ally_info_shade" },
        { text: "Ask About Figurines", nextScene: "ally_info_figurine", conditionalA: "jash_info_shade2" }, // condition for VISIBLE if player has entered scene jash_info_shade2
        { text: "Ask About College", nextScene: "ally_info_college", conditionalA: "mom_info_college" }, // condition for VISIBLE if player has entered scene mom_info_college
        { text: "No Questions", nextScene: "bedrooms" }
    ],
    minimapKey: "mom"
},
{
    title: "ally_info_shade",
    text:`<p>"Yeah, apparently, ever since the Shade started getting active, it goes into my room and moves my stuff around. Jash said it likes to knock my toys off my shelf, though nothing's ever been broken. Doesn't really open my drawers or anything either. The other night, it took my old sketchbook from its spot on the shelf and placed it on my desk. Isn't that so strange?"
    <p>It's nothing that Shades haven't done before, but you suppose it'd be strange to someone who hasn't encountered one yet. You keep the behavior in mind, though, as Shades tend to act accordingly to the feelings they feed on until they're strong enough to attack humans.`,
    choices: [
        {text: "Continue", nextScene: "bedroomMom" }
    ],
    minimapKey: "mom"
},
{
    title: "ally_info_figurine",
    text:`<p>"Oh, those?" Ally gestures at the toys lined up on her shelf. "They're just toys I've gotten as gifts over the years. I don't really play with them anymore, but they're still sentimental to me, so I've put them on my shelf.
    <p>"Hm. Now that I think about it, I really am surprised none of these have broken," Ally said, pondering a bit. "I have some figurines Jash gave me too, and those things probably wouldn't survive a toss to the floor. Guess it's lucky it's only thrown around the stuffed toys. If I think about it, at least while I've been here, I've only ever had to pick up my stuffed toys."
    <p>Does that mean those figurines were avoided by the Shade then?`,
    choices: [
        { text: "Continue", nextScene: "bedroomMom" }
    ],
    minimapKey: "mom"
},
{
    title: "ally_info_college",
    text: `<p>"Yeah, I'm in college. Good school, out of the country, away from here," Ally says, waving her hand around to gesture at her room.
    <p>You ask if she misses being at home.
    <p>"Well, of course I do," Ally sighs, "But I'm also happy to be...  an adult, you know? I have amazing friends there, I'm doing great. I'm fine seeing Mom and Jash when I can. He's been a bit of a brat about it, though."
    <p>A brat about her going to college? Ally seems to understand the look on your face and shrugs. "I don't know. One minute he wants me home, another he wants me out of his face as soon as possible. Little brother things. He got real pissed when I tried to give him some of my figurines, though. I thought he liked them. Guess not."`,
    choices: [
        { text: "Continue", nextScene: "bedroomMom" }
    ],
    minimapKey: "mom"
},
{
    title: "finishInvestigation",
    text: `<p>Because you've gathered all the information you need, you decide to finish the investigation. You conclude that the Shade is a manisfestation from...`,
    choices: [
        { text: "Ally", nextScene: "suspect_ally" },
        { text: "Jash", nextScene: "suspect_jash" },
        { text: "Ally's Mom", nextScene: "suspect_mom" }
    ]
},
{
    title: "suspect_ally",
    text: `<p>Ally was the reason for the Shade's appearance because of her feelings of... `,
    choices: [
        { text: "Boredom", nextScene: "incorrect_conclusion"},
        { text: "Irritation", nextScene: "incorrect_conclusion"},
    ]
},
{
    title: "suspect_jash",
    text: `<p>Jash was the reason for the Shade's appearance because of his feelings of... `,
    choices: [
        { text: "Jealousy", nextScene: "incorrect_conclusion"},
        { text: "Loneliness", nextScene: "correct_conclusion"},
    ]
},
{
    title: "suspect_mom",
    text: `<p>Ally's Mom was the reason for the Shade's appearance because of her feelings of... `,
    choices: [
        { text: "Stress", nextScene: "incorrect_conclusion"},
        { text: "Overwhelmed", nextScene: "incorrect_conclusion"},
    ]
},
{
    title: "correct_conclusion",
    text: `<p>After your deduction, you told the family to hang out at another place while you exterminated the Shade.
        <p>They understood and left their apartment, leaving you to wait until after midnight to find the Shade.
        <p>And sure enough, the small, jumpy Shade appeared.
        <p>It seemed to be scared of you.`,
    choices: [
        { text: "Exterminate the Shade", nextScene: "fight_scene" }
    ]
},
{
    title: "fight_scene",
    text: ``, // fight scene here
    choices: []
},
{
    title: "incorrect_conclusion",
    text: ``, // jump to next story
    choices: []
}
]

storyDataJob2 = [
    {
        title: "act_end",
        text: `
        <p>The atmosphere of your shop is quiet, save for the background noise caused by the TV, "... innocent man found dead in his home... " 
        <p>As you were about to tune in, the bell above the door chimes, signaling a visitor. You glance up from your work, seeing a man in a thick coat step inside. He approaches you with purposeful strides, his eyes scanning the room, clearly out of place in your cluttered shop.
        <p>"I heard you deal with Shades?" he asks, with a tired voice.
        <p>You noticed the weariness in his face, "You'd be correct, how can I help you?"
        <p>He takes a breath, clearly hesitant, but there's a sense of urgency behind his words.
        <p>"I need your help. And I can't tell you everything, not until you agree to assist me," he lowers his voice. "You probably heard it on the news." He gestures to the TV playing in the background.
        <p>"... police on scene deduced this as a Shade attack... "
        <p>A Shade attack. Albeit not unlikely, it is rare, especially in this day and age, you think to yourself.
        <p>"Alright, I agree to help. What's going on?"
        <p>He leans over the counter, locking eyes with you. He looks grim.
        <p>"I am a private investigator, Damian Wilder," he says, showing you his business card. "As you've heard, a man's dead. But it's not as simple as the police are making it out to be. They claim it was a Shade Attack, but I don't know... something's off." He pauses.
        <p>"I don't believe it was some random killing. It makes no sense for an "innocent man" to be targeted and <i>killed</i> by something like a Shade."
        <p>You fold your arms, thinking. You agree–there is something unusual about this. Rather unnatural for a Shade to physically attack a person. 
        <p>"I'm assuming you want me to help you figure that out?"
        <p>He nods, "Yes. I deal with humans–human cases, human crimes. But this... this is beyond me. I don't know the cause of the Shade, and I'm not sure where to start. But I do know the police are lying. They are just trying to quickly close the case. If I figure out the true identity and you figure out Shade's origin, we can expose the police's corruption."
        <p>"I understand, when will we start?"
        <p>"Meet me at this address, today at 6 PM. Policemen will still be on the scene. We need to be vigilant." He hands you a piece of paper with the address on it. 
        <p>With that, the private investigator leaves, the weight of his words settling in. You went ahead and decided to prepare items you'll bring to the property.
        `,
        choices: [
            { text: "visit the property", nextScene: "property" }
        ]
    },
    {
        title: "act_end_fail",
        text: `<p>No matter how long you waited for the Shade, it never appeared.
            <p>You left the apartment and went to informed Ally about the situation, she seemed disappointed in you.
            <p>You returned back to your shop, and tried to fall asleep knowing you had just failed your job.
            <p><b><i>[The Next Morning]</i></b>
            <p>The atmosphere of your shop is quiet, save for the background noise caused by the TV, "... innocent man found dead in his home... " 
            <p>As you were about to tune in, the bell above the door chimes, signaling a visitor. You glance up from your work, seeing a man in a thick coat step inside. He approaches you with purposeful strides, his eyes scanning the room, clearly out of place in your cluttered shop.
            <p>"I heard you deal with Shades?" he asks, with a tired voice.
            <p>You noticed the weariness in his face, "You'd be correct, how can I help you?"
            <p>He takes a breath, clearly hesitant, but there's a sense of urgency behind his words.
            <p>"I need your help. And I can't tell you everything, not until you agree to assist me," he lowers his voice. "You probably heard it on the news." He gestures to the TV playing in the background.
            <p>"... police on scene deduced this as a Shade attack... "
            <p>A Shade attack. Albeit not unlikely, it is rare, especially in this day and age, you think to yourself.
            <p>"Alright, I agree to help. What's going on?"
            <p>He leans over the counter, locking eyes with you. He looks grim.
            <p>"I am a private investigator, Damian Wilder," he says, showing you his business card. "As you've heard, a man's dead. But it's not as simple as the police are making it out to be. They claim it was a Shade Attack, but I don't know... something's off." He pauses.
            <p>"I don't believe it was some random killing. It makes no sense for an "innocent man" to be targeted and <i>killed</i> by something like a Shade."
            <p>You fold your arms, thinking. You agree–there is something unusual about this. Rather unnatural for a Shade to physically attack a person. 
            <p>"I'm assuming you want me to help you figure that out?"
            <p>He nods, "Yes. I deal with humans–human cases, human crimes. But this... this is beyond me. I don't know the cause of the Shade, and I'm not sure where to start. But I do know the police are lying. They are just trying to quickly close the case. If I figure out the true identity and you figure out Shade's origin, we can expose the police's corruption."
            <p>"I understand, when will we start?"
            <p>"Meet me at this address, today at 6 PM. Policemen will still be on the scene. We need to be vigilant." He hands you a piece of paper with the address on it. 
            <p>With that, the private investigator leaves, the weight of his words settling in. You went ahead and decided to prepare items you'll bring to the property.`,
        choices: [
            { text: "visit the property", nextScene: "property" }
        ]
    },
    {
        title: "property",
        text: `
            <p>The evening air is cool as you and Damian approach the property. The flashing red and blue lights of the police cars gave the street a disorienting, almost hypnotic glow. With officers standing guard at the entrance, it would be hard to sneak in.
            <p>Damian adjusts the collar of his coat and walks straight to the officer guarding the entrance. With a quick motion, he pulls out a fake police badge with ID from inside his jacket. "Private Investigator Jax Thorne. I've been brought in by a contact in the department to assist with capturing the Shade. My associate here, <player>," he gestures to you, "is an expert in tracking Shades."
            <p>The officer raises an eyebrow, clearly suspicious of both of you. He looks over at his partner, then back at the two of you.
            <p>"I don't think any of us were briefed about any outside help. You're saying your contact authorized this?"
            <p>Irritated, Damian handed the officer an official-looking letter with the department seal on it. "Yes, it's all in order. If needed, you can contact Captain Voss. We need to get to the Shade before it gets one of our men."
            <p>The two officers inspect the letter carefully. They seem to weigh their options, unsure if they want to challenge the authenticity of Damian's paperwork.
            <p>With a sigh, one of the officers gives in, his voice strained.
            <p>"Alright. But you," he points to you, "you're not supposed to be here. So, stay with Investigator Thorne, or else we're going to have to remove you from the premises." He glares at you, attempting to re-establish his authority.
            <p>"Understood."
            <p>The two of you walked in, leaving the officers behind.
            <p>"Splitting up might be more efficient. Just don't stray too far from me." Damian noted.
            <p>You nodded and began thinking of where you wanted to begin the investigation.
        `,
        altText: `<p>Where to inspect, next?`,
        choices: [
            { text: "foyer", nextScene: "foyer" },
            { text: "living room", nextScene: "livingRoom" },
            { text: "kitchen", nextScene: "kitchenCops" },
            { text: "garden", nextScene: "garden" },
            { text: "master bedroom", nextScene: "masterBedroom" },
            { text: "guest bedroom", nextScene: "guestBedroom" },
            { text: "finish investigation", nextScene: "finishInvestigation" }
        ]
    },
    {
        title: "foyer",
        text: `
        <p>As the two police officers stood outside, the two of you inspected the foyer. The marble floors are pristine, their polished surface reflecting the soft glow of the lighting. The walls are adorned with abstract paintings, not unusual for high-class individuals. There's no sign of struggle here–nothing to suggest that the owner ever made an attempt to flee through the front door.
        <p>"Strange... you'd think he would've tried to escape through the front door, right?" Damian muttered.
        <p>"Right, but the news mentioned that the dead body was found in the garden."
        `,
        altText: `<p>As the two of you pondered a bit more, you...`,
        choices: [
            { text: "focus on floors", nextScene: "info_floors" },
            { text: "focus on paintings", nextScene: "info_paintings" },
            { text: "change locations", nextScene: "property" }
        ],
        minimapKey: "foyer"
    },
    {
        title: "info_floors",
        text: `
        <p>They're untouched, almost too perfect in their stillness. No footprints, no signs of struggle. The floors seem to be clean for a scene of panic–too undisturbed for someone who was running for their life.
        <p>Damian notices your eyes focusing on the floor. He crouches down, his voice thoughtful. 
        <p>"It's almost like he didn't even try to run out this way. No scuffs or marks, as if he didn't even make it here."
        <p>You glance at him, waiting for his input. "What do you suspect?"
        <p>Damian takes a slow breath, closely examining the pristine marble floors. 
        <p>"It's almost as if the original scene has been wiped clean by something, or someone. To make it appear that the struggle never reached this room."
        `,
        choices: [
            { text: "continue", nextScene: "foyer" }
        ],
        minimapKey: "foyer"
    },
    {
        title: "info_paintings",
        text: `
        <p>The chaotic brushstrokes of dark, swirling colors seem less like art and more like a visual representation of chaos. Their erratic shapes feel more unsettling than artistic. Vaguely reminding you of what Shades look like.
        <p>"These paintings... they remind me of the way Shades move. The twisted, chaotic brushstrokes. Almost as if this abstract painting was made to mimic them." You muttered.
        <p>"What are you suggesting?" Damian raised an eyebrow, confused but intrigued.
        <p>"Due to the nature of Shades warping the victim's perception, the owner may have mistaken these paintings as more Shades. Leading him to avoid going out the front door." 
        `,
        choices: [
            { text: "continue", nextScene: "foyer" }
        ],
        minimapKey: "foyer"
    },
    {
        title: "livingRoom",
        text: `
        <p>You and Damian step into the living room. The once orderly furniture is now askew, with broken shards of vases scattered across the floor, some even damaging the leather sofas. What was once a space of quiet elegance now feels chaotic.
        <p>Tables are knocked out of their perfect symmetrical positions, with fragile decorations lying broken or displaced.
        <p>Damian steps forward, his eyes scanning the scene.
        <p>"The tables, the vases... it looks like the owner used whatever he could to try and get away from the Shade."
        <p>Your gaze shifts to the walls, where several photos are displayed.
        <p>"None of these are family pictures, are they?"
        <p>Damian glances at the photos, then back at you.
        <p>"You're right. These are all influential people. It confirms what I suspected–he wasn't your average citizen."
        <p>You both pause, taking in the unsettling scene before you. Then your eyes catch a faint trail of blood leading toward the hallway, unmistakably heading in the direction of the garden where the owner's body was found.
        `,
        altText: `<p>As the two of you pondered a bit more, you...`,
        choices: [
            { text: "focus on objects", nextScene: "info_objects" },
            { text: "focus on pictures", nextScene: "info_pictures" },
            { text: "focus on blood", nextScene: "info_blood" },
            { text: "change locations", nextScene: "property" }
        ],
        minimapKey: "living"
    },
    {
        title: "info_objects",
        text: `
        <p>You kneel beside one of the broken vases, picking up a shard. The fine porcelain feels heavy in your hand, and you immediately recognize the quality. These were expensive, crafted with intricate designs and delicate patterns. Even now, in ruin, they carry an air of luxury.
        <p>As you inspect the shard, something feels off. Actually, the lack of feelings, to be exact. You run your fingers over the surface. It's clean–no distortion, no unusual residue, not a single trace of the dark energy that Shades typically leave behind.
        <p>A thought crosses your mind. "Shades don't dodge things thrown at them," you mentioned, while looking at the shard once more. "If a Shade was in the room and the owner was throwing a vase at it, most likely it would've been hit."
        <p>"But there's no residue?"
        <p>"None." You affirmed.
        <p>Damian glances down at the shard and frowns. "Could be a person then, no?"
        `,
        choices: [
            { text: "continue", nextScene: "livingRoom" }
        ],
        minimapKey: "living"
    },
    {
        title: "info_pictures",
        text: `<p>You and Damian linger by the photos on the wall. The images are formal and calculated, showing the owner with various powerful-looking figures— shaking hands, exchanging business deals, or sitting together in stiff, yet purposeful poses. There's no warmth in any of these photos, only the coldness of professional alliances.
        <p>Damian steps closer, studying one of the photos more intently. His fingers hover over the glass, and you see his brow furrow as he scrutinizes the faces.
        <p>"This one," he says, pointing to a man standing beside the owner in a crisp suit, "I know him. That's Adrian Westbrook. He's a real estate mogul. Runs some of the biggest developments in the city. Funny thing, though... for someone like Westbrook to be mingling with someone like the owner, it's a bit strange. Westbrook doesn't exactly socialize with a 'regular homeowner.' He's not the type to be seen shaking hands with just anyone. These photos don't add up."
        <p>"It would make sense as to why the police are trying to cover this up quickly." You whispered.
        `,
        choices: [
            { text: "continue", nextScene: "livingRoom" }
        ],
        minimapKey: "living"
    },
    {
        title: "info_blood",
        text: `<p>You both step closer to the blood trail that leads toward the hallway, a faint but unmistakable streak that runs from the center of the living room. The dark red marks on the floor seem to tell a story of their own, each drop and smear a testament to the desperate struggle that took place here.
        <p>Damian kneels down, his sharp eyes tracing the trail. He observes the way the blood splatters— small, scattered marks, suggesting someone was moving quickly, but not at full speed. He reaches out to hover his hand over a particularly large splotch, then stands, uncertainty flickering in his expression.
        <p>"Looks like the owner was bleeding from his leg, or maybe his arm," he says, his voice hesitant. "He wasn't in a position to run fast, but he was definitely trying to escape. I'd wager he was throwing things, maybe even those vases, to protect himself, or slow down whatever was chasing him." He pauses, his brow furrowing as he continues, "But... I don't know much about Shades. I'm not used to dealing with them. I'd say this looks more like a calculated pursuit from a human attacker."
        <p>However, you could feel it. The faint residue of a Shade within the blood trail. But it was strange, why is it only contained within the blood trail and nowhere else?
        <p>Damian notices your confusion, "What is it?"
        <p>You stand, then glance at the blood again. "There are some traces of Shade residue. I can sense it, but there's nothing else." You shake your head, trying to make sense of the abnormality. "It doesn't make sense. Normally, Shade residue would be more spread out, in a sense."
        `,
        choices: [
            { text: "continue", nextScene: "livingRoom" }
        ],
        minimapKey: "living"
    },
    {
        title: "kitchenCops",
        text: `<p>You and Damian step into the kitchen, where the stark, sleek design stands in sharp contrast to the chaos that's unfolded within it. The granite countertops gleam in the soft lighting. Stainless steel appliances line the walls. But it's the signs of struggle that dominate the room: drawers are pulled open in disarray, knives scattered, their gleaming blades now out of place and abandoned. Stools are overturned, some casted far from the island, as if the owner tried to fight back or desperately escaped.
        <p>Three officers stand near the entrance, talking in low voices, casting wary glances at you and Damian. The tension in the air is palpable— it's clear they're not keen on having outsiders poking around.
        `,
        altText: `<p>As the two of you pondered a bit more, you...`,
        choices: [
            { text: "attempt to talk to officers", nextScene: "officerTalk", exclusive: "kitchenChoice" },
            { text: "attempt to investigate kitchen", nextScene: "investigateKitchen", exclusive: "kitchenChoice" },
            { text: "Change Locations", nextScene: "property" }
        ],
        minimapKey: "kitchen2"
    },
    {
        title: "officerTalk",
        text:`<p>Damian steps forward, trying to break the ice, his tone casual. "You guys seem deep in thought. Anything new in this case?"
        <p>One of the officers, his arm crossed, glances at Damian and then at you. "Nothing much. Just another mess to clean up," he responds, uninterested in entertaining a conversation.
        <p>The other officer, a bit younger, looks at the two of you with a raised brow. "You must be real curious, huh? Can't really say much with a stranger around, though," he mutters, his voice dripping with sarcasm.
        <p>Damian's face tightens in annoyance, but he doesn't back down. "<player> and I are just here to assist."
        <p>The older officer shakes his head with a sigh, his patience running thin. "You brought an outsider into a case like this?" he snaps at Damian. "Listen, Investigator Thorne, this isn't some petty theft. You and your associate have no business here."
        <p>Damian's jaw clenches as he meets the officer's glare. "Again, I was asked to help. If that's a problem, take it up with your higher-ups."
        <p>The officer doesn't back down either, giving him a cold stare. The tension between the two is strong, but after a long moment, Damian shifts his weight and turns back to you, clearly frustrated.
        <p>It's clear that trying to get anything more out of the officers right now isn't going to work.
        `,
        altText: `<p>The officers ignore you and Damian.`,
        choices: [
            { text: "use cash box", nextScene: "useCashBox", conditionalA: "Cash Box" },
            { text: "continue", nextScene: "kitchenCops" }
        ],
        minimapKey: "kitchen2"
    },
    {
        title: "useCashBox",
        text: `<p>Damian steps forward again, his presence more commanding this time, as if he knows exactly how to play the situation. He keeps his tone smooth and casual, but there's a subtle edge of persistence in his words.
        <p>"You know," he says, voice calm, but with an undercurrent of something more. "There are a lot of pieces here that just don't add up. And sometimes, a little extra incentive can help connect the dots, don't you think?"
        <p>You can feel the weight of the cash box in your pocket. It's a small thing, but it carries an undeniable potential for leverage, and you sense that Damian is guiding the conversation in that direction.
        <p>The older officer shifts slightly, giving Damian a sidelong glance. The younger officer's posture is more tense now, his arms crossed tightly. They're wary, but they're listening.
        <p>Damian takes a subtle step closer, his voice lowering just enough to feel like it's aimed only at the officers. "We're not trying to stir things up. But sometimes, a little bit of... cooperation goes a long way. I'm sure you'd appreciate that."
        <p>There's a brief pause, the silence thick with the weight of the unspoken. The older officer remains still, eyes narrowing slightly as he considers the offer, though he doesn't say anything.
        <p>Damian glances at you, just for a moment, and you understand the cue. The cash box— the item you'd found in the guest bedroom— wasn't just a trinket. It was a tool, and now it's time to use it.
        `,
        choices: [
            { text: "reveal cash box", nextScene: "revealCashBox" }
        ],
        minimapKey: "kitchen2"
    },
    {
        title: "revealCashBox", // SECRET PATH
        text: `<p>You reach into your pocket, retrieving the box and holding it up slightly. "We understand the need for discretion," you say, offering the box toward them. "But it's clear that there's something bigger at play here, and we're only looking for answers. We're not here to make problems, just to make sure everything is handled... properly."
        <p>The older officer looks down at the box, his expression unreadable. The younger one seems a bit more rattled, glancing nervously between his partner and the cash. The tension in the room thickens as the moment stretches on, but no one moves— yet.
        <p>Then, finally, the older officer's eyes harden slightly, though he says nothing for a long moment. <p>Finally, he speaks, his voice low, like he's carefully choosing his words.
        <p>"Not everything's as simple as you might think. This wasn't a... natural occurrence," he mutters, his gaze darting toward his colleagues, as if to gauge their reactions. "Something... more deliberate. But it's already been dealt with. Nothing more to worry about."
        <p>His words seem to linger in the air. The meaning is clear enough, but wrapped in layers of subtlety and suggestion.
        <p>Damian, unruffled, offers a small nod, his lips curling into a faint, knowing smile. "I see. Thanks for letting us in on that."
        <p>Damian nods, his expression controlled, but there's a flicker of understanding between you both. The deal is made— no words needed.
        <p>You place the box on the nearby table, and the officers take it with barely a glance at each other. <p>They don't thank you, but the shift in the air is undeniable. There's a sense of understanding now, something unspoken but clear.
        <p>Without another word, the officers turn, their movements a little less guarded than before, as if the situation is now under control. They move off to tend to their duties, leaving you and Damian to watch them go.
        <p>And with that, you both know the game has changed. The truth is still out there, buried beneath layers of secrets and half-truths. And now, you have the opening you need to dig deeper.
        `,
        choices: [
            { text: "continue", nextScene: "kitchenCops" }
        ],
        minimapKey: "kitchen2"
    },
    {
        title: "investigateKitchen",
        text: `<p>You and Damian move deeper into the kitchen, intent on surveying the scene for anything that might shed light on what happened here. The smell of blood is sharp in the air, mixing with the scent of stainless steel and granite. You approach the large kitchen island first, but as you lean in to take a closer look at the overturned stools, one of the officers steps forward, blocking your path.
        <p>"Don't touch anything," the officer snaps, his eyes narrowing. "You'll just mess up the scene."
        <p>Damian shoots him a sharp look, clearly irritated. "We're just trying to understand what happened here. We've got the proper clearance."
        <p>The officer doesn't budge. "Doesn't matter. Stay away from the evidence."
        <p>Damian's patience begins to thin, but he gestures for you to step back, deciding to continue his observation from a distance.
        <p>You, however, move closer to one of the open drawers, hoping to see if there's any Shade residue or perhaps something else of interest. But as you reach for it, another officer steps in front of you, blocking your access.
        <p>"You can't go through that," the officer says in a cold tone. "If you touch anything, you'll contaminate the evidence. We've got our own methods for that."
        <p>Frustration begins to bubble up inside you. You're at your last straw. "I don't see any Shade experts here, now do I?" you say, your voice carrying a hint of bitterness.
        <p>The officer freezes, his face hardening, but he can't refute the point. He opens his mouth to respond, but another officer, standing slightly behind him, cuts in quickly.
        <p>"It doesn't matter, it's not like— "
        <p>"Shut up." 
        <p>Damian and you exchange a glance. The slip-up doesn't go unnoticed. Something isn't adding up, and the officers' reactions seem to only fuel your suspicions.
        <p>Damian steps forward again, his voice trying to remain steady but tinged with frustration. "We're investigating this too, just like you guys."
        <p>The officer recovering from the slip-up scoffs, shaking his head dismissively. "Yeah, well, you're not helping. So, scram."
        <p>It's clear now— whatever you and Damian try, the officers are not letting you through. Their territorial attitude and refusal to cooperate make it nearly impossible to continue the investigation here.
        `,
        choices: [
            { text: "leave kitchen", nextScene: "leaveKitchen" }
        ],
        minimapKey: "kitchen2"
    },
    {
        title: "leaveKitchen",
        text: `<p>As the two of you step into the garden, the air carries the scent of freshly mowed grass. The neat, manicured hedges and the perfectly trimmed lawn stand in stark contrast to the scene before you. The body of the owner lies motionless in the grass, an unnatural stillness against the carefully kept surroundings.
        <p>The two of you sighed after the unsuccessful kitchen investigation. 
        <p>"They really didn't want us to be in there," Damian muttered. "Too deliberate, don't you think?"
        <p>"Anyways, since we're here," he gestures, "might as well look at the guy."
        <p>You nodded.
        <p>But just as you were also about to start inspecting the body along with Damian, you start hearing muffled voices from the kitchen.
        `,
        choices: [
            { text: "eavesdrop", nextScene: "eavesdropFromGarden", exclusive: "eavesdropChoice" },
            { text: "don't eavesdrop", nextScene: "garden", exclusive: "eavesdropChoice" }
        ],
        minimapKey: "garden"
    },
    {
        title: "eavesdropFromGarden",
        text: `<p>You turned your head slightly, ears straining.
        <p>"...doesn't matter if it was <i>that<i> Shade," one of the officer was saying. "The Captain said outsiders shouldn't know."
        <p>Another voice- younger, tense. "But that private investigator said he was brought in by the higher-ups."
        <p>"Well, he's lying. Or someone overstepped. Either way, the Shade exterminator is unauthorized personnel."
        <p>There was a clink of ceramic. Someone pacing. The older officer kept talking.
        <p>"They're here sticking their noses in the wrong case," the older officer muttered. "Damn kids, they need to know their place."
        <p>The younger one didn't speak for a second. When he did, his voice had dropped lower. "I mean, we're all just playing cleanup, but...  we didn't actually see <i>Shade</i> when we got here, right? We are supposed to retrieve it back, for <i>them.</i>"
        <p>The silence after that was sharp. 
        <p>You realized that was all you were getting from the trio of officers, and decided to go back to inspecting the body with Damian.
        `,
        choices: [
            { text: "continue", nextScene: "garden" }
        ],
        minimapKey: "garden"
    },
    {
        title: "garden",
        text: `<p>You and Damian enter the garden.
        <p>The ground around the body shows signs of disturbance- footprints that have left deep impressions in the soil, as if someone had struggled to move, possibly trying to flee or resist. The earth is slightly turned over in several places, hinting at a chaotic effort to escape or fight back.
        <p>A faint trail of blood stains the grass, not as obvious as it once was, but enough to show the path taken. It seems as if the struggle continued here, a final attempt to evade whatever or whoever was chasing him. The peacefulness of the garden only adds to the unsettling nature of the scene.
        `,
        altText: `<p>As the two of you pondered a bit more, you...`,
        choices: [
            { text: "damian's analysis", nextScene: "damianAnalysis" },
            { text: "your analysis", nextScene: "yourAnalysis" },
            { text: "change locations", nextScene: "property" }
        ],
        minimapKey: "garden"
    },
    {
        title: "damianAnalysis",
        text: `<p>You watched as Damian took a slow step forward, his eyes narrowing as he studied the body in the grass. He doesn't move to touch the body immediately but instead inspects it from a distance, scanning the scene for signs that might offer clues.
        <p>"Looks like the struggle started here," Damian mutters, pointing to the disturbed soil and faint traces of blood. "Whoever did this probably chased him into the garden, but it wasn't a clean escape. There are clear signs of resistance."
        <p>He shifts his attention to the body, looking over it carefully before speaking again, this time in a quieter tone. "The way he's lying, it seems like he was already too exhausted to continue. The struggle seems to have drained him. I'd say the cause of death isn't immediately obvious, but the blood loss didn't help. My guess is he was either struck or injured, causing him to lose a lot of blood while trying to escape."
        <p>Damian crouches beside the body, carefully examining the positioning and other minor details. "Hard to say exactly when it happened. But based on the condition of the blood and the way he fell, it's likely he was dead for a few hours before we arrived. This wasn't a quick kill. Whatever happened, it was drawn out."
        `,
        choices: [
            { text: "continue", nextScene: "damianAnalysis2" }
        ],
        minimapKey: "garden"
    },
    {
        title: "damianAnalysis2",
        text: `<p>"Then, how do you think the scene played out?" You asked.
        <p>Damian steps back from the body, his mind working through the possible scenarios. He glances around the garden again, his eyes settling on the disturbed soil and faint traces of blood. 
        <p>"It doesn't add up," Damian mutters, more to himself than to you. He runs a hand through his hair as he starts to pace a bit, considering the situation. 
        <p>He turns to you, his expression thoughtful. "This looks like something done by a person. Someone who chased him here, maybe trying to finish the job in this calm garden... and judging by the way the body is positioned, the owner didn't just collapse. No, this feels like a struggle. He tried to get away, tried to resist, but it wasn't enough. And then, after all that, he was left here, in the garden, maybe as some kind of message or just... because his attacker didn't care about how it looked."
        <p>Damian pauses, looking down at the body again. "Whoever did this was deliberate. They knew what they were doing. They might've injured him earlier, forcing him to bleed out as he ran, eventually cornering him here."
        <p>He exhales sharply. "It's strange, though. Why the garden? Why leave him here, especially when everything else seemed to have been staged for a getaway? It's like the attacker wanted him to suffer, wanted him to fight for it- like they enjoyed the chase." 
        <p>Damian looks over at you, his brow furrowing. "Could've been someone who knew the victim. Someone who wanted to make a statement. Whatever happened, this wasn't a random act."
        `,
        choices: [
            { text: "continue", nextScene: "garden" }
        ],
        minimapKey: "garden"
    },
    {
        title: "yourAnalysis",
        text: `<p>How will you start your analysis?`,
        choices: [
            { text: "examine body", nextScene: "examineBody" },
            { text: "inspect soil", nextScene: "inspectSoil" },
            { text: "inspect blood", nextScene: "inspectBlood" },
            { text: "finish analysis", nextScene: "garden" }
        ],
        minimapKey: "garden"
    },
    {
        title: "examineBody",
        text: `<p>You kneel beside the body, the faint scent of freshly cut grass still hanging in the air. The peaceful serenity of the garden only adds to the strangeness of the scene. The body is cold to the touch, and you can feel a heavy weight in the air, as though something unnatural has been here, lingering long after the struggle.
        <p>Your eyes scan the body for signs of what might have happened- any injuries that could indicate an attack. As a Shade exterminator, you know how their energy interacts with the world, leaving traces on everything they come in contact with. 
        Then, you see it.
        <p>A large concentration of dark, swirling residue clings to the body, almost like a blanket covering the skin. It's thick, pervasive- every inch of the victim seems to have been touched by it. You've never seen this much Shade residue on a human before. It's almost overwhelming, and the sight sends a chill down your spine. 
        <p>Normally, Shade residue leaves a faint mark- an unnatural coldness or a slight distortion in the air, but this is different. It's like the Shade's energy has fully engulfed the man, wrapping him in its presence, as though he were in direct contact with a Shade for an extended period. The residue appears to be saturated in some areas, as though the Shade's influence was more intense in those places, possibly where the attack occurred.
        <p>There's no doubt about it- this wasn't a simple encounter with a Shade. This man was directly exposed to it, perhaps more so than anything you've ever encountered. The residue isn't just on the surface; it seems almost fused with his skin. This might be the highest concentration of Shade residue you've ever seen on a person.
        <p>One thing is clear: this was no ordinary Shade encounter. Something else is at play here.
        `,
        choices: [
            { text: "continue", nextScene: "yourAnalysis" }
        ],
        minimapKey: "garden"
    },
    {
        title: "inspectSoil",
        text: `<p>You focus on the earth where the struggle seems to have been the most intense. There's no doubt that the ground was disturbed, but as your fingers move through the soil, you find it... clean. No trace of the Shade residue you've grown so familiar with. There's nothing unnatural about the dirt, no faint coldness, no distortion, nothing. It's as if whatever happened here was wiped clean- completely.
        <p>You frown, confused. This doesn't make sense. There should be something- some remnant of the Shade's presence, even if it's faint. You've seen it on items, on animals, and most certainly on people. But the ground here... it's like nothing ever touched it.
        <p>How could that be? The residue always leaves something behind, and yet there's nothing. The soil seems so clean, almost too clean, as though someone or something has erased any trace of it.
        `,
        choices: [
            { text: "continue", nextScene: "yourAnalysis" }
        ],
        minimapKey: "garden"
    },
    {
        title: "inspectBlood",
        text: `<p>You move closer to the faint trail of dried blood staining the grass, the dark red marks standing out starkly against the green blades. The blood appears to have pooled in a few areas, marking the path the victim likely took before succumbing to whatever injuries they sustained. It's no longer fresh, but the dried patches still seem to hold a certain weight, a memory of the struggle.
        <p>It doesn't take long before you sense it- the unmistakable residue of a Shade. It's faint, but it's there, as if the Shade's energy had seeped into the blood. It's almost as if the blood itself was tainted by it, clinging to the power of the creature that must've been involved in this attack.
        <p>You narrow your eyes, feeling the residue wash over you. But then something feels off. The blood, while it carries the familiar, chilling trace of the Shade, doesn't seem to have done what it usually does. Normally, when there's even the smallest trace of Shade residue, it spills over, bleeding into the surroundings, distorting whatever it touches- usually, the grass, the soil, or any other nearby objects would show signs of the Shade's influence.
        <p>But here? Nothing. The blood is tainted, but the grass around it remains untouched. No unnatural cold. No distortion. No dark energy clinging to the blades, like you've seen a hundred times before. It's as if the residue is contained, trapped within the blood itself.
        `,
        choices: [
            { text: "continue", nextScene: "yourAnalysis" }
        ],
        minimapKey: "garden"
    },
    {
        title: "masterBedroom",
        text: `<p>You and Damian step into the master bedroom, the shift in atmosphere immediately palpable. The room, once likely a serene retreat, now carries an unsettling air, as if the walls themselves are still holding onto the tension of what transpired here. The bed, once neatly arranged, is now a tangled mess of sheets, blood stains marking the fabric in stark contrast to the soft linens. It's a quiet chaos, but it's undeniable- something violent unfolded in this space.
        <p>The floor is littered with overturned objects- picture frames, vases, and a lamp, scattered as though someone had been struggling to move, to get away. The quiet that fills the room only adds to the discomfort, a stark silence that's too heavy for the situation.
        <p>Your eyes are drawn to the walls, where deep gouges mar the surface, as though something- maybe someone- had lashed out in desperation or fury. The claw marks slice through the wallpaper with jagged precision, a chilling testament to the force that was used. There's something almost primal about them, as if whatever left them was intent on getting through, no matter what.
        <p>Damian steps further into the room, his expression unreadable as he scans the scene. He takes in the blood stains, the scattered items, and the marks on the wall. It's a quiet observation, but his gaze lingers just a bit longer on the unsettling details, the things that don't quite add up. The room, in all its stillness, feels like it's holding its breath, as if it's trying to keep its story hidden.
        `,
        altText: `<p>As the two of you pondered a bit more, you...`,
        choices: [
            { text: "inspect objects", nextScene: "inspectObjects" },
            { text: "inspect the other night stand", nextScene: "otherStand", conditionalA: "applyPressure" },
            { text: "inspect marks", nextScene: "inspectMarks" },
            { text: "inspect blood", nextScene: "inspectBlood2" },
            { text: "change locations", nextScene: "property" }
        ],
        minimapKey: "master"
    },
    {
        title: "inspectObjects",
        text: `<p>As you and Damian step into the master bedroom, the atmosphere is thick with the remnants of a chaotic struggle. The overturned furniture, blood stains on the bed, and claw marks on the wall all speak of a battle, one the owner didn't survive.
        <p>You both begin sifting through the scattered objects. Damaged personal items, broken trinkets, and what's left of the furniture make it clear this wasn't a quick altercation. As you start inspecting the bedside drawer, Damian pauses, his eyes scanning the area with a mix of curiosity and suspicion.
        <p>"Wait," Damian says, crouching next to the drawer. He slowly opens it, revealing two well-worn account ledgers. The pages inside are filled with names, amounts, and due dates- records of debts. This wasn't the first time he'd seen something like this.
        <p>Damian flicks through the pages, his brow furrowing. "Looks like he's been keeping track of his loans. This is serious. These aren't just numbers, they're people- probably people who owe more than just money."
        <p>You nod, skimming through the ledgers. The figures seem oddly precise, and as you look closer, you can see the thin trail of danger in every entry. It wasn't just a loan operation; it was a looming threat hanging over people's heads.
        <p>But as your fingers move across the bottom of the drawer, something feels off. You press down lightly, and the wood gives way, slightly shifting under your touch.
        `,
        choices: [
            { text: "apply more pressure", nextScene: "applyPressure", exclusive: "objectChoice" },
            { text: "don't do anything" }
        ],
        minimapKey: "master"
    },
    {
        title: "applyPressure",
        text: `<p>Intrigued, you apply more pressure, and suddenly, the bottom of the drawer pops open with a soft click.
        <p>Damian looks up at you, a bit surprised, as you reveal the hidden compartment. Inside is a small stack of folded documents wrapped in a rubber band. You pull them out carefully, your curiosity growing. As you unfurl the papers, you notice they're not just financial records.
        <p>Instead, you find legal documents- confidential ones. They look like contracts, but they're different from the ones in the ledger. Some of the papers are stamped with official seals, others with signatures that look rushed, almost as if they were signed under duress. There's also an envelope with a familiar emblem- one you've seen on shady, underground deals. This wasn't just a simple business operation.
        <p>Damian stares at the papers for a moment, his expression hardening. "Seems like our guy wasn't just in the loan business," he mutters, taking a step closer. "This... looks like high-level deals. Maybe some of those debts were more than just financial- they could have been about power or something bigger."
        `,
        choices: [
            { text: "continue", nextScene: "masterBedroom" }
        ],
        minimapKey: "master"
    },
    {
        title: "doNothing",
        text: `<p>You believe that the drawer was damaged from the scene that happened earlier, and don't think much of it.`,
        choices: [
            { text: "continue", nextScene: "masterBedroom" }
        ],
        minimapKey: "master"
    },
    {
        title: "otherStand",
        text: `<p>After discovering the hidden compartment in the first bedside table, your instincts tell you to check the second one. You can't shake the feeling that there might be more secrets hidden around this place, and the second nightstand might hold another clue. You move over to it quietly, your fingers already eager to investigate.
        <p>Damian, engrossed in the ledgers, doesn't seem to notice as you shift focus. You pull open the second drawer, revealing more personal trinkets, an old photo frame, and a few random papers. At first, it seems like nothing unusual- but then you feel it. The drawer bottom feels off, slightly raised in a way that suggests it might open.
        <p>You apply a bit of pressure, and with a soft click, the bottom of the drawer gives way, revealing another hidden compartment. This one holds just a single item: a small, brass key. The key is slightly tarnished, worn with time, and you immediately feel a weight in your hand- a sense of importance.
        <p>Damian looks up from the ledgers, his attention now fully on you. "Another secret compartment?" he asks, voice lowered with interest.
        <p>You nod, turning the key over. The engraving catches your eye- "Guest Room" etched into the metal in small, neat letters.
        <p><i>[Guest Room Key Obtained]</i>`,
        item: {
            itemName: "Guest Room Key",
            battleUse: false,
            puzzleUse: true
        },
        choices: [
            { text: "continue", nextScene: "masterBedroom" }
        ],
        minimapKey: "master"
    },
    {
        title: "inspectMarks",
        text: `<p>Damian steps closer to the wall, his eyes scanning the strange, deep marks that mar the once-pristine surface. His fingers hover near the jagged edges of the gashes, clearly impressed by their size and depth. He leans in for a closer look, frowning as he inspects them more carefully.
        <p>"These are... strange," Damian mutters, his voice low. "Nothing human or animal could make marks this large and deep. The force it would take... whatever did this was powerful." His fingers trace the edges of the marks, as though trying to understand the shape of them. "And the way they curve- it's almost unnatural. No way a person did this."
        <p>You step forward, your instincts guiding you as you look at the marks with a more experienced eye. They certainly have a peculiar shape to them, almost too deliberate in their arch. The depth is extreme, and the angles don't fit the pattern of any typical human or animal injury you've ever encountered.
        <p>Your gaze shifts, noticing how the marks seem to match the kind of gouges you've seen before- claw marks. But unlike the usual, faint traces left behind by Shades, there's nothing here that gives you the cold, unsettling presence of their energy.
        `,
        choices: [
            { text: "touch the marks", nextScene: "touchMarks" },
            { text: "continue", nextScene: "lookMarks" }
        ],
        minimapKey: "master"
    },
    {
       title: "touchMarks",
       text: `<p>You run your fingers lightly over the surface of the wall, hoping to sense something, but there's nothing. No trace. It's as if whatever caused these marks was careful to leave no sign behind.
        <p>"You don't feel anything, do you?" Damian asks, noticing your focused expression. "I mean, no residue or anything that would suggest... a Shade?"
        <p>You shake your head slowly, still baffled. "No. It's strange. These marks have the same shape as the ones left by a Shade's claws, but there's nothing. No residue. No distortion." You pause, uncertainty creeping in. "Whatever caused these marks... it's like they wiped everything clean."
        <p>Damian studies you, clearly trying to piece the information together. "So, you're saying this could've been a Shade? But there's no sign of it? That's... unsettling."
        <p>You nod, your brow furrowing as you process the situation. "It doesn't add up. It should be there. The Shade residue always leaves a trace. But here, there's nothing. Just the marks. And that's all."
        `,
        choices: [
            { text: "continue", nextScene: "lookMarks" }
        ],
        minimapKey: "master"
    },
    {
        title: "lookMarks",
        text: `<p>Damian crosses his arms, glancing at the marks again. "Something doesn't sit right about this whole situation. I'm starting to wonder if we're dealing with more than just a simple attack. If it's a Shade, why aren't we seeing any evidence? If it's a person, why would they leave marks like this?"
        <p>You both fall silent for a moment, the mystery of the marks on the wall hanging in the air. The confusion deepens, and the more you try to make sense of it, the stranger it becomes.
        `,
        choices: [
            { text: "continue", nextScene: "masterBedroom" }
        ],
        minimapKey: "master"
    },
    {
        title: "inspectBlood2",
        text: `<p>You stare at the bloodstain, your thoughts racing as you try to piece together the information in front of you. One thing is clear, however: Shades don't have blood. Their very nature doesn't allow for it. They leave behind only residue- nothing more. Anything they touch, or anything that causes injury to them, might carry a trace of that residue, but there is no blood, no physical fluid that could create a stain like this.
        <p>You glance at Damian, who's still studying the bed, as if trying to make sense of what you just said. "You know," you begin, your voice low, "Shades don't bleed. That's... that's not something they can do. They only leave behind residue- on surfaces, on objects, or where they've been injured."
        <p>Damian looks at you, his brow furrowing in confusion. "But this... This looks like regular human blood. Nothing odd about it, aside from the obvious." He gestures to the stain, still not understanding the full picture.
        <p>You nod, your eyes flicking between the blood and the rest of the room. "Exactly. So, how do you explain the Shade residue in the blood? That's the real question. The blood doesn't match the usual pattern, and the Shade residue is present only in the blood, not on the bed or anywhere else in the room."
        <p>Damian's expression darkens as he starts to put it together. "If the Shade didn't leave blood, but there's still residue... Then what does that mean? Did it attack him, or was it something else entirely?"
        <p>You shake your head, still feeling the weight of the confusion. "It means that the Shade's presence is here, but in a way that doesn't fit the usual pattern. Something's wrong with the blood, the way it's tainted. We're looking at something... different, something that doesn't follow the rules we know." 
        <p>Damian remains silent for a moment, processing. His voice comes out quietly. "So, whatever happened here... it wasn't just the Shade. There's something else at play."
        <p>The two of you exchange a glance, a shared understanding that this case is far more complicated than you both first imagined.
        `,
        choices: [
            { text: "continue", nextScene: "masterBedroom" }
        ],
        minimapKey: "master"
    },
    {
        title: "guestBedroom",
        text: `<p>You and Damian tried to enter the Guest Bedroom, but it wouldn't budge.`,
        altText: `<p>The guest bedroom is locked.`,
        choices: [
            { text: "use key", nextScene: "guestBedroom_unlocked", conditionalA: "Guest Room Key" },
            { text:  "change locations", nextScene: "property"}
        ],
        minimapKey: "guest"
    },
    {
        title: "guestBedroom_unlocked",
        text: `<p>You used the key to unlock the door.
        <p>As you and Damian approach the guest bedroom, the key you found earlier fits perfectly into the lock. With a soft click, the door creaks open, revealing a room that seems untouched. The air is still, and the faint smell of dust suggests no one has entered here in quite some time.
        <p>The room is simple- barely furnished with a twin-sized bed, a dresser, and a small desk by the window. The sheets on the bed are neat, and there are no signs of struggle or disturbance. Everything seems almost too pristine, as though the room had been carefully avoided. The stillness of it is unnerving in contrast to the chaos you've seen elsewhere in the house.
        <p>Damian steps further into the room, his eyes scanning every corner. He notices something on the far side, near a dresser that seems a bit too pristine for a space that's supposedly unused. He walks over, pulling open the drawer, and finds a small cash box tucked at the back. His eyes narrow.
        <p>As Damian stares at the cash box in his hand, his fingers absently run along the edges of the metal. You, meanwhile, move toward a display case near the wall. It catches your eye because something inside gleams under the low light. As you approach, you spot a high rarity item: a small, intricately crafted weapon that looks like it could be used to deal with Shades. It has a strange aura, almost humming with energy. You recognize it immediately as something specifically designed to counteract the unnatural abilities of a Shade, the kind of thing that could make a huge difference in a fight- or even be used as leverage against a powerful adversary.
        <p>He glances over at the weapon in your hands, then back at the box, a thoughtful look crossing his face. His eyes narrow slightly, as if he's considering the bigger picture. He looks at the cash box in his hand, then back to the weapon you've found.
        <p>"Well, we've got a choice to make," he says slowly. "We can't just take everything. Messing with the scene too much could raise red flags.
        `,
        altText: `<p>The guest bedroom is still unlocked from before. The room hasn't changed since you last visited- still simply furnished. You glance temptedly at the item you left behind, but you know better than to mess with the scene too much. Besides, you can feel Damian's glare on you.`,
        choices: [
            { text: "take the cash box", nextScene: "takeCashBox", exclusive: "bargainChoice" },
            { text: "take the relic", nextScene: "takeRelic", exclusive: "bargainChoice" },
            { text: "change locations", nextScene: "property" }
        ],
        minimapKey: "guest"
    },
    {
        title: "takeCashBox",
        text: `<p>You decided that taking the Cash Box would be more beneficial than the relic.
        <p><i>[Cash Box Obtained]</i>`,
        item: {
            itemName: "Cash Box",
            battleUse: false,
            puzzleUse: true
        },
        choices: [
            { text: "change locations", nextScene: "property" }
        ],
        minimapKey: "guest"
    },
    {
        title: "takeRelic", // FOR THE CHEESE
        text: `<p>You decided that taking the Relic would be more beneficial than the cash box.
        <p><i>[Relic Obtained]</i>`,
        item: {
            itemName: "Relic",
            battleUse: true,
            puzzleUse: false
        },
        choices: [
            { text: "change locations", nextScene: "property" }
        ],
        minimapKey: "guest"
    },
    {
        title: "finishInvestigation",
        text: `<p>You decide to finish the investigation and conclude that... `,
        choices: [
            { text: "one of the officers", nextScene: "suspectCops" },
            { text: "the homeowner", nextScene: "suspectHomeowner" },
            { text: "business associates", nextScene: "suspectAssociates" }
        ]
    },
    {
        title: "suspectCops",
        text: `<p>You deduced that it was one of the officers that caused the Shade due to feelings off...`,
        choices: [
            { text: "Homeowner's Betrayal", nextScene: "incorrect_conclusion" },
            { text: "Greed", nextScene: "incorrect_conclusion" }
        ]
    },
    {
        title: "suspectHomeowner",
        text: `<p>You deduced that it was the homeowner that caused the Shade due to feelings of...`,
        choices: [
            { text: "Fear of Exposure", nextScene: "incorrect_conclusion" },
            { text: "External Hate", nextScene: "correct_conclusion"}
        ]
    },
    {
        title: "suspectAssociates",
        text: `<p>You deduced that it was the homeowner's business associates that caused the Shade due to the feelings of...`,
        choices: [
            { text: "Fear of Exposure", nextScene: "incorrect_conclusion" },
            { text: "Hatred Towards Homeowner", nextScene: "incorrect_conclusion" }
        ]
    },
    {
        title: "correct_conclusion",
        text: `<p>After your deduction, you and Damian decided to roam the property until after midnight to find the Shade.
        <p>But as the two of you stumbled upon the Shade, it seemed strange.`,
        choices: [
            { text: "Exterminate the Shade", nextScene: "fight_scene" }
        ]
    },
    {
        title: "fight_scene",
        text: ``,
        choices: []
    },
    {
        title: "incorrect_conclusion",
        text: ``, // jump to next story
        choices: []
    }
]

storyDataJob3 = [
    {
        title: "act_end",
        text: `<p>The small bell above the door jingled as the kid stepped into your shop, their small frame barely visible over the counter. They looked nervous, eyes darting around at the assortment of odd trinkets and bottles lining the shelves. You put down the guidebook you'd been reading and gave them a warm, steady smile, an unspoken promise of safety. You'd seen all sorts walk through your door, but this one seemed different.
            <p>They hesitated, then spoke in a quiet voice. 
            <p>"Um... my parents run a restaurant... and they're really tired, and stressed, and...kinda sad. I think...I think something's wrong." 
            <p>You leaned in slightly, focusing on the words. Stress and exhaustion- those were just the surface symptoms. What lay underneath was always the same. Something darker.
            <p>You raised an eyebrow. "How did you know about this place?"
            <p>The kid shifted, looking slightly embarrassed but determined. "A friend told me. They said you can help... with bad dreams. My mom and dad have been having bad dreams. And I think... I think something's giving them bad dreams."
            <p>You gave a slow nod. Bad dreams, stress, exhaustion... You'd seen Shades grow from less. Sometimes, it only took a small crack in the mental barrier for something dark to latch on.
            <p>"Where can I find them?" you asked, already preparing for the job ahead. 
            <p>The kid's face brightened, relieved that someone was finally listening. "It's the <i>Golden Spoon</i>, on Pierce Lane. I'll... I'll see you this afternoon, right?"
            <p>You leaned back, considering. The kid had a strange maturity in their gaze, a certain understanding of the weight their parents were carrying. 
            <p>"I'll be there," you confirmed.
            <p>The kid hesitated for a moment before speaking again, her voice quieter this time. "Do... do I have to pay?"
            <p>You smiled, a soft chuckle escaping. "It's fine. A free meal at your parents' restaurant will do."
            <p>The kid's eyes lit up, a flash of hope in their expression before she dashed out the door. The bell jingled again, and you were left with the weight of the job settling in.
            <p>There was a shade out there, feeding on their stress. It was your job to make sure it didn't grow any stronger.
            <p>This afternoon, you'd pay a visit to the <i>Golden Spoon</i>.
            `,
        choices: [
            { text: "begin job", nextScene: "front_outside" }
        ]
    },
    {
        title: "act_end_fail",
        text: `<p>No matter how long you waited for the Shade, it never appeared.
            <p>You and Damian left the property with more unanswered questions than you started with.
            <p>Damian parted ways with you, his gaze avoiding you.
            <p>You returned back to your shop, and tried to fall asleep knowing you had just failed your job.
            <p><b><i>[The Next Morning]</i></b>
            <p>The small bell above the door jingled as the kid stepped into your shop, their small frame barely visible over the counter. They looked nervous, eyes darting around at the assortment of odd trinkets and bottles lining the shelves. You put down the guidebook you'd been reading and gave them a warm, steady smile, an unspoken promise of safety. You'd seen all sorts walk through your door, but this one seemed different.
            <p>They hesitated, then spoke in a quiet voice. 
            <p>"Um... my parents run a restaurant... and they're really tired, and stressed, and... kinda sad. I think... I think something's wrong." 
            <p>You leaned in slightly, focusing on the words. Stress and exhaustion- those were just the surface symptoms. What lay underneath was always the same. Something darker.
            <p>You raised an eyebrow. "How did you know about this place?"
            <p>The kid shifted, looking slightly embarrassed but determined. "A friend told me. They said you can help... with bad dreams. My mom and dad have been having bad dreams. And I think... I think something's giving them bad dreams."
            <p>You gave a slow nod. Bad dreams, stress, exhaustion... You'd seen Shades grow from less. Sometimes, it only took a small crack in the mental barrier for something dark to latch on.
            <p>"Where can I find them?" you asked, already preparing for the job ahead. 
            <p>The kid's face brightened, relieved that someone was finally listening. "It's the <i>Golden Spoon</i>, on Pierce Lane. I'll... I'll see you this afternoon, right?"
            <p>You leaned back, considering. The kid had a strange maturity in their gaze, a certain understanding of the weight their parents were carrying. 
            <p>"I'll be there," you confirmed.
            <p>The kid hesitated for a moment before speaking again, her voice quieter this time. "Do... do I have to pay?"
            <p>You smiled, a soft chuckle escaping. "It's fine. A free meal at your parents' restaurant will do."
            <p>The kid's eyes lit up, a flash of hope in their expression before she dashed out the door. The bell jingled again, and you were left with the weight of the job settling in.
            <p>There was a shade out there, feeding on their stress. It was your job to make sure it didn't grow any stronger.
            <p>This afternoon, you'd pay a visit to the <i>Golden Spoon</i>.`,
        choices: [
            { text: "begin job", nextScene: "front_outside" }
        ]
    },
    {
        title: "front_outside",
        text: `<p>You arrive at the <i>Golden Spoon</i>, a small but well-kept restaurant tucked in the heart of Silver City. Its exterior is modest yet inviting. The restaurant's name is hand-painted on a wooden sign, softly swinging in the breeze. A small blackboard beside the door displays the day's special, "Stew of the Day: Silverback Ribs." There's a faint smell of garlic and herbs drifting from inside, mingling with the urban scents of the city streets.
            <p>Just outside the door, a scruffy gray tabby cat lounges lazily on the steps. It's curled up in the sun, purring contentedly, but looks up as the user approaches, its eyes narrowing suspiciously before it rolls over on its back, waiting for attention. The cat seems oddly calm, not disturbed by the usual hustle of the city.  
            <p>The kid who had asked for help catches your attention. She's standing a little further down the street, her face lit up in anticipation.
            `,
        altText: `<p>You're at the entrance of the restaurant, once more.`,
        choices: [
            { text: "pet the cat", nextScene: "petCat" },
            { text: "talk to the kid", nextScene: "talkKid" },
            { text: "go inside", nextScene: "front_inside" }
        ]
    },
    {
        title: "petCat",
        text: `<p>You crouch down slowly, reaching out a hand to the lazy tabby. It watches your movement with half-lidded eyes, its tail flicking lazily. As your fingers make contact with its soft fur, the cat gives a low purr, arching its back slightly in contentment.
            <p>"Easy there," you murmur, your hand gliding through the tabby's fur, feeling the warmth of the sun against your skin. The cat rolls over onto its back, exposing its belly like it's inviting more attention.
            <p>Its eyes squint almost smugly as it stretches out, completely unbothered by the world around it. You can almost feel its calmness rubbing off on you for a moment.
            `,
        altText: `The cat is still loafing about.`,
        choices: [
            { text: "feed the cat", nextScene: "feedCat", conditionalA: "Meat Snack", limited: true }, // USER MUST HAVE SNACK IN INVENTORY
            { text: "leave the cat", nextScene: "front_outside" }
        ]
    },
    {
        title: "talkKid",
        text: `<p>"Hey!" she says, a little breathless. "You came!" Her voice is helpful, but there's an underlying worry that she can't quite mask.
            <p>You nod, giving her a small smile. "Here I am. How's your mom and dad doing?"
            <p>"Mom's still kinda... out of it? She's been looking really tired. Dad's been running around in the kitchen a lot, so I don't know how he's doing either..." She looks down at her feet for a second.
            <p>You glance up at the restaurant, there's a heaviness to it. 
            <p>"I see. Well, I'll go inside to talk to your mom."
            <p>"Okay, I'll hang out with the cat then. Just... don't take too long."
            <p>You give her a reassuring smile. "I'll be quick. I'll take care of everything, don't worry."
            `,
        altText: `<p>She's still playing with the cat.`,
        choices: [
            { text: "leave the two", nextScene: "front_outside" }
        ]
    },
    {
        title: "feedCat", // CHEESE HERE
        text: `<p>You unwrap the meat snack, the savory scent wafting through the quiet alley beside the diner.  
            <p>The cat lifts its head, nostrils flaring, catching the scent before you even hold it out.  
            <p>With a soft meow, it hops down and pads over, brushing against your legs once before sitting, expectant.  
            <p>You kneel and offer the snack. It sniffs, then takes it gently from your hand, biting with careful precision. No frenzy. Just appreciation.  
            <p>A few moments pass in silence while it chews, tail curling around its paws. Then it looks up at you— not the blank, dismissive glance of a stray, but something far more focused. Intelligent. Intentional.  
            <p>It blinks once. Then again. And without a sound, it turns and trots away, stopping just long enough to glance over its shoulder.  
            <p>A clear gesture: follow.  
            <p>The cat leads you away from the noise of the kitchen, away from the buzz of the town square. It slips between fences, under rusted gates, across patches of weeds and forgotten concrete. You keep up, your footsteps the only sound apart from the soft pad of its paws.  
            <p>Eventually, it slips into a narrow drainage tunnel behind a row of disused storage sheds. You duck to follow, the air inside cool and dry.  
            <p>At the far end, the tunnel opens into a half-sunken service space beneath the old laundromat- a place long abandoned, cloaked in shadow and dust.  
            <p>That's when you see it.  
            <p>Curled into itself in the far corner of the room, partially tucked beneath a slanted beam of late afternoon light, is a shape that barely looks real. Like the silhouette of a person, but hollowed out—distorted by flickering edges, as if it's dissolving at the corners. A Shade.  
            <p>It's not moving. Not hunting. Just... resting.  
            <p>The air here feels thinner, like your breath doesn't reach as deep. And the temperature has dropped enough that your skin prickles with cold. The cat doesn't approach it- just sits at your side, eyes narrowed, ears back.  
            <p>The Shade hasn't noticed you. Not yet.`,
        choices: [
            { text: "exterminate the shade", nextScene: "fight_scene" },
            { text: "leave the shade", nextScene: "front_outside" }
        ]
    },
    {
        title: "greetKid",
        text: `<p>"Hey!" she says, a little breathless. "You came!" Her voice is helpful, but there's an underlying worry that she can't quite mask.
            <p>You nod, giving her a small smile. "Here I am. How's your mom and dad doing?"
            <p>"Mom's still kinda...  out of it? She's been looking really tired. Dad's been running around in the kitchen a lot, so I don't know how he's doing either... " She looks down at her feet for a second.
            <p>You glance up at the restaurant, there's a heaviness to it. 
            <p>"I see. Well, I'll go inside to talk to your mom."
            <p>"Okay, I'll hang out with the cat then. Just...  don't take too long."
            <p>You give her a reassuring smile. "I'll be quick. I'll take care of everything, don't worry."
            `,
        altText: `<p>She is still playing with the cat.`,
        choices: [
            { text: "continue", nextScene: "front_outside" }
        ]
    },
    {
        title: "front_inside",
        text: `<p>You enter the restaurant, the bell above the door jingling softly as it swings open. At first glance, the <i>Golden Spoon</i> is a cozy and inviting place. The warm, dim lighting and rustic wooden tables make it feel homey, with a simple yet charming décor. There's a certain lived-in comfort to the space: mismatched chairs, old yet well-polished silverware, and small potted plants on each table.
            <p>However, as your eyes adjust, you notice the subtle signs of strain around the edges. A few empty chairs, a slightly faded menu hanging crookedly on the wall, and the odd sense that the usual lively chatter of a restaurant is replaced with an uncomfortable quiet. The place feels almost too still, like it's waiting for something.
            <p>In the far corner of the restaurant, there's the mother, the owner, slumped over at an empty table. Her head rests in her hands as though she's dozed off in exhaustion. Her posture is slouched, and there's a slight tremor in her hands when she shifts them. Despite the warmth of the restaurant, she seems distant, caught in a fog of mental fatigue.
            <p>Near the front window, an old man sits at a table with a cup of coffee and a newspaper spread out before him. His glasses are perched low on his nose as he reads, occasionally muttering to himself or chuckling at an article. He's a regular, clearly comfortable.
            <p>Toward the middle of the room, a young couple sits enjoying their meal, oblivious to the underlying tension. They laugh quietly, sharing a plate of food, but their conversation seems unusually soft for a public setting. 
            <p>In the other far corner of the restaurant, the doors to the kitchen muffle the sounds of men yelling orders at each other.
            <p>Where do you go first?`,
        altText: `You stand there at the entrance of the restuarant again. Where do you go now?`,
        choices: [
            { text: "outside", nextScene: "front_outside" },
            { text: "couple", nextScene: "table_couple" },
            { text: "old man", nextScene: "table_oldman" },
            { text: "owner", nextScene: "table_mom" },
            { text: "kitchen", nextScene: "kitchen3"},
            { text: "finish investigation", nextScene: "finishInvestigation" }
        ]
    },
    {
        title: "table_couple",
        text: `<p>You approach the booth near the center of the café, where the young couple sits close together, grinning over a half-finished plate of pancakes and a pair of towering milkshakes. One of them is holding their phone at an angle, snapping photos of the food while the other leans in with a peace sign.
            <p>"Okay, now do the syrup pour shot," the girl says, lifting the syrup bottle dramatically.
            <p>You clear your throat lightly. "Sorry to interrupt."
            <p>They both look up, startled but smiling. The girl sets the syrup down and waves a hand.
            <p>"Oh! No worries," she says brightly. "You work here?"
            <p>You shake your head. "Just passing through. Thought I'd ask what brought you two in."
            <p>The guy leans forward, enthusiastic. "Travel blog," he says, tapping his phone screen. "Hidden Spoon: 10 Underrated Diners That'll Change Your Life. Number seven. We've been doing the whole list."
            <p>"It's got such vibes in here," the girl adds, glancing around at the diner's retro décor. "It's got that faded Americana look. Very aesthetic. Totally didn't expect to find it this far off the main strip."
            <p>She lifts her milkshake and grins. "And this? Literally tastes like nostalgia."
            <p>"Yeah, we're not from around here," the guy continues. "Big city types. But we love checking out little spots like this. Support small businesses, you know?"
            <p>You nod, letting their energy run its course before you ask, "You two notice anything...  strange? With the staff, or the atmosphere?"
            <p>They exchange a look, then the girl tilts her head. "Strange like how?"
            <p>"The place seems a little quiet," you say. "People seem tired. Worn down."
            <p>The guy shrugs. "I mean, yeah, I guess the waitress looked kinda out of it when she brought our drinks. But I figured it was just a long shift or something."
            <p>"Totally," the girl agrees. "Service industry is brutal. And with all that Shade stuff on the news lately, you can't blame people for being stressed."
            <p>You raise an eyebrow. "Shade stuff?"
            <p>"Oh, you know," she says, twirling a spoon absentmindedly. "That viral video— like, last month? The one with the guy in the parking garage and the weird shadow thing? Super fake, but kinda creepy. I've got it saved if you wanna see."
            <p>The guy chuckles. "Yeah, people say that stuff's real, but I dunno. Feels like it's always happening somewhere else. Like movie monsters, you know?"
            <p>They both go back to their pancakes, the moment of seriousness passing as quickly as it came.
            <p>"Anyway," the girl adds, cheerful again, "if you're doing a review or something, make sure you mention the milkshake. Seriously, life-changing."
            `,
        choices: [
            { text: "\"What's your opinion on shades?\"",nextScene: "couple_info_shade" },
            { text: "change locations", nextScene: "front_inside" }
        ]
    },
    {
        title: "couple_info_shade",
        text: `<p>You give a slight nod, absorbing their nonchalant attitudes toward the whole thing. Their dismissive take on Shades makes sense in a way— people often tend to brush off things that don't directly affect them. But something in the way they both laughed it off felt almost too practiced, as though they were trying a little too hard to distance themselves from the topic.
            <p>You take a mental note of the ease with which they dismiss the idea, almost as if they're trying to convince themselves that it's all just hype, something to get clicks and likes rather than real threats.
            <p>"Well," you say lightly, "I hope you're right. But you never know. Things like that can catch you off guard when you least expect it."
            <p>The woman smiles, clearly appreciative of the conversation's casual direction, but she doesn't seem to take it too seriously. "True. But for now? It's all about these pancakes." She gestures to the plate between them with a playful grin.
            <p>Her partner, still chewing, adds, "Definitely. We're not here for ghost stories. Just good food and good vibes."
            <p>With the tension now completely dissolved, the young couple resumes their breakfast, chatting happily, the lighthearted atmosphere almost tangible in contrast to the somber mood of the rest of the restaurant.
            <p>As you stand there, you can't help but wonder: if they're so certain that they're untouchable by Shades, why does it feel like they're overcompensating? There's something off about their nonchalance, but it's not something you can put your finger on yet.
            <p>You take a step back, deciding whether to continue probing or maybe leave them to their breakfast and focus on the bigger picture of the restaurant's growing strangeness. What do you want to do next?
            `,
        choices: [
            { text: "continue", nextScene: "table_couple" }
        ]
    },
    {
        title: "table_oldman",
        text: `<p>You approach the booth by the window where the old man sits, a half-empty cup of coffee steaming beside his neatly folded newspaper. He doesn't look up right away, but as your shadow crosses the table, he hums a low, amused sound.
            <p>"New face," he says without glancing over. "Not many of those around here lately."
            <p>You offer a small nod. "Just passing through."
            <p>"Mm." He flips the page of the paper, eyes scanning a headline. "You're not from the neighborhood, but you're looking close." He finally lifts his gaze to meet yours, sharp and knowing. "So, what brings someone like you to a place like this?"
            <p>You shrug, keeping your tone light. "Heard the food was good."
            <p>He chuckles— dry, but not unfriendly. "Used to be lines out the door. These days, the seats are emptier, and the smiles feel thinner." He takes a slow sip of his coffee, then sets the mug down with a soft clink. "Not the cooking that changed, far as I can tell. Just...  the air."
            <p>You tilt your head slightly. "The air?"
            <p>"Yeah." He glances toward the back of the café, where the mother is cleaning a table with robotic precision. "Feels heavier in here than it used to. Like the walls are holding their breath. That woman— she's still working just as hard, maybe harder— but she ain't really here. You know what I mean?"
            <p>You nod. "She seems...  worn down."
            <p>"That's the polite way to say it," he says, eyes returning to his paper. "Some days I see her wipe the same table three, four times. Others, she forgets the coffee I asked for and just...  stands there. Staring past me."
            <p>There's a pause. The newspaper crinkles as he absently folds it again.
            <p>"Place has a shadow over it these days— and not just the economy."
            <p>You look at him a moment longer, gauging his tone.
            <p>"You believe in Shades?" you ask.
            <p>He smirks, not answering right away. "I believe in people who believe in 'em. And I've seen enough strange things not to rule anything out." He leans back in his booth, fingers tapping once on the rim of his mug. "But hey, I'm just a guy with a coffee habit and too much time to think."
            <p>You offer a faint smile. "That kind of thinking tends to be the most honest."
            <p>"Maybe." He lifts his mug in a slow half-toast. "But if something is wrong here...  you be careful. Whatever it is, it's weighing on that woman like bricks."
            <p>You nod, a quiet confirmation. "Thanks."
            `,
        altText: `<p>The old man looks up from his newspaper as you approach his table.`,
        choices: [
            { text: "\"do you come here often?\"", nextScene: "oldman_info1" },
            { text: "\"was she always like that?\"", nextScene: "oldman_info2"},
            { text: "change locations", nextScene: "front_inside" }
        ]
    },
    {
        title: "oldman_info1",
        text: `<p>The old man glances up from his paper again, one brow lifting with amusement.
            <p>"Now that's a classic line," he says with a dry chuckle. "But yeah. Been coming here for...  what, ten years now? Maybe longer."
            <p>He taps the side of his mug. "Back when the line used to wrap around the block. You'd wait twenty minutes just to get a seat by the window. And still worth it." His expression softens a little. "There was a rhythm to the place, you know? Like it breathed with the city."
            <p>He takes another sip of his coffee, gaze drifting toward the back of the room.
            <p>"These days, it's quieter. Different. Most of the regulars stopped coming around. Some moved. Some just lost the habit. Not me, though. I stick around."
            <p>You lean slightly against the booth's edge. "Why's that?"
            <p>He shrugs, but it's not careless. "Because she still shows up. Even when she looks like she's about to fall over. Because the cook in the back still knows how I like my eggs. Because a place like this doesn't just lose its soul overnight." His fingers drum once on the table. "You stick around long enough, you learn to see the cracks forming."
            `,
        choices: [
            { text: "continue", nextScene: "table_oldman" }
        ]
    },
    {
        title: "oldman_info2",
        text: `<p>The old man's paper stills mid-fold, and his eyes flick up to meet yours. There's a knowing look there, like he's been waiting for someone to finally ask that.
            <p>"No," he says quietly. "She hasn't."
            <p>He sighs through his nose and leans back in the booth, coffee cradled in both hands. "She used to be sharp. Real sharp. Ran this place like a well-oiled machine. You'd blink and she'd already have your order on the table. Knew every regular by name, their kids, their stories. Warm, but focused."
            <p>He shakes his head. "Lately...  she's still warm, sure, but she's not here. Not really. She forgets things. Fidgets. Has this faraway look in her eyes, like she's listening to something no one else can hear."
            <p>There's a pause, just long enough for the hum of the ceiling fan to fill the space.
            <p>"I didn't want to say anything, but... " He sets his cup down, more carefully this time. "Last week, I watched her talk to a wall. Just for a second. Like someone was standing there. Then she blinked and went back to work like nothing happened."
            <p>He frowns faintly. "I don't know what's going on, but it's not just tiredness. She's not herself— and she's trying real hard to pretend otherwise."
            <p>His voice is quieter when he adds, "I think she's scared. And I think she's alone in it."
            `,
        choices: [
            { text: "continue", nextScene: "table_oldman" }
        ]
    },
    {
        title: "table_mom",
        text: `<p>You approach the dozing mother, gently tapping her shoulder to wake her. She stirs slowly, blinking as she shakes off the fatigue. She looks up, clearly startled, then rubs her eyes before focusing on you.
            <p>"Excuse me... Are you alright?" You asked her, softly.
            <p>The mother blinks, slightly disoriented, then yawns.
            <p>"Oh, I must've dozed off... I'm so sorry. Let me get you to a table."
            <p>"I'm actually here to help. My name is <player>, and I specialize in... well, let's just say I deal with Shades." You explained to her.
            <p>"Your daughter dropped by my shop. She's worried about you and your husband. She's mentioned something's been... weighing on you both."
            <p>Her eyes widened slightly, her face immediately filled with concern and tension.
            <p>"Oh no...  no, this is all too much," her hands trembling slightly, "we can't afford any more problems, not right now. We don't have any money for... for that kind of help." 
            <p>Her voice becomes frantic, "please, you don't have to--this is just a phase, I'll be fine soon, really, I-"
            <p>You assured her, "it's alright. No need to worry about payment. My consultation is free. I came by because I wanted to see the place first." You pause, letting her soak in your words.
            <p>"I'm just here to take a look around, see if I can find anything that might be causing the... stress, for lack of a better word."
            <p>"Free, you say?" She looks at you with skepticism, clearly conflicted. She studies your face, searching for any hint of deception, then sighs.
            <p>"I understand. Believe me, I do. I'm not here to add to your worries, just to see what I can do to help. If I find something, we can talk about what comes next."
            <p>"Alright... alright, if you insist. But, please, don't expect much. Things are tough here, always have been... and I'm sure it's just the stress. Nothing more." 
            <p>She looks at you, weary and resigned, but there's a small glimmer of hope in her eyes as she finally nods.
            <p>"I guess, if you want to look around, I'll... I'll leave you to it."
            `,
        altText: `<p>"What else do you want to know?"`,
        choices: [
            { text: "ask about restaurant", nextScene: "mom_info_restaurant", conditionalA: "father_info" }, // AVAILABLE AFTER PLAYER VISITED father_info
            { text: "ask about her", nextScene: "mom_info_her", conditionalA: "oldman_info2" }, // AVAILABLE AFTER PLAYER VISITED oldman_info2
            { text: "ask about shades", nextScene: "mom_info_shade" },
            { text: "change locations", nextScene: "front_inside" }
        ]
    },
    {
        title: "mom_info_restaurant",
        text: `<p>You ask, "How long has the restaurant been open? Has it always been this difficult?"
            <p>She looks distant, folding her hands together on the table as if trying to steady herself. "We've been open for... almost fifteen years now. Things were going great for the first decade, even better than we expected. The restaurant was always busy, always full of life. But the last few years... those have been the hardest we've ever faced." She sighs deeply and leans back in her chair, her exhaustion weighing her down. 
            <p>"Business has dropped off dramatically. We used to have people waiting in line just to get a table, but now... it's like we can't even hold on to our regulars." She pauses, her fingers twitching nervously as she plays with the edge of a napkin. 
            <p>"I've been trying everything I can think of to keep it steady, but...  it's like the weight of it all is just too much." 
            <p>Her gaze drops again, and she speaks in a quieter voice, almost like she's talking to herself. "And on top of that, my mother's been bedridden for months. The medical bills are piling up, and I'm...  I'm so scared. Scared that if things don't turn around soon, we might lose everything."
            `,
        choices: [
            { text: "continue", nextScene: "table_mom" }
        ]
    },
    {
        title: "mom_info_her",
        text: `<p>Noticing the weariness in her posture, you tilt your head. "You seem exhausted. Have you been sleeping okay...  or is something else keeping you up at night?"
            <p>She winces, and for a moment her expression softens with guilt– like she's been caught carrying a weight she didn't want noticed.
            <p>"I haven't been sleeping much, to be honest."
            <p>Her voice dips quieter, eyes lowering to her hands as she folds them tightly in her lap. "It's the stress, mostly. The restaurant, my mother's health...  there's always something waiting to keep me awake."
            <p>She takes a breath, slow and tired. "I handle the bills, and everytime I sit down to go through them, it feels like we're sinking just a little deeper. I try to keep everything running, try to stay ahead of the late notices and the numbers that never seem to add up."
            <p>She glances up at you briefly, then quickly looks away, pressing her lips into a thin line.
            <p>"Some nights, I just lie there, staring at the ceiling. My mind races. It doesn't matter how tired I am– I can't shut it off."
            <p>She runs a hand through her hair, the motion slow and weary. "I end up dozing off in the middle of the day because I can't sleep at night. It's not rest– it's just my body giving out."
            <p>A pause. Then quieter: "My husband's in the kitchen with my father, and I don't want to put this on them. My dad's already working past the age he should, and my husband...  Well, he's doing what he can, but he's never been good with the books. I've always handled that part. I just... I don't want to make him feel worse. They don't need to know about the Shade..."
            <p>She shakes her head slowly. "I wish I could rest. I really do. But it's hard to sleep when everything feels like it could all disappear in a flash."
            `,
        choices: [
            { text: "continue", nextScene: "table_mom" }
        ]
    },
    {
        title: "mom_info_shade",
        text: `<p>You ask, "Have you noticed any strange feelings or events happening around the restaurant, especially when things get overwhelming?"
            <p>Her expression falters for a moment, and she shifts uncomfortably in her seat. "Strange feelings, you say?" She pauses, glancing around the room, as if trying to find something out of place. She lets out a tired breath, then looks back at you, a forced calmness in her voice. "Well, I've had a few...  odd moments, but it's probably just the stress, right?" She chuckles weakly, as though trying to downplay it. "I mean, sometimes, when I'm alone in the back doing prep work late at night, it feels like the air gets heavy. Like something's pressing down on me." She shifts in her chair, clearly trying to convince herself. "But it's nothing to worry about. It's not like it's something huge. The few times I've seen it, it's no bigger than a house cat, really." 
            <p>She glances at the empty tables, then looks back at you, trying to sound casual. "I mean, it's just... a little thing. A shadow, really. And it only shows up when I'm feeling overwhelmed. It never stays long. It's fine. Really. It doesn't get bigger or anything." Her voice shakes slightly, but she forces a smile. "I'm sure it's just the stress. Nothing to be concerned about. It's... manageable. I can handle it." She leans back slightly, her attempt at reassurance almost convincing, but the slight tremor in her hands betrays her uncertainty.
            `,
        choices: [
            { text: "continue", nextScene: "table_mom" }
        ]
    },
    {
        title: "kitchen3",
        text: `<p>The kitchen is bustling with activity as you step inside, the sounds of sizzling food and the rhythmic clatter of cookware filling the air. The warmth of the kitchen is a welcome contrast to the quiet outside, and the smells of fresh hash browns, grilled onions, and simmering sauces mingle together in the space.
            <p>The old man, hunched over the grill with a grease-stained apron and a face carved by years of hard work, doesn't immediately notice you. He's focused on the sizzling eggs and bacon in front of him, his movements confident and practiced. The younger man, the mother's husband, is flipping hash browns on the griddle with a casual ease, cracking jokes with the old cook as he works.
            <p>You pause for a moment, taking in the scene, before the old man looks up from the grill, his sharp eyes scanning you with a mix of curiosity and skepticism. The husband glances your way briefly, then turns back to his cooking, unconcerned.
            <p>You take a breath, choosing your words carefully. No need to cause a stir just yet. You've heard the rumors and noticed the signs— it's clear something's off, but there's no need to bring that up directly. Not yet.
            <p>You step forward slightly, offering a friendly but neutral smile. "I'm actually here to help with some of the challenges businesses like yours are facing," you say casually, trying to sound as nonchalant as possible. "I specialize in... helping places get back on track when things feel a little out of sync. Your daughter sent me over to check in. She's been worried about you both."
            <p>The old man pauses for a moment, a flicker of something unreadable crossing his face. His hands don't stop moving— flipping a pan of eggs without a second thought— but his attention shifts to you more fully. "Out of sync, eh?" he mutters, grunting as he turns the eggs. "That's what folks like you always say, isn't it? I've heard it before, sure. But managing a place like this... well, that's a lot of work, and it doesn't always go smoothly. We're used to it." He glances at you sidelong, his eyes sharp. "Your daughter sent you, did she? Never been one for fancy solutions. We've been running this place a lot longer than any... What's the term? 'Balancing help?'" He gives you a dry look, the corners of his mouth twitching in an attempt at a smile. "I'd say we've been doing just fine without outside assistance, thank you."
            <p>The younger man, the husband, doesn't pause his cooking but flashes a quick grin in your direction. "Hey, if you're here to help, that's cool. We've been having some slow nights, but, you know, just need a little bit of a boost. No harm in checking things out, right? Besides, we've been running this place for a while, so we're no strangers to hard work." He chuckles lightly, still distracted by the griddle.
            <p>You nod, not pushing too hard but keeping the conversation light. "Of course, I get it. It's just that sometimes an outside perspective helps to spot things we might miss when we're caught up in the daily grind." You give them both a knowing look, trying to put them at ease. "No pressure, of course. I'm just here to take a look around, see if I can offer something to ease the load."
            <p>The old man looks at you with a wary eye, his mouth set in a firm line. "Well, if you're gonna be here, you might as well pitch in. Not that we don't appreciate the 'outside help,' but we're running a business here. You'll have to earn your keep before you start poking around." He gestures to a pile of dirty dishes on the counter. "Wash those, and we'll see if you've got the stomach to get a little deeper into things."
            <p>The husband grins, his attention still mostly on his cooking. "Ah, you know what they say— no free rides, right? Help out in the kitchen for a bit, and then we'll talk. Gotta see if you can handle the heat." He flips a hash brown effortlessly before looking back at you. "We've got a few tasks around here that need doing— nothing too tough, but I'll keep it real. Get those done, and I'll hook you up with something to snack on, maybe even a little more info to help you out. How's that sound?"
            `,
        altText: `The two men seem to busy with their own tasks.`,
        choices: [
            { text: "do the husband's task", nextScene: "storage_puzzle", limited: true, exclusive: "puzzle" }, // CHOICE DISAPPEARS UPON COMPLETION
            { text: "do the father's task", nextScene: "dish_puzzle_begin", limited: true, exclusive: "puzzle" }, // CHOICE DISAPPEARS UPON COMPLETION
            { text: "go upstairs", nextScene: "upstairs", conditionalA: "dish_puzzle_success" }, // AVAILABLE ONLY IF PLAYER COMPLETES FATHER'S TASK
            { text: "change locations", nextScene: "front_inside" }
        ]
    },
    {
        title: "storage_puzzle",
        text: `<p>You nod to the husband, wiping your hands on a nearby towel. "Alright, what do you need?"
            <p>He beams, tossing a spatula in the air and catching it behind his back like he's done it a thousand times. "Love the enthusiasm. Alright, you're on pantry duty."
            <p>He nods toward a narrow doorway next to a rattling fridge. "Storeroom's just through there. Bit of a mess, but you'll manage."
            <p>The old man snorts without looking up from his grill. "Assuming he didn't reorganize everything again."
            <p>The husband smirks. "Guilty as charged. It was getting crowded in there."
            <p>As he flips a hash brown, he rattles off the list from memory, barely skipping a beat.
            <p>"First, I need a jar of <b>pickled red onions</b>— not yellow, not green, just red. Should be top shelf, unless Pops moved it again."
            <p>"Next, <b>chili oil</b>— the homemade stuff. Should be in a tall bottle with no label. You'll know it by the smell. And maybe the heat— it bites if you spill."
            <p>He pauses to stir something on the stove, then adds, "Need the <b>blue cornmeal</b> too. Not the yellow one— blue. Bag's half-torn and has a doodle of a rabbit on it, if that helps."
            <p>"Oh— and <b>thyme</b>. Fresh. Wrapped in a paper towel, probably shoved way in the back of the herb bin. If it looks like a sad plant burrito, you're in the right place."
            <p>"And finally— <b>Grill Dust Number Three</b>. Jar's probably unlabeled, maybe got a tape '3' scribbled on it. Smells like garlic and campfire had a baby."
            <p>He looks over his shoulder and smirks. "Good luck. If you come back sneezing or covered in flour, we'll know you found it."
            <p>The old man lets out a gruff snort but doesn't comment. He's clearly listening.
            <p>"Bring those back and I'll get you something to snack on. And maybe a few answers, if you're still curious."`,
        choices: [
            { text: "enter storage room", nextScene: "storage_puzzle_begin" }
        ]
    },
    {
        title: "storage_puzzle_begin",
        text: ``, // puzzle here
        choices: []
    },
    {
        title: "storage_puzzle_success",
        text: `<p>You return to the kitchen, holding the items you'd managed to find with a sense of quiet satisfaction. The husband looks up from his griddle, a flicker of surprise and genuine approval crossing his face as he sees the haul in your hands.
            <p>"Well, well, look at you," he says, his voice a mix of admiration and amusement. "Got it all right. Pickled red onions, chili oil, the blue cornmeal, thyme... even the Grill Dust Number Three. You didn't miss a thing." <p>He pauses, inspecting the jars and bags you've returned with. "You even managed to get the chili oil without spilling it everywhere. I'm impressed."
            <p>The old man, still focused on his cooking, lets out a low grunt of approval. <p>"Not bad. Didn't think you'd pull it off, but looks like you've got the hang of it. Been a while since anyone managed to navigate that pantry without a mess."
            <p>The husband grins, tossing a spatula in the air before catching it behind his back. "Alright, I'll give you the prize now. A snack, and a little chat. <p>You've earned it. Take a seat, kid."
            <p><i>[Meat Snack] obtained.</i>`,
        item: {
            itemName: "Meat Snack",
            battleUse: false,
            puzzleUse: true
        },
        choices: [
            { text: "listen to him", nextScene: "husband_info" }
        ]
    },
    {
        title: "husband_info",
        text: `<p>You take a seat at the counter, the warm, spicy scent of grilled food still hanging in the air. The husband pulls a stool over and sits beside you, wiping his hands on a towel. There's a certain casual ease to him, like the kitchen is the only place where he feels truly grounded.  
            <p>"So," he says, leaning back slightly and crossing his arms, "I gotta say, it's been a rough stretch. Business has dipped harder than we expected. Used to have a line out the door some nights. Now, we're lucky if the booths fill up by lunch."  
            <p>He glances toward the windows, where the afternoon sun leaks in through dusty blinds. "It's not the food. We haven't changed the recipes. Still use the same ingredients, still cook with the same care. And it's not the people— our staff's solid. Family keeps it running. Always has."  
            <p>He sighs, running a hand through his hair. "I think it's just the world turning. People change. Neighborhoods shift. New spots open up with flashier signs, louder music. We're the old faithful place now. And I guess not everyone sees the charm in that anymore."  
            <p>He pauses, then shrugs. "But that's life. It's cycles. Things slow down, you adjust. Try a new dish, polish the menu, keep smiling. You don't start reaching for ghosts every time things get quiet."  
            <p>His eyes flick toward you briefly. "Not saying I don't believe in all that Shade talk. I mean, I've heard the stories. People see weird things, get paranoid when the lights flicker. And sure, maybe sometimes it's real. But not here. Not with us." 
            <p>He gives a short laugh, one part amusement, one part disbelief. "We're not the type to draw that kind of trouble. My daughter? Bright as hell, full of energy. Not the kind to carry around some hidden sorrow or darkness. And my wife— sharp as ever, even with all she's been through. She's been a little out of it lately, sure—tired, distracted, sometimes stares off like she's not all the way here."  
            <p>He rubs the back of his neck, expression creasing slightly. "I figured it's just the stress. She's been stuck in bed for so long, and she hates that. Hates being idle. She's a thinker. Her mind's always racing. Probably just cabin fever, y'know?"  
            <p>He leans forward, voice softening. "This place means something to us. We built it with our hands, our time, our lives. If there's a problem, it's something we can fix. A cracked pipe, a bad supplier, maybe a bad run of weeks. But we don't need to go blaming Shades for every dip in sales."  
            <p>He gives you a small, sincere smile. "You're just here doing your job, right? Checkin' on the place, maybe offering advice on how to pick things up. I get it. I appreciate it. Just—" he waves a hand loosely, "—don't get too swept up in all that ‘unseen forces' stuff. We're good folks. Strong folks. We've weathered worse."  
            <p>He pats the counter, then stands and gestures toward a small plate of food he's set aside. "Anyway. That's enough rambling. Grab a bite while it's still warm. You earned it."  
            <p>He turns back toward the griddle, falling into the familiar rhythm of the kitchen again. But for just a breath, as his back is to you, his shoulders dip. Subtle. Quick. Like the thought of something not fixable lingers longer than he's willing to admit.`,
        choices: [
            { text: "continue", nextScene: "kitchen3" }
        ]
    },
    {
        title: "storage_puzzle_fail",
        text: `<p>You return to the kitchen, your arms full of mismatched jars and bags that don't quite match the list. The husband glances up, eyes narrowing as he looks over your haul. The old man doesn't even look at you, still focused on the grill, but the tension in the room is palpable.
            <p>The husband lets out a sigh and shakes his head. "Well, you got a couple things right, but I'm pretty sure you missed the mark on half of it." He picks up one of the jars you've brought back, eyeing it with mild disappointment.
            <p>He gestures toward the other items with a small, apologetic shrug. "Guess the pantry's not as easy to navigate as it looks."
            <p>The husband lets out a small chuckle, though it's more out of habit than humor. "Hey, we all have our off days. The pantry can be a maze sometimes. No harm done." He pats you on the shoulder, though it's more of a formality. "I think we'll have to try again next time. You've got the spirit, though. That counts for something."
            <p>You stand there, embarrassed but not entirely defeated. The task may have been a bust, but the room feels a little warmer now— just a little, even if it's not from success.`,
        choices: [
            { text: "continue", nextScene: "kitchen3" }
        ]
    },
    {
        title: "dish_puzzle_begin",
        text: `<p>You step toward the counter with the pile of dishes and roll up your sleeves. "Alright, guess I'm on dish duty."
            <p>The old man gives a quiet grunt of approval, stepping aside just enough for you to wedge in near the sink. "Good. Let's see if you're more than just talk."
            <p>The dishes are no joke— mugs caked with coffee stains, pans with hardened bits of breakfast, plates streaked with syrup and grease. The water runs hot, steam rising in waves as you get to work.
            `,
        choices: [
            { text: "start dishes", nextScene: "dish_puzzle"}
        ]
    },
    {
        title: "dish_puzzle",
        text: ``, // dish puzzle here 
        choices: []
    },
    {
        title: "dish_puzzle_success",
        text: `<p>The final dish clinks into the drying rack, still steaming from the rinse. You wipe your hands on a nearby towel, the repetitive motion having settled into something almost meditative. When you glance up, the old man is still at the grill, his back turned, focused on the food sizzling in front of him. But then, without turning, he speaks.
        <p>"Done already?" he mutters, glancing over his shoulder.
        <p>There's no smile on his face— there rarely is— but something in his expression loosens. A flicker of quiet approval, maybe. He grunts and nods, flipping a set of eggs with practiced ease.
        <p>"Didn't expect you to stick with it," he says. "Most folks, they get a few suds on their hands and lose their nerve. You kept at it."
        <p>He finally turns to face you more fully, setting the spatula down. His eyes are sharp but tired, carrying the weight of years spent in the heat of this kitchen.
        <p>"Not bad," he says. "You got a decent rhythm. Could almost pass for one of us... almost."
        <p>There's a pause. His gaze drifts toward the hallway that leads to the back rooms of the diner— toward the silence that lingers just beyond the clang and clatter of the kitchen.
        <p>"Figure you've earned yourself a break," he says after a moment. "And maybe a little truth. What do you want to know?"`,
        altText: `<p>"You got another question for me?`,
        choices: [
            { text: "Ask him about the restuarant", nextScene: "father_info" },
            { text: "Ask him about Shades", nextScene: "father_info2", conditionalA: "father_info" },
            { text: "No", nextScene: "kitchen3" }
        ]
    },
    {
        title: "father_info",
        text: `<p>The old man's hands are steady as he flips a few more eggs on the grill, the sizzling sound filling the space between you. He doesn't seem to mind the question at first, but as you speak, his movements slow just a little. There's a shift in the air, a subtle tension that wasn't there before.  
            <p>"Fifteen years, yeah," he mutters, his voice rough, like gravel being scraped together. "Long time for a place like this to stick around, and it's been good to us. We had a good run, no doubt about it. For the first decade, this place was always packed. Customers coming in, folks talking about the food like it was the best thing they ever tasted. It felt... easy, you know? Like we could keep it going forever."  
            <p>He pauses, flipping the eggs with practiced precision but with a far-off look in his eyes. His hands don't shake, but there's something in his posture that tells you this conversation is pulling him into a place he doesn't want to visit.  
            <p>"But then... things started changing," he continues, his voice quieter now. "The past few years, it's been harder and harder to get people through the door. It's not like the food's any different. Same recipes, same work ethic. But people stopped coming. Not all at once, just... gradually. You start noticing fewer faces, fewer regulars. Then, before you know it, the whole thing starts slipping."  
            <p>He grumbles something under his breath, then gives you a look— sharp and knowing, just for a second— before turning back to the grill, his focus snapping back to the food.  
            <p>"Funny thing, though," he adds, like it's just a passing thought. "If you were really just some restaurant inspector, you'd already have the numbers. Health code. Foot traffic. Revenue dips. All public, more or less. So either you're doing your job a little too slow..."  
            <p>He lifts the corner of his mouth in a dry, humorless smile. "...or you're here for something that doesn't show up on paper."  
            <p>The spatula clinks lightly against the pan. He doesn't look at you again, but the silence he leaves is pointed. Hanging. A silent invitation— or a challenge.  
            <p>"Anyway," he says gruffly, breaking the moment, "I'm sure you didn't come all the way out here for a lecture. You already know something's off. You wouldn't be here if you didn't."
            `,
        choices: [
            { text: "continue", nextScene: "dish_puzzle_success" }
        ]
    },
    {
        title: "father_info2",
        text: `<p>The old man doesn't answer right away. The word just sort of hangs there, like smoke curling in the space between you.  
            <p>He stares down at the eggs sizzling on the griddle, watching them bubble at the edges, the moment dragging just long enough for you to wonder if he heard you.  
            <p>Then, without looking up, he speaks.  
            <p>"Careful where you say that word," he mutters, low and quiet. "My son-in-law's got ears like a damn fox when he wants to. And a thicker skull than one, too."  
            <p>He finally turns, using the spatula to slide the eggs off the heat, his movements slow, deliberate. There's a heaviness to his shoulders now.  
            <p>"You askin' me if I believe in Shades?" He scoffs softly, not quite amused. "I've seen ‘em. Back when I was young. Before this place. Before I had kids. Back when the world cracked open and half the town didn't make it out."  
            <p>He wipes his hands on a nearby rag, then leans a hip against the counter. The noise of the kitchen seems to fall away for a moment, like the room itself is holding its breath.  
            <p>"It starts small. Always does. People change. Not all at once— subtle things. Speech. Routine. The way they carry themselves. And then... it spreads. Slow. Quiet. Till it's everywhere. Till it's too late."  
            <p>His eyes find yours. There's no hesitation in them. Only memory. And the kind of fear that comes from surviving something you weren't supposed to.  
            <p>"I won't pretend to know what your job really is," he says, his tone thick with irony, "but if you're askin' about Shades, you're not here to inspect the fryers. And I'm not fool enough to stop you."  
            <p>He glances toward the hallway— the one that leads to the stairs. To his home. To her.  
            <p>"My daughter's strong. Stronger than she knows. Too strong to get wrapped up in something like this, if you ask me. She's grounded. Hardheaded. Hell, I'd stake this whole damn kitchen on her willpower alone."  
            <p>He shifts his weight, lips pressing into a thin line.  
            <p>"But my wife... she ain't been right for a while now. Drifting. Talking in her sleep. Saying things that don't sound like her."  
            <p>His voice drops lower, barely audible over the sound of the fryer behind him.  
            <p>"She was ready to go. Sick, tired... fading. And then one day she wasn't. Just woke up like death changed its mind. But it didn't feel right. Not to me."  
            <p>He looks away again, jaw clenched.  
            <p>"I've got my suspicions. But I'm not the kind of man to accuse without reason. I'll let someone else figure it out. Someone like you."  
            <p>A long pause. He picks the spatula back up, turns to the grill, and stirs the hash. But the conversation's not over.  
            <p>"If there's a Shade in this house," he says, voice low and rough, "you'll need to find it before it spreads. Because I've seen what happens when people look the other way."  
            <p>The hiss of the grill rises up again, and the old man speaks one last time without turning back.  
            <p>"Just... don't let my daughter get caught in the crossfire. She's not the cause. But she'll try to carry the blame, like she carries everything else."`,
        choices: [
            { text: "continue", nextScene: "dish_puzzle_success" }
        ]
    },
    {
        title: "upstairs",
        text: `<p>As you ascend the narrow staircase tucked behind the kitchen, the noise of the diner fades into a low, distant hum.  
            <p>The steps creak beneath your feet— old wood, well-worn, each groan of the boards adding to the hush that settles over you the higher you go.  
            <p>The air grows cooler, still, touched with the faint scent of aged furniture and something more subtle— like dried herbs, or old paper left in a sunlit room too long.  
            <p>At the top of the stairs, the second floor opens into a modest living space.  
            <p>The ceilings are low, and the walls are painted in soft, muted tones— faded yellows and browns that might've once been cheerful but now feel dimmed by time.  
            <p>A narrow window at the end of the hallway lets in a sliver of afternoon light, casting long bars of gold across the floor.  
            <p>Immediately ahead is a small but comfortable living room.  
            <p>A worn sofa sits under the window, flanked by mismatched end tables cluttered with framed family photos, old mugs, and a stack of local newspapers.  
            <p>There's a crocheted blanket folded neatly on one armrest, and a pair of knitting needles sit abandoned in a ceramic bowl.  
            <p>A muted television is mounted in the corner, the screen dark.  
            <p>Dust gathers faintly on the surface of a shelf lined with porcelain figurines— little dancers, birds— each carefully arranged.  
            <p>To your left, just a few feet from the top of the stairs, is a closed bedroom door.  
            <p>The wood is heavy and stained darker than the others, its brass knob slightly tarnished.  
            <p>A faint line of light leaks out from underneath, and if you listen carefully, you might hear the soft whir of a fan or an air purifier humming behind it.  
            <p>This is her room— the grandmother's.  
            <p>Everything up here feels still, preserved.  
            <p>Like time doesn't quite move the same way on the second floor.  
            <p>It's lived-in, but distant, as if the space itself is holding its breath.  
            <p>And though nothing appears out of place, there's an undeniable sense of something lingering just out of sight.  
            <p>A quiet tension woven into the very air.  
            <p>This is the family's private space.  
            <p>And now, you're in it.  
            <p>Where do you go first?`,
        altText: `<p>Where will you go now?`,
        choices: [
            { text: "bedroom", nextScene: "bedroom_grandma" },
            { text: "living room", nextScene: "living_room" },
            { text: "head back downstairs", nextScene: "kitchen3"  }
        ]
    },
    {
        title: "bedroom_grandma",
        text: `<p>As you step closer to the grandmother's bed, the air around you thickens, colder than it should be, a strange, unsettling chill that settles in your bones.
            <p>Her gaze sharpens, not quite as distant as it seemed before, but with an odd clarity, a knowing look that cuts through the haze of her frailty.
            <p>"You're not the nurse," she says, almost absent-minded, her eyes flickering toward you. There's no surprise in her voice, just a quiet acceptance of your presence. "I've been expecting someone... like you."
            <p>Her fingers twitch slightly, the skin of her hands pale and delicate, as though they haven't held life for long. She doesn't sit up, doesn't even try, but there's a certain weight to her words as if she's holding back more than her body will allow her to express.
            <p>"I was ready to die," she says softly, her voice rasping. Her eyes flicker toward the shadows in the room, the corners where the light never seems to reach. "I could feel it. My body shutting down... I had one foot in the grave, and I knew it. I was ready. But then, something... changed."
            <p>She pauses, her breath shallow but steady, eyes narrowing as if she's trying to force herself to understand something she doesn't quite want to face. There's an edge to her tone now, a thread of unease weaving through the words.
            <p>"I woke up. Just like that. No warning, no reason. The doctors said it was a miracle... but it didn't feel like one. Not really. I should've gone. I felt the pull of it, but instead, I... stayed." She shakes her head, as if the thought itself is a puzzle she's still trying to solve, a mystery that eludes her every time she reaches for it.
            <p>Her eyes drift toward the shadows again, as though drawn to something you can't quite see. "It wasn't natural," she murmurs, almost to herself, her voice soft and filled with something too heavy to define. "I remember the feeling— the pull of death, and then... this unnatural... force. It's been with me ever since. Alive, but still dying. Something's keeping me here, but I don't know what. I don't know why."
            <p>She stops, her voice growing faint, and for a moment, she looks lost in thought, staring at the wall, her fingers moving slowly as though they can still feel the weight of what happened. "Maybe it was a Shade... but I can't say for sure. There's a darkness here, a... something that makes me feel like I'm not really alive anymore. Not the way I used to be. But if it is... if it's feeding off of me, I can't say why."
            <p>Her lips pressed together, a quiet frustration lingering in the way her eyes search the room, the walls, the corners as though expecting an answer that's always just out of reach. "I've been surviving, but at what cost?" She shakes her head, a soft sigh slipping out, as if too tired to continue the thought.
            <p>"The others... They think I'm just ill. But I know better. I was ready to go, and yet, here I am." She turns back to you, her gaze direct now, and for a moment, her frailty seems to disappear. She's sharp, aware, and everything about her presence feels too real, too tangible. "Maybe you'll be the one to find the answer. Maybe you'll see it for what it is. But be careful... whatever it is, it's still here."
            <p>Her voice drops to a whisper, as if saying the words aloud makes them too real. "And if it's here, it's not just feeding on me anymore. It's feeding on something... else."
            <p>The air grows colder still, the shadows lengthening in the room as if in response to her words. There's an unmistakable feeling that something watches from the corner, lingering in the darkness, just beyond the edge of your sight. A quiet, almost imperceptible weight in the room— something that doesn't belong. Something that shouldn't be here.
            <p>She closes her eyes, letting the silence fall between you, as if the weight of the truth she's shared is more than enough to fill the space. But even in the stillness, the feeling of being watched lingers. The grandmother's breathing slows, and for a moment, it seems like she's drifting away, but there's still a glint of awareness in her eyes— one last thread of clarity before it fades again.
            <p>"You need to find it," she whispers, her voice barely a breath. "Before it finds us all."`,
        altText: `<p>The grandmother is resting peacefully, the rise and fall of her breath is apparent.`,
        choices: [
            { text: "show her the bent spoon", nextScene: "grandma_info_spoon", conditionalA: "takeSpoon", limited: true },
            { text: "leave her", nextScene: "upstairs" }
        ]
    },
    {
        title: "grandma_info_spoon", // SECRET PATH
        text: `<p>Without a word, you reach into your pocket and pull out the bent silver spoon, holding it up so the afternoon light glints off its warped surface. Her gaze fixes on it immediately.  
            <p>For a long, tense moment, she doesn't speak. Then her lips part, and she begins to murmur— not in confusion, not in the disjointed forgetfulness of age, but in something else entirely. It's rhythmic. Almost rehearsed. Like a message wrapped in static.  
            <p>"Oh," she breathes, her voice thin, threading through layers of memory or something deeper. "You brought it back. I buried that one in the pantry... or was it the floorboards? It's hard to remember, when time's not behaving."  
            <p>Her eyes flick toward you—not your character, but *you*. The shift is subtle, but unmistakable.  
            <p>"You're not just here for them, are you?" she asks, voice soft but direct. "No, no. You've been watching, haven't you? Reading between things. Peeling back what they don't see."  
            <p>The spoon trembles in your hand. You didn't move it.  
            <p>Her mouth curves into a strange, almost knowing smile. "It hides in reflections. In repetition. Like this spoon— how can it be in two places at once, hmm? Unless something's wrong. Unless something's folding."  
            <p>Her gaze dulls, then sharpens again, flickering like a bad signal. Her pupils dilate until they nearly blot out her irises.  
            <p>"It found me in a breath I didn't mean to take," she murmurs. "Wrapped around the space I left behind when I stopped praying. It's clever, this one. It doesn't scratch or scream. It settles. It waits."  
            <p>Then her voice turns, just slightly, and it's as if she's speaking across a boundary line— straight through to wherever <i>you</i> are.  
            <p>"You know it, don't you?" she says. "You. Out there. You're not just watching— no, not just playing along. You're seeing it. The shape it leaves when it passes."  
            <p>A breathless laugh escapes her. Dry. Small. "I was ready, you know. For the end. For the stillness. I'd made peace. The doctors didn't say it, but I knew. I felt it coming for weeks— this softness, this letting go. And then..."  
            <p>Her voice breaks. She clutches the blanket, knuckles white.  
            <p>"Then I woke up. Like nothing happened. Like death missed its cue. But it wasn't mercy," she whispers. "It was a hook. A tether. I wasn't let go. I was kept."  
            <p>Her gaze drops to the spoon again, and her voice lowers to a whisper, barely audible beneath the hum of the house.  
            <p>"I should've died," she says. "But something else did instead. And now I'm... occupied."  
            <p>The silence that follows stretches, strange and cold. Outside, the diner still hums— warm, familiar, alive. Like nothing here has ever bent. Or broken. Or stayed too long.`,
        choices: [
            { text: "leave her", nextScene: "upstairs" }
        ]
    },
    {
        title: "living_room",
        text: `<p>The living room carries a lived-in stillness, like a space paused mid-thought. Afternoon light filters through gauzy curtains, casting pale stripes across the worn rug and the scuffed edges of a coffee table that's seen years of feet, plates, and family arguments.
            <p>The couch sinks in at the center, its cushions softened by habit and time. A folded quilt rests on the arm, neatly placed but untouched for a while. On the far wall, family photos are arranged with careful symmetry— smiling faces locked in better days, their colors faded but not forgotten.
            <p>There's a faint scent of lemon polish in the air, like someone tried to make the room feel fresher than it is. A TV sits dark in the corner, dust lining the screen. Remote on the armrest, like it's waiting for someone to come back and finish watching something they didn't.
            <p>On the floor, partially hidden beneath the recliner, something catches the light— just barely. A glint. Silver or glass, it's hard to tell. Whatever it is, it's out of place. Just enough to make your eye stop on it.
            <p>The rest of the room is quiet. Still.`,
        altText: `<p>The living room carries a lived-in stillness, like a space paused mid-thought. Afternoon light filters through gauzy curtains, casting pale stripes across the worn rug and the scuffed edges of a coffee table that's seen years of feet, plates, and family arguments.
            <p>The couch sinks in at the center, its cushions softened by habit and time. A folded quilt rests on the arm, neatly placed but untouched for a while. On the far wall, family photos are arranged with careful symmetry— smiling faces locked in better days, their colors faded but not forgotten.
            <p>There's a faint scent of lemon polish in the air, like someone tried to make the room feel fresher than it is. A TV sits dark in the corner, dust lining the screen. Remote on the armrest, like it's waiting for someone to come back and finish watching something they didn't.
            <p>The rest of the room is quiet. Still.`,
        choices: [
            { text: "inspect", nextScene: "inspect_lr", limited: true },
            { text: "change locations", nextScene: "upstairs" }
        ]
    },
    {
        title: "inspect_lr",
        text: `<p>You decide to investigate, stepping closer to the recliner. As you crouch down, your fingers brush against the edge of what looked like just a glint of light. But as you reveal it fully, you see it for what it is: a bent silver spoon.  
            <p>The metal is warped, twisted unnaturally, as though someone had tried to bend it with their bare hands— or perhaps, as though reality itself had warped around it. The handle curls in an odd, spiraling shape, and the bowl of the spoon is almost flattened. It looks like something you'd expect to see in a magician's act, where the laws of physics don't quite hold up.  
            <p>But there's something far stranger about this. You've seen this same spoon before— downstairs in the pantry. It was tucked away with some forgotten corner. At the time, it didn't seem out of place.
            <p>But here? Under the recliner? This doesn't make sense. How did it get from the pantry to this spot, hidden beneath furniture that nobody would bother moving? It feels almost like the spoon shouldn't be in either place— like it doesn't belong in this reality at all.  
            <p>The hairs on the back of your neck stand up, the unease that's been building only deepening.  
            <p>The spoon, warped and out of place, is a small thing. But right now, it feels like it's pulling at something much larger. Something unnatural.`,
        choices: [
            { text: "take the bent spoon", nextScene: "takeSpoon" },
            { text: "leave the bent spoon", nextScene: "living_room" }
        ]
    },
    {
        title: "takeSpoon",
        text: `<p>You decide to take the bent spoon with you.
            <p><i>[Bent Spoon Obtained]</i>`,
        item: {
            itemName: "Bent Spoon",
            battleUse: false,
            puzzleUse: true
        },
        choices: [
            { text: "continue", nextScene: "living_room" }
        ]
    },
    {
        title: "finishInvestigation",
        text: `<p>You decide to finish the investigation and conclude that...`,
        choices: [
            { text: "mother", nextScene: "suspect_mother" },
            { text: "father", nextScene: "suspect_father" },
            { text: "grandfather", nextScene: "suspect_grandfather" },
        ]
    },
    {
        title: "suspect_mother",
        text: `<p>You deduced that it was the mother that caused the Shade due to feelings of...`,
        choices: [
            { text: "emotional grief", nextScene: "incorrect_conclusion" },
            { text: "overwhelming responsibility", nextScene: "correct_conclusion" }
        ]
    },
    {
        title: "suspect_father",
        text: `<p>You deduced that it was the father that caused the Shade due to feelings of...`,
        choices: [
            { text: "self-doubt", nextScene: "incorrect_conclusion" },
            { text: "emotional isolation", nextScene: "incorrect_conclusion" }
        ]
    },
    {
        title: "suspect_grandfather",
        text: `<p>You deduced that it was the grandfather that caused the Shade due to feelings of...`,
        choices: [
            { text: "unresolved fear", nextScene: "incorrect_conclusion" },
            { text: "powerlessness", nextScene: "incorrect_conclusion" }
        ]
    },
    {
        title: "correct_conclusion",
        text: `<p>You find her alone, seated at the corner booth near the window, her face partially obscured by the flickering shadows from the blinds. Her hands are wrapped tightly around a cold mug of coffee, but she hasn't touched it. The exhaustion on her face is unmistakable, a quiet surrender to the weight of everything she's carrying.
            <p>She doesn't look up when you sit across from her. The silence between you lingers, thick with the unspoken words of the past few hours.
            <p>"Done asking questions?" she murmurs, her voice barely above a whisper.
            <p>You place the bent spoon between you. The silver gleams in the soft light, a small, almost insignificant thing— yet it holds the truth of everything. You give it a moment, letting her eyes fall to it.
            <p>"I know what's causing it," you say softly. "The shade. It's tied to you, to everything you've been carrying. It feeds off the strain, the stress. But I can get rid of it. Tonight. No charge."
            <p>Her eyes narrow. "I'm not asking for charity. If you think for one second I'm going to let you do this for free, you're wrong. I'll pay you what I can. I just... I can't right now."
            <p>You shake your head. "You don't need to pay me. Just a meal. Something from the late-night menu. That's all."
            <p>She freezes, disbelief crossing her face before a bitter laugh escapes her lips. "A meal. Seriously? Is that your fee, then?"
            <p>You hold her gaze, calm and steady. "No charge. Just food. I don't want your money."
            <p>Her hand trembles slightly as it tightens around the mug. She looks at you for a long moment, as if searching for some hidden motive, some trick behind your words. But there's none. Just the quiet weight of your offer.
            <p>Finally, she exhales. "Fine. One meal. But dessert's on the house, too."
            <p>You nod. The deal's made, but the air between you is thick with unspoken things.
            <p>"Tell me, then," she says, voice barely a murmur, "are you going to do this here? Tonight? After all this?"
            <p>You stand, your voice calm and sure. "Yes. After midnight. I'll need the restaurant to myself. I'll need you to tell your family whatever you think they should know. Keep them out of the way. No questions. No interruptions."
            <p>She glances down at the spoon, her eyes losing focus for a moment. Her fingers twitch, as if she might reach for it, but she doesn't. It's clear— she's on the edge of something, like she might break or bend under the weight of it all.
            <p>You take a step toward the door, then stop. There's one last thing you need to say.
            <p>"You should be thankful to your daughter," you add, your voice softer now, more heartfelt. "She brought me here. She's the one who asked for help. She knew something was wrong, and she didn't let it go. I think... in her own way, she's been trying to save you all along."
            <p>Her breath catches in her throat, and for a moment, she's still. The tears she's holding back shimmer in her eyes, but she doesn't let them fall. Instead, she glances away, blinking rapidly.
            <p>"I don't... I don't know what I'd do without her," she whispers, the words barely there. "I didn't want her to worry. But she sees things... I never thought she would."
            <p>You give her a small nod, your voice steady as you add, "She's stronger than you think."
            <p>You leave her to her thoughts as you step into the hallway, but before you close the door, you hear her soft, almost inaudible sigh— a quiet mix of relief and sorrow, the weight of years pressing down, finally, on the edge of something real.
            <p><b>[After Midnight]</b>
            <p>The clock ticks past midnight, and the restaurant is wrapped in a tense silence. The hum of the kitchen is absent, the usual warmth of the diner dissipated into an uneasy coldness. The air itself seems to be holding its breath, caught in the space between what's normal and what's about to unfold.
            <p>It's not until you step further down the hall that you feel it— a presence, thick and oppressive, crawling through the air like a weight pressing down on your lungs. It's not a shadow you can see clearly, but a feeling that fills the room.
            <p>You see it then, slowly taking shape from the corner of your vision. A distortion, a wavering form that seems to struggle to stay intact. It's as if the very fabric of reality around it is bending, stretched thin under the pressure of too many demands. The shade is not just a figure— it's the embodiment of stress, of carrying too much for too long. A pressure so immense it becomes physical, leaking out into the space around it, tainting the air, warping everything it touches.
            <p>You recognize it now. The shade isn't just drawn from a curse or a ghostly presence— it's the pure, concentrated embodiment of the mother's struggles, her endless attempts to keep everything together, all while being stretched thin. The constant battle to maintain the family, the restaurant, the expectations, all of it.
            <p>And then, as quickly as it appeared, the shade shifts again, its form warping and contorting, as if it's trying to escape from the very pressure it embodies. It lingers for just a moment more before fading back into the space, leaving only a lingering, suffocating cold in its wake.`,
        choices: [
            { text: "exterminate shade", nextScene: "fight_scene" }
        ]
    },
    {
        title: "incorrect_conclusion",
        text: ``, // DECIDE LATER; how do i want to transition after the official ending
        choices: []
    },
    {
        title: "fight_scene",
        text: ``,
        choices: []
    }
]

storyDataJob4 = [ // SECRET PATH STORY
    {
        title: "aftermidnight",
        text: `<p>The development team, "CLamJJaM," thanks you for playing "After Midnight"`,
        choices: []
    },
    {
        title: "bad_ending",
        text: `<p>After reflecting on your losses, you concluded that maybe being a Shade Exterminator was never truly your calling.  
            <p>The city still sleeps uneasily under a blanket of dread, shadows dancing just out of reach. The people you tried to protect... some are gone, others broken. The weight of that failure settles deep in your chest, heavier than any Shade you've faced.  
            <p>Though you were born with the rare gift of "Residue Sight", that uncanny ability to glimpse the lingering trails of malevolent spirits, it seems the gift was wasted. Misused. Or perhaps... misunderstood.  
            <p>You change the shop sign from 'OPEN' to 'CLOSE'. The darkness remains. And this time, no one is chasing it.`,
        choices: [
            { text: "end game", nextScene: "aftermidnight" }
        ]
    },
    {
        title: "good_ending",
        text: `<p>Albeit nervous when you first stepped into the city's shadow-drenched streets, something inside you stirred—a quiet resolve. And in time, it grew into purpose.
            <p>Your gift, "Residue Sight", once a strange and isolating ability, became a beacon in the dark. You learned to navigate the subtle echoes of sorrow and malice that Shades leave behind, tracking them with a precision few could match.
            <p>You found your calling in the gloom. And though the battle against Shades is never truly over, you now face it with clarity, strength, and people who believe in you. The darkness has a name, and it fears yours.`,
        choices: [
            { text: "end game", nextScene: "aftermidnight" }
        ]
    },
    {
        title: "secret_start",
        text: `<p>It's been a couple of years since you moved to Silver City and successfully exterminated Shades. As you opened up shop, a weathered envelope arrives at your door— no return address, sealed with crimson wax pressed into the shape of a crescent moon.  
            <p>Inside is a letter written in hurried strokes. Someone knows who you are. More than that— they know what you can do. The request is simple, yet unsettling: "A Shade has taken root in the abandoned chapel near Hollow Pine. We can't stop it. Please help us." 
            <p>Hollow Pine. You've heard of it. A forgotten outpost, buried deep in the forest, far beyond Silver City's borders. No one goes there anymore.  
            <p>You hesitate. It doesn't feel right. Too remote. Too quiet. But something about the handwriting, the desperation in its curves... it gnaws at you.  
            <p>Against your better judgment, you pack your gear and set out alone. The city lights fade behind you as the road winds into mist and shadow.  
            <p>Whatever's waiting out there— it's not just another Shade.`,
        choices: [
            { text: "begin job", nextScene: "begin" }
        ]
    },
    {
        title: "begin",
        text: `<p>The train pulls out of Silver City, the skyline shrinking into a jagged silhouette behind soot-streaked windows. Neon signs flicker and fade, replaced by the endless sprawl of gray suburbs, then open fields bathed in cold morning fog.  
            <p>You sit in silence, watching as the city's hum is gradually swallowed by stillness. The tracks curve through forgotten farmland and dense thickets of pine. Cell service dies somewhere past the sixth stop. The air grows thinner, sharper— untouched by smog or static.  
            <p>Each station becomes smaller, quieter. The chatter of passengers thins out until only you remain. At the final stop— an unmarked platform surrounded by overgrown brush— the train hisses to a halt. The doors open, and you step out.  
            <p>No one else disembarks. No one greets you. The train lingers just long enough to make you second-guess, then groans and vanishes into the trees, leaving you alone in the silence.  
            <p>A narrow dirt path winds into the woods ahead, barely visible between the roots and moss. You can see the chapel building in the distance.`,
        choices: [
            { text: "approach chapel", nextScene: "approach_chapel" }
        ]
    },
    {
        title: "approach_chapel",
        text: `<p>You entered the chapel.  
            <p>Inside, it's silent. Deathly so. Benches line the nave in perfect order. Candles— unlit— stand tall in rusted holders. But the strangest part isn't the stillness. It's the cleanliness. Not a speck of dust. Not a single cobweb. As if someone— or something— has been keeping it ready.  
            <p>You step forward—  
            <p>— and a low static crackles through hidden speakers.  
            <p><em>"Oh, look who finally decided to show up."</em>  
            <p>The voice is calm, but drenched in venom. It echoes through the chapel, impossible to locate. Genderless. Disembodied.  
            <p><em>"You've been quite the thorn in our side, you know. Always running around, breaking things. Our things."</em>  
            <p>A brief pause. Then, colder: <em>"Do you even know what we're building? No, of course not. All you see are monsters. That's the problem with exterminators— you're too afraid to see potential."</em>  
            <p>The air feels heavier now. The temperature drops.  
            <p><em>"This chapel... this 'shade' you came for? It's not a mistake. It's an invitation."</em>`,
        choices: [
            { text: "\"...\"", nextScene: "inside_chapel" }
        ]
    },
    {
        title: "inside_chapel",
        text: `<p>You stay silent.  
            <p>The chapel groans softly as you step deeper inside, boots echoing against the stone floor. There's no altar, just a wide open space where something used to be. Scratches mar the ground— circles, runes, residue trails— none of it natural. All of it deliberate.  
            <p>Your Sight flickers— just for a second— and you catch it: a shadow at the far end of the hall, barely visible, standing impossibly still. Watching.  
            <p>The voice returns, smug now. <em>"You do not need to know who we are. Not yet. But you will. Soon, everyone will."</em>  
            <p><em>"Anyway,"</em> it hums, <em>"why don't you meet our newest creation? Say hello to Project Echo."</em>  
            <p>The figure twitches, then moves. A ripple of black ink slithers across the floor. And suddenly—  
            <p>—it's in front of you.  
            <p>It looks like you.  
            <p>Your height. Your stance. Even your equipment, down to the scratch on your lens. But its eyes are hollow voids, and its skin glistens like wet paint. A cruel, perfect mimic.  
            <p>The voice crackles one final time: <em>"So now tell us— when the abyss stares at you, do you stare back?"</em>`,
        choices: [
            { text: "exterminate shade", nextScene: "fight_scene" }
        ]
    },
    {
        title: "fight_scene",
        text: ``,
        choices: []
    },
    {
        title: "fight_scene_lost",
        text: `<p>You don't remember falling.  
            <p>One moment, you were facing Project Echo, the ink-cloaked version of yourself—fighting, resisting, breaking. And then... nothing.  
            <p>When your eyes open, you're in your bedroom.  
            <p>Same sheets. Same faint hum of the city outside your window. Your gear still strapped to your body, untouched, unstained. No injuries. Not even a bruise.  
            <p>You sit there for a long time, unmoving. Listening. Waiting for something to feel real.  
            <p>And then, you see it.  
            <p>On your bedside table: a letter.  
            <p>The envelope is sealed with crimson wax, crescent moon imprint and all. You already know what it says before you touch it. Same handwriting. Same desperate request. Same location: Hollow Pine Chapel.  
            <p>Exactly the same.  
            <p>Outside your window, the world goes on like nothing happened. But something has changed. You can feel it. Like ink clinging to the edges of your thoughts, refusing to wash away.`,
        choices: [
            { text: "end game", nextScene: "aftermidnight" }
        ]
    },
    {
        title: "fight_scene_won",
        text: `<p>Your final strike lands true.  
            <p>Project Echo stumbles backward, their form flickering— unstable, ink bleeding into the cracks of the chapel floor. They clutch at the wound, eyes wide, more in disbelief than pain.  
            <p><em>"Why...?"</em> they whisper. Then louder, fractured—<em>"Why... why... why?"</em>  
            <p>They sound like you. Not just in voice, but in something deeper— in fear.  
            <p>The intercom clicks on, the voice from before now dull, almost bored: <em>"A shame."</em>  
            <p>A low hiss, then static. The signal dies.  
            <p>Echo looks up at you, their voice trembling: <em>"Am I no longer needed?"</em>  
            <p>And then, like a shadow at sunset, they begin to dissolve. Ink peels away in ribbons, unraveling their form until something remains.
            <p>At the spot where they fell, surrounded by smeared ink, sits a small metallic object— roughly the size of a fist. Its surface is slick, like oil under moonlight. As you approach, you see letters carved into it:  
            <p><strong>"FC"</strong> 
            <p>The room feels colder now— not from any Shade, but from something more personal. You heard it in their voice. You recognized it.  
            <p>Because you've thought it before, haven't you?  
            <p><em>“Am I still needed?”</em>`,
        choices: [
            { text: "end game", nextScene: "aftermidnight" }
        ]
    }
]