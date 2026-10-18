CASES.push(
{
  id: "lantern", number: "CF-1102", title: "Last Set at the Blue Lantern", kind: "Murder", difficulty: "Standard",
  tagline: "A star trumpeter dies in a locked dressing room between sets.",
  place: "The Blue Lantern Club, Port Mercy", when: "Thursday 14 June 1956, 23:20",
  brief: [
    "Rollo “King” Ashby, the finest trumpeter in Port Mercy, played the first set at the Blue Lantern to a packed room. At the 22:40 break he went to his dressing room. When he didn’t come out for the second set, the band broke the door down. Ashby was dead in his chair, struck on the back of the head.",
    "The dressing room door was locked from the inside with the key still in it. The only window opens onto a narrow back alley."
  ],
  victim: { name: "Rollo “King” Ashby", age: 44, role: "Trumpeter and bandleader", found: "Slumped in his dressing-room chair, door locked from inside", cause: "A single heavy blow to the back of the head." },
  facts: [
    "The break ran from 22:40 to 23:15.",
    "Ashby had told the band that afternoon he was leaving for a record deal in New York.",
    "The dressing-room window opens onto the back alley behind the club.",
    "No weapon was found in the dressing room."
  ],
  suspects: [
    { id: "vera", name: "Vera Lane", age: 38, role: "Singer, Ashby’s ex-wife", background: "Sang with Ashby’s band for ten years, before and after the divorce.", motive: "Ashby had stopped paying her alimony.", relation: "Divorced three years ago. Still worked together every night.", alibi: "Says she was at the bar for the whole break." },
    { id: "sal", name: "Sal Moretti", age: 52, role: "Club owner", background: "Built the Blue Lantern around Ashby’s name.", motive: "Ashby leaving would break a five-year contract and empty the club.", relation: "Employer. Friendly, until the New York news.", alibi: "Says he was in his office counting the takings." },
    { id: "eddie", name: "Eddie Price", age: 29, role: "Pianist", background: "Ashby’s protégé. Plays piano and writes arrangements for the band. Always in two-tone shoes.", motive: "None known.", relation: "Ashby discovered him playing in a church hall at nineteen.", alibi: "Says he played a solo piano interlude through the whole break." },
    { id: "june", name: "June Tatum", age: 33, role: "Cigarette girl", background: "Works the tables with a tray of cigarettes and matches.", motive: "Ashby owed her $200.", relation: "Occasional card partner.", alibi: "Says she was working the floor all night." }
  ],
  clues: {
    window_open: { title: "The dressing-room window was unlatched", text: "The window latch is open and there are fresh scuff marks on the sill, as if someone climbed over it." },
    alley_prints: { title: "Two-tone shoe prints in the alley", text: "Under the window, in the mud, are prints from a size-9 two-tone spectator shoe.", key: true },
    metronome_missing: { title: "The piano metronome is missing", text: "A heavy brass metronome usually sits on the stage piano. It’s gone." },
    metronome_found: { title: "The metronome, bloodied, in the alley bin", text: "The brass metronome is in the bin under the window, with blood and hair on one corner. It’s engraved “E.P.”", key: true },
    telegram: { title: "Telegram: “Bring the songs”", text: "A telegram from a New York label: “Contract ready. Bring Harbour Blues and the new songs. They’re the deal.”", key: true },
    song_credits: { title: "Eddie wrote the songs Ashby signed", text: "Sheet music in the piano bench: “Harbour Blues, words and music by E. Price”. The name is crossed out and “R. Ashby” written above.", key: true },
    interlude_short: { title: "Eddie stopped playing at 22:55", text: "Vera says Eddie played for ten minutes, then the bartender put the jukebox on from 22:55 until 23:10.", key: true },
    shoes_wet: { title: "Eddie’s shoes were muddy in the second set", text: "June noticed Eddie’s two-tone shoes were wet and muddy when he sat back down at the piano.", key: true },
    vera_alimony: { title: "Ashby owed Vera $3,000", text: "Ashby hadn’t paid alimony in a year and had cut Vera out of the New York deal." },
    sal_contract: { title: "Sal’s contract pays out if Ashby leaves", text: "If Ashby broke his contract he owed Sal $10,000. Sal loses money if Ashby is dead." },
    sal_office: { title: "Sal never left his office", text: "June passed Sal’s open office door every few minutes during the break. He was always at his desk." },
    june_debt: { title: "Ashby owed June $200", text: "A card-game debt. June says she’d given up on getting it back." }
  },
  locations: [
    { id: "dressing", name: "Ashby’s Dressing Room", desc: "A narrow room with a mirror ringed by bulbs, a chair and a trumpet case.", spots: [
      { id: "chair", label: "The chair", text: "His trumpet case lies open beside it. Nothing is broken and nothing is missing." },
      { id: "window", label: "The window", text: "The window is unlatched. There are scuff marks on the sill.", clue: "window_open" },
      { id: "mirror", label: "Telegram tucked in the mirror", text: "A telegram from New York, folded and read many times.", clue: "telegram" }
    ]},
    { id: "stage", name: "The Stage", desc: "A small bandstand under blue lights. The piano sits to one side.", spots: [
      { id: "piano", label: "The piano top", text: "A pale square in the dust shows where something heavy usually sits.", clue: "metronome_missing" },
      { id: "bench", label: "Piano bench", text: "The bench lid lifts to show stacks of sheet music.", clue: "song_credits" },
      { id: "jukebox", label: "Jukebox", text: "A brand-new Wurlitzer by the bar. Its coin box is full." }
    ]},
    { id: "alley", name: "Back Alley", desc: "Wet cobbles, a drainpipe and a row of bins below the dressing-room window.", spots: [
      { id: "mud", label: "Mud below the window", text: "Clear footprints in the soft mud.", clue: "alley_prints" },
      { id: "bin", label: "The bins", text: "You search the bins for the missing metronome.", clue: "metronome_found", requires: "metronome_missing" }
    ]},
    { id: "office", name: "Sal’s Office", desc: "A desk, a safe and a view of the club floor through the open door.", spots: [
      { id: "desk", label: "Desk drawer", text: "Ashby’s contract with the club, with a clause underlined in red.", clue: "sal_contract" },
      { id: "ledger", label: "Takings ledger", text: "Tonight’s takings counted to the cent. Sal writes a neat hand." }
    ]}
  ],
  interviews: {
    vera: [
      { id: "v1", q: "How were things between you and Ashby?", a: "He owed me three thousand dollars. Now he was off to New York without me. I could have killed him. I didn’t.", clue: "vera_alimony" },
      { id: "v2", q: "Where were you during the break?", a: "At the bar with Joe. Eddie played for about ten minutes, then Joe put the jukebox on at five to eleven. It played till ten past.", clue: "interlude_short" }
    ],
    sal: [
      { id: "sa1", q: "Where were you during the break?", a: "In my office counting the take, with the door open. Ask June." },
      { id: "sa2", q: "What happens now King’s gone?", a: "Now? I lose my star. If he’d left I’d have got ten grand. Dead, he’s worth nothing to me.", clue: "sal_contract" },
      { id: "sa3", q: "Who uses the piano metronome?", a: "Only Eddie. He carries that thing everywhere. Had his initials put on it.", requires: "metronome_missing" }
    ],
    eddie: [
      { id: "e1", q: "Where were you during the break?", a: "At the piano. Solo interlude, the whole thirty-five minutes." },
      { id: "e2", q: "What was Ashby to you?", a: "He made me. Everything I am, I owe King." },
      { id: "e3", q: "Show him the sheet music", a: "Those are my songs. King put his name on them. He said that’s how the business works. And now he was taking them to New York.", requires: "song_credits" },
      { id: "e4", q: "The jukebox played from 22:55", a: "All right, I stepped out for some air. In the alley. I never went near his window.", requires: "interlude_short" },
      { id: "e5", q: "Show him the bloodied metronome", a: "(Eddie looks at his hands for a long time.) He was going to take everything I ever wrote.", requires: "metronome_found" }
    ],
    june: [
      { id: "j1", q: "Where were you during the break?", a: "Selling cigarettes. I passed Sal’s office door every few minutes. He never got up from that desk.", clue: "sal_office" },
      { id: "j2", q: "Did Ashby owe you anything?", a: "Two hundred bucks from poker. I’d written it off.", clue: "june_debt" },
      { id: "j3", q: "Did you notice anything odd in the second set?", a: "Eddie’s shoes. His good two-tones were soaked and muddy. It wasn’t raining in here.", clue: "shoes_wet" }
    ]
  },
  evidence: [
    { id: "trumpet", name: "Ashby’s trumpet", kind: "Physical", desc: "A silver Bach Stradivarius trumpet.", detail: "Polished, valves oiled. Ready for the second set he never played." },
    { id: "telegram", name: "New York telegram", kind: "Document", requires: "telegram", desc: "Western Union, received that afternoon.", detail: "“CONTRACT READY STOP BRING HARBOUR BLUES AND NEW SONGS STOP THEY ARE THE DEAL STOP”" },
    { id: "sheet", name: "Harbour Blues manuscript", kind: "Document", requires: "song_credits", desc: "Handwritten sheet music.", detail: "Words and music by E. Price. The name is crossed out in different ink and “R. Ashby” written above." },
    { id: "cast", name: "Plaster cast of shoe print", kind: "Physical", requires: "alley_prints", desc: "Taken from the alley mud.", detail: "Size 9. Two-tone spectator sole with a worn left heel." },
    { id: "metronome", name: "Brass metronome", kind: "Physical", requires: "metronome_found", desc: "Recovered from the alley bin.", detail: "1.4 kg brass pyramid. Blood and hair on one corner. Engraved “E.P.”" },
    { id: "contract", name: "Ashby’s club contract", kind: "Document", requires: "sal_contract", desc: "Five-year exclusive with the Blue Lantern.", detail: "Early exit: Ashby owes the club $10,000. The clause is void on death." }
  ],
  timeline: [
    { t: "22:40", text: "First set ends. Ashby goes to his dressing room.", src: "Band" },
    { t: "22:40", text: "Eddie says he played a solo interlude through the whole break.", src: "Eddie’s statement", claim: true, key: true },
    { t: "22:45", text: "Sal is seen at his desk through the open office door.", src: "June", requires: "sal_office" },
    { t: "22:55", text: "Eddie stops playing. The jukebox starts.", src: "Vera", requires: "interlude_short", key: true },
    { t: "23:10", text: "Eddie is back at the piano in muddy shoes.", src: "June", requires: "shoes_wet" },
    { t: "23:15", text: "The second set is due. Ashby doesn’t come out.", src: "Band" },
    { t: "23:20", text: "The band forces the door and finds Ashby dead.", src: "Band" }
  ],
  hints: [
    "The door was locked from the inside. How else could someone reach Ashby?",
    "Something heavy belongs on the stage and isn’t there. Follow the window down into the alley.",
    "Check how long each alibi really lasted. Ask who was at the bar during the interlude."
  ],
  motives: [
    { id: "songs", label: "To stop Ashby taking the stolen songs to New York" },
    { id: "alimony", label: "Unpaid alimony" },
    { id: "contract", label: "To stop the club losing its star" },
    { id: "debt", label: "An unpaid card debt" }
  ],
  solution: {
    culprit: "eddie", motive: "songs",
    keyClues: ["metronome_found", "interlude_short", "song_credits", "shoes_wet", "alley_prints", "telegram"],
    story: [
      "Eddie Price wrote Harbour Blues and the band’s best songs. Ashby put his own name on them, and the New York deal depended on taking them with him. Eddie would have lost everything he had written.",
      "At 22:55 Eddie handed over to the jukebox, slipped into the alley with his metronome and tapped on the dressing-room window. Ashby let him climb in. Eddie struck him from behind, climbed back out and threw the metronome into the bin.",
      "He was back at the piano by 23:10, his two-tone shoes caked with alley mud."
    ],
    proof: [
      { clue: "metronome_found", text: "The weapon is Eddie’s own metronome, engraved with his initials." },
      { clue: "interlude_short", text: "He stopped playing at 22:55, so his “whole break” alibi is false." },
      { clue: "alley_prints", text: "Two-tone size-9 prints lead to the dressing-room window." },
      { clue: "shoes_wet", text: "His shoes were muddy when he came back to the piano." },
      { clue: "song_credits", text: "Ashby had stolen credit for Eddie’s songs." },
      { clue: "telegram", text: "The New York deal depended on those songs." },
      { clue: "sal_office", text: "Sal never left his office, which rules him out." }
    ]
  }
},
{
  id: "bakery", number: "CF-0415", title: "The Sourdough Sabotage", kind: "Sabotage", difficulty: "Easy",
  tagline: "Someone ruined the favourite’s starter on the morning of the village bake-off.",
  place: "Little Denby Village Show", when: "Saturday 19 August, 07:30",
  brief: [
    "Every August the Little Denby show crowns a Best Loaf. Margaret Olufemi has won three years running with bread made from “Big Bertha”, a sourdough starter she has kept alive for twelve years.",
    "At 07:30 Margaret found Bertha ruined: flooded with salt, which kills the yeast. Her loaf won’t rise. The judges want the saboteur found before prizes are given at 16:00."
  ],
  victim: { label: "Target", name: "“Big Bertha”", age: null, role: "Margaret Olufemi’s 12-year-old sourdough starter", found: "Prep tent, shelf 3, lid loose", cause: "Heavily salted. The yeast is dead." },
  facts: [
    "The prep tent was padlocked at 22:00 on Friday and opened again at 06:00.",
    "Each baker has a labelled shelf in the prep tent.",
    "Cars are logged by a steward as they park in the show field.",
    "The tent’s shared salt tub holds fine white table salt."
  ],
  suspects: [
    { id: "derek", name: "Derek Hale", age: 61, role: "Rival baker", background: "Bakes dark rye. Runner-up to Margaret three years in a row.", motive: "Wants to win Best Loaf at last.", relation: "Friendly rivals. Less friendly lately.", alibi: "Says he arrived at the show at 07:15." },
    { id: "poppy", name: "Poppy Marsh", age: 26, role: "Margaret’s apprentice", background: "Works at Margaret’s bakery and helps feed Bertha.", motive: "Margaret won’t let her enter under her own name.", relation: "Employer and mentor.", alibi: "Says she drove Margaret in, arriving at 07:25." },
    { id: "gerald", name: "Gerald Finch", age: 55, role: "Show committee chair", background: "Runs the show and holds a key to the prep tent.", motive: "Margaret mocked his judging in the parish magazine.", relation: "Cool since the magazine letter.", alibi: "Says he was at the tea tent from 06:30." },
    { id: "linda", name: "Linda Crowe", age: 47, role: "Caretaker", background: "Looks after the show field and opens the tents each morning.", motive: "Margaret’s complaint once got her fined.", relation: "Barely speak.", alibi: "Says she opened the tent at 06:00, then went mowing." }
  ],
  clues: {
    salt_type: { title: "It was coarse grey sea salt", text: "The salt in Bertha’s jar is coarse and grey. The tent’s shared tub is fine white table salt, so the saboteur brought their own.", key: true },
    grey_salt: { title: "Grey sea salt on Derek’s shelf", text: "Derek’s shelf holds an open bag of Breton grey sea salt, about a third used.", key: true },
    rye_print: { title: "A rye-flour thumbprint on Bertha’s lid", text: "A dusty thumbprint on the lid, in dark rye flour. Margaret only uses white flour.", key: true },
    car_park: { title: "Derek parked at 06:40", text: "The steward’s clipboard logs Derek’s blue estate car into the field at 06:40, not 07:15.", key: true },
    tent_open: { title: "The tent stood open from 06:00", text: "Linda unlocked the prep tent at 06:00 and left it open for bakers." },
    poppy_with_m: { title: "Poppy was with Margaret from 06:30", text: "Poppy collected Margaret at 06:30 and they arrived together at 07:25." },
    poppy_envy: { title: "Poppy wants her own entry", text: "Poppy resents entering under Margaret’s name, but says she understands." },
    gerald_grudge: { title: "Margaret mocked Gerald in print", text: "Margaret wrote to the parish magazine that Gerald “couldn’t judge a loaf from a brick”." },
    gerald_tea: { title: "Gerald at the tea tent from 06:30", text: "The tea tent’s order book shows Gerald buying tea at 06:30 and toast at 07:10. Volunteers say he never left." },
    linda_mower: { title: "Linda mowing the far field 06:10–07:40", text: "Linda was on the ride-on mower in the far field. Half the village heard it." },
    linda_fine: { title: "Linda was fined after a complaint", text: "Margaret complained about an uncut hedge last year and the council fined Linda." }
  },
  locations: [
    { id: "prep", name: "The Prep Tent", desc: "Trestle tables, labelled shelves and the smell of yeast.", spots: [
      { id: "shelf3", label: "Margaret’s shelf and Bertha’s jar", text: "The lid of the jar is loose. There’s a dusty print on it.", clue: "rye_print" },
      { id: "tub", label: "Shared salt tub", text: "Fine white table salt. Nearly full." },
      { id: "shelf7", label: "Derek’s shelf", text: "Rye flour, caraway seeds and an open paper bag.", clue: "grey_salt" }
    ]},
    { id: "field", name: "Show Field Car Park", desc: "A mown field with a steward’s gazebo at the gate.", spots: [
      { id: "clipboard", label: "Steward’s clipboard", text: "Every arriving car, with plate and time.", clue: "car_park" }
    ]},
    { id: "tea", name: "The Tea Tent", desc: "Urns, bunting and a table of volunteers.", spots: [
      { id: "orders", label: "Order book", text: "Every cup and slice written down, with the time.", clue: "gerald_tea" },
      { id: "cakes", label: "Cake table", text: "Victoria sponges and flapjacks. Nothing to do with bread." }
    ]}
  ],
  interviews: {
    derek: [
      { id: "d1", q: "When did you arrive?", a: "Quarter past seven. Plenty of time to shape my loaves." },
      { id: "d2", q: "What do you bake?", a: "Dark rye. Proper bread. Not that sour white stuff." },
      { id: "d3", q: "The steward logged you at 06:40", a: "All right, I was early. I sat in the car doing the crossword.", requires: "car_park" },
      { id: "d4", q: "Show him the grey sea salt", a: "Everyone uses sea salt… (He stops.) I’d like to speak to the committee.", requires: ["grey_salt", "salt_type"] }
    ],
    poppy: [
      { id: "p1", q: "Where were you this morning?", a: "I picked Margaret up at half six. We came in together at twenty-five past seven.", clue: "poppy_with_m" },
      { id: "p2", q: "How do you get on with Margaret?", a: "She won’t let me enter under my own name. It’s her bakery, so I understand. Mostly.", clue: "poppy_envy" }
    ],
    gerald: [
      { id: "g1", q: "Where were you from 06:00?", a: "Tea tent from half six. Ask any of the volunteers.", clue: "gerald_tea" },
      { id: "g2", q: "How do you get on with Margaret?", a: "She called my judging a joke in the parish magazine. I don’t hold grudges. Much.", clue: "gerald_grudge" }
    ],
    linda: [
      { id: "l1", q: "When did you open the prep tent?", a: "Six on the dot. I tied the flaps back so bakers could come and go.", clue: "tent_open" },
      { id: "l2", q: "Where were you after that?", a: "On the big mower in the far field from ten past six. You’ll have heard it.", clue: "linda_mower" },
      { id: "l3", q: "Any trouble with Margaret?", a: "She got me fined over a hedge. But I’ve better things to do than salt a jar.", clue: "linda_fine" }
    ]
  },
  evidence: [
    { id: "jar", name: "Bertha’s jar", kind: "Physical", desc: "A two-litre Kilner jar of dead starter.", detail: "Coarse grey crystals are still visible in the starter.", clue: "salt_type" },
    { id: "clipboard", name: "Steward’s car log", kind: "Document", requires: "car_park", desc: "The car park arrivals list.", detail: "06:32  Silver hatchback (G. Finch)\n06:40  Blue estate (D. Hale)\n07:25  Red Fiesta (P. Marsh)" },
    { id: "saltbag", name: "Bag of grey sea salt", kind: "Physical", requires: "grey_salt", desc: "From Derek’s shelf.", detail: "Sel gris de Guérande, 500 g bag, about a third gone. Rye flour on the outside." },
    { id: "magazine", name: "Parish magazine letter", kind: "Document", requires: "gerald_grudge", desc: "The July issue.", detail: "“Our show chair couldn’t judge a loaf from a brick.” — M. Olufemi" }
  ],
  timeline: [
    { t: "06:00", text: "Linda opens the prep tent.", src: "Linda", requires: "tent_open" },
    { t: "06:10", text: "Linda starts mowing the far field.", src: "Linda", requires: "linda_mower" },
    { t: "06:30", text: "Gerald buys tea at the tea tent.", src: "Order book", requires: "gerald_tea" },
    { t: "06:30", text: "Poppy collects Margaret from home.", src: "Poppy", requires: "poppy_with_m" },
    { t: "06:40", text: "Derek’s car is logged into the field.", src: "Steward", requires: "car_park", key: true },
    { t: "07:15", text: "Derek says he arrived at the show.", src: "Derek’s statement", claim: true, key: true },
    { t: "07:30", text: "Margaret finds Bertha ruined.", src: "Margaret" }
  ],
  hints: [
    "Look closely at what was put in the jar. Did it come from the tent?",
    "Every car that arrived was written down. Check it against what people told you.",
    "The saboteur left a fingerprint in something only one baker uses."
  ],
  motives: [
    { id: "win", label: "To finally win Best Loaf" },
    { id: "apprentice", label: "To step out of Margaret’s shadow" },
    { id: "grudge", label: "Payback for the magazine letter" },
    { id: "fine", label: "Revenge for the council fine" }
  ],
  solution: {
    culprit: "derek", motive: "win",
    keyClues: ["salt_type", "grey_salt", "rye_print", "car_park"],
    story: [
      "Derek Hale had come second to Margaret three years running. This year he arrived at 06:40, with the prep tent open and empty, and tipped his own grey sea salt into Big Bertha.",
      "He left a thumbprint of rye flour on the lid, then sat in his car until 07:15 so he could say he’d only just arrived."
    ],
    proof: [
      { clue: "salt_type", text: "The salt in the jar wasn’t from the tent. The saboteur brought it." },
      { clue: "grey_salt", text: "The same grey salt was on Derek’s shelf, a third used." },
      { clue: "rye_print", text: "Only Derek bakes with rye flour." },
      { clue: "car_park", text: "He arrived at 06:40, not 07:15, while the tent stood open." },
      { clue: "gerald_tea", text: "Gerald was at the tea tent throughout." },
      { clue: "linda_mower", text: "Linda was on the mower in the far field." }
    ]
  }
},
{
  id: "express", number: "CF-2731", title: "Night Train to Vienna", kind: "Murder", difficulty: "Hard",
  tagline: "An art dealer is found dead in his sleeper compartment, and a smashed watch names the wrong hour.",
  place: "The Danubia Night Express", when: "Tuesday 9 November, 06:45",
  brief: [
    "The Danubia sleeper runs overnight from Paris to Vienna. At 06:45 the attendant brought coffee to compartment 7 and found art dealer Victor Kessel dead on the floor, stabbed once.",
    "Kessel’s wristwatch was smashed, its hands stopped at 02:15. At that hour three of his fellow passengers were playing cards together in the dining car."
  ],
  victim: { name: "Victor Kessel", age: 63, role: "Art dealer", found: "Floor of compartment 7", cause: "A single stab wound. No weapon in the compartment." },
  facts: [
    "Compartments 7 and 8 share a connecting door, bolted from both sides.",
    "Passengers ring for the attendant with a bell. Each ring is logged on a board.",
    "The train stopped at Salzburg from 03:10 to 03:22.",
    "Kessel travelled with a briefcase he never let out of his sight."
  ],
  suspects: [
    { id: "duval", name: "Mathilde Duval", age: 50, role: "Collector, compartment 8", background: "A wealthy Paris collector who bought several paintings from Kessel.", motive: "None known.", relation: "Longtime client.", alibi: "Says she played cards in the dining car until 02:30, then slept." },
    { id: "anton", name: "Anton Weber", age: 48, role: "Sleeping-car attendant", background: "Has worked the Danubia for twenty years. Holds a master key.", motive: "Kessel had complained about him to the railway.", relation: "Served him on many trips.", alibi: "Says he was in his cabin at the end of the carriage, answering bells." },
    { id: "ilse", name: "Ilse Brandauer", age: 35, role: "Kessel’s secretary", background: "Typed his letters and kept his books for six years.", motive: "Kessel was dismissing her in Vienna.", relation: "Employee. Knew all his business.", alibi: "Says she played cards until 02:30, then went to compartment 3." },
    { id: "pavel", name: "Pavel Novak", age: 30, role: "Painter", background: "A young Prague painter travelling to an exhibition.", motive: "Says Kessel sold fakes of his late teacher’s work.", relation: "Met him on the train.", alibi: "Says he played cards, then got off at Salzburg for a cigarette." }
  ],
  clues: {
    watch_smashed: { title: "Kessel’s watch stopped at 02:15", text: "The watch lies under the table, crystal smashed, hands at 02:15." },
    watch_set: { title: "The watch was set before it was smashed", text: "The winding crown is pulled out, the way you’d set the time. Someone moved the hands to 02:15, then broke it.", key: true },
    water_0240: { title: "Kessel was alive at 02:40", text: "Compartment 7 rang for water at 02:40. Anton brought it. Kessel took it himself, alive and alone.", key: true },
    cards_alibi: { title: "Card game until 02:30", text: "Duval, Ilse and Pavel played cards in the dining car from 00:30 to 02:30. The steward kept the score." },
    connecting_bolt: { title: "The connecting door was unbolted", text: "The bolt on Kessel’s side of the door to compartment 8 has been drawn back.", key: true },
    perfume: { title: "Violet perfume in compartment 7", text: "Ilse says Kessel hated perfume. Compartment 7 smells of violets, and Mathilde Duval always wears violets.", key: true },
    opener_missing: { title: "Kessel’s letter opener is missing", text: "His travelling desk set has an empty slot for a silver letter opener." },
    opener_found: { title: "The letter opener, hidden in compartment 8", text: "Wrapped in a handkerchief inside the heating grille of compartment 8: Kessel’s silver letter opener, bloodied.", key: true },
    forgery_report: { title: "Duval bought a fake from Kessel", text: "In Kessel’s briefcase: an expert’s report that the “Rieder” he sold Duval for 400,000 francs is a forgery.", key: true },
    duval_note: { title: "Kessel’s note: “No refund”", text: "Ilse typed it tonight: “M.D. No refund. Say a word and I’ll tell the police you knew it was fake.”", key: true },
    anton_complaint: { title: "Kessel had reported Anton", text: "Kessel wrote to the railway calling Anton “insolent” and asking for him to be removed." },
    ilse_tea: { title: "Ilse rang for tea at 02:50", text: "Compartment 3 rang at 02:50. Anton delivered tea at 02:55 and Ilse was there, at the far end of the train." },
    ilse_fired: { title: "Ilse was being dismissed", text: "Kessel told her on Monday she was finished when they reached Vienna." },
    pavel_platform: { title: "Pavel smoked on the Salzburg platform", text: "Pavel stood on the platform for the whole twelve-minute stop, chatting to a guard." },
    pavel_claim: { title: "Pavel accuses Kessel of selling fakes", text: "Pavel says Kessel sold forgeries of his teacher Anselm Rieder’s work." }
  },
  locations: [
    { id: "c7", name: "Compartment 7", desc: "Kessel’s compartment: a made-up berth, a fold-down table and a connecting door.", spots: [
      { id: "floor", label: "Floor under the table", text: "Kessel’s wristwatch, crystal smashed.", clue: "watch_smashed" },
      { id: "desk", label: "Travelling desk set", text: "Pen, ink, blotter and an empty velvet slot.", clue: "opener_missing" },
      { id: "door", label: "Connecting door to 8", text: "You check the bolt on this side.", clue: "connecting_bolt" },
      { id: "table", label: "Fold-down table", text: "A water glass, half drunk. The attendant’s tray is still there." }
    ]},
    { id: "c8", name: "Compartment 8", desc: "Mathilde Duval’s compartment, tidy, with a hatbox on the rack.", spots: [
      { id: "grille", label: "Heating grille", text: "One screw of the grille is loose.", clue: "opener_found", requires: "opener_missing" },
      { id: "basin", label: "Washbasin", text: "Recently rinsed. Violet soap on the ledge." }
    ]},
    { id: "dining", name: "Dining Car", desc: "Brass lamps, white cloths and a card table in the corner.", spots: [
      { id: "cards", label: "Card table", text: "The steward’s scorecard for last night’s game.", clue: "cards_alibi" }
    ]},
    { id: "cabin", name: "Attendant’s Cabin", desc: "A tiny cabin with a kettle, a master key hook and the bell board.", spots: [
      { id: "bells", label: "Bell board", text: "Each ring is written in Anton’s log.", clue: "water_0240" },
      { id: "keys", label: "Master key hook", text: "The master key hangs on its hook. Anton says it never left." }
    ]}
  ],
  interviews: {
    duval: [
      { id: "du1", q: "Where were you during the night?", a: "Cards in the dining car until half past two, then straight to bed. I was asleep by three." },
      { id: "du2", q: "What was your relationship with Kessel?", a: "Business. He sold me paintings. Good ones." },
      { id: "du3", q: "Show her the expert’s report", a: "Yes, he cheated me. Four hundred thousand francs. Half this train had a reason to hate him.", requires: "forgery_report" },
      { id: "du4", q: "Show her the letter opener from her grille", a: "I will say nothing more until I have a lawyer in Vienna.", requires: "opener_found" }
    ],
    anton: [
      { id: "a1", q: "What happened during the night?", a: "Compartment 7 rang for water at 02:40. I brought it. Herr Kessel took it at the door. He was alive, grumpy and alone.", clue: "water_0240" },
      { id: "a2", q: "Did you get on with Kessel?", a: "He wrote to the railway to have me sacked. I’ve had worse passengers.", clue: "anton_complaint" },
      { id: "a3", q: "Did anyone else ring?", a: "Fräulein Brandauer in number 3 rang for tea at 02:50. She was there when I brought it at 02:55.", clue: "ilse_tea" }
    ],
    ilse: [
      { id: "i1", q: "How were things with your employer?", a: "He was dismissing me in Vienna. Six years, and a week’s notice.", clue: "ilse_fired" },
      { id: "i2", q: "Did he write any letters tonight?", a: "One, to Madame Duval. I typed it. It was cruel.", clue: "duval_note" },
      { id: "i3", q: "Who is in compartment 8?", a: "Madame Duval. She wears violets, always. Herr Kessel couldn’t stand the smell.", requires: "connecting_bolt", clue: "perfume" }
    ],
    pavel: [
      { id: "pa1", q: "Where were you during the night?", a: "Cards in the dining car until half two. The steward kept score.", clue: "cards_alibi" },
      { id: "pa2", q: "Did you know Kessel?", a: "I knew of him. He sold fakes of my teacher Rieder’s work. I told him so at dinner.", clue: "pavel_claim" },
      { id: "pa3", q: "Did you leave the train?", a: "At Salzburg, for a cigarette. I talked to the guard for the whole stop.", clue: "pavel_platform" }
    ]
  },
  evidence: [
    { id: "briefcase", name: "Kessel’s briefcase", kind: "Physical", desc: "Locked, but the key was in his waistcoat.", detail: "Sale records, catalogues and a sealed expert’s report.", clue: "forgery_report" },
    { id: "watch", name: "Kessel’s wristwatch", kind: "Physical", requires: "watch_smashed", desc: "Gold, smashed crystal.", detail: "Hands at 02:15. The winding crown is pulled out to the setting position.", clue: "watch_set" },
    { id: "bellboard", name: "Bell log", kind: "Document", requires: "water_0240", desc: "Anton’s record of rings.", detail: "02:40  Compartment 7 (water)\n02:50  Compartment 3 (tea)\n06:45  Coffee round" },
    { id: "scorecard", name: "Card game scorecard", kind: "Document", requires: "cards_alibi", desc: "Kept by the dining-car steward.", detail: "Duval, Brandauer, Novak. Started 00:30, last hand 02:30." },
    { id: "opener", name: "Silver letter opener", kind: "Physical", requires: "opener_found", desc: "Wrapped in a handkerchief.", detail: "Kessel’s monogram on the handle. The handkerchief is embroidered “M.D.”" },
    { id: "note", name: "Carbon of Kessel’s note", kind: "Document", requires: "duval_note", desc: "From Ilse’s typewriter case.", detail: "“M.D. No refund. Say a word and I’ll tell the police you knew it was fake. V.K.”" }
  ],
  timeline: [
    { t: "00:30", text: "Duval, Ilse and Pavel begin cards in the dining car.", src: "Scorecard", requires: "cards_alibi" },
    { t: "02:15", text: "Kessel’s smashed watch shows the time of death.", src: "Wristwatch", requires: "watch_smashed", key: true },
    { t: "02:30", text: "The card game ends.", src: "Scorecard", requires: "cards_alibi" },
    { t: "02:40", text: "Kessel rings for water and is seen alive.", src: "Bell log", requires: "water_0240", key: true },
    { t: "02:50", text: "Ilse rings for tea from compartment 3.", src: "Bell log", requires: "ilse_tea" },
    { t: "03:00", text: "Duval says she was asleep by now.", src: "Duval’s statement", claim: true },
    { t: "03:10", text: "Salzburg stop. Pavel smokes on the platform.", src: "Guard", requires: "pavel_platform" },
    { t: "06:45", text: "Anton finds Kessel dead.", src: "Anton" }
  ],
  hints: [
    "The watch gives everyone at the card table an alibi. Is it telling the truth?",
    "Someone heard from Kessel after the watch stopped. Check the attendant’s records.",
    "Compartment 7 has two doors. Find out who is on the other side, and search their compartment for what’s missing from Kessel’s desk."
  ],
  motives: [
    { id: "forgery", label: "Revenge for being sold a forgery and threatened" },
    { id: "dismissal", label: "Anger at being dismissed" },
    { id: "complaint", label: "To save his job after a complaint" },
    { id: "teacher", label: "To defend a teacher’s reputation" }
  ],
  solution: {
    culprit: "duval", motive: "forgery",
    keyClues: ["water_0240", "watch_set", "connecting_bolt", "opener_found", "forgery_report", "perfume", "duval_note"],
    story: [
      "Mathilde Duval paid Kessel 400,000 francs for a painting that was fake. When she confronted him, his answer was the note Ilse typed: no refund, and if she spoke he would tell the police she knew.",
      "After the card game she went to bed. Some time after 02:40 she drew back the bolts on the connecting door and went in. She stabbed Kessel with his own letter opener, then set his watch to 02:15, when she was at the card table, and smashed it.",
      "She hid the letter opener in her own heating grille. Her violet scent stayed in the compartment."
    ],
    proof: [
      { clue: "water_0240", text: "Kessel was alive at 02:40, so the 02:15 time is false." },
      { clue: "watch_set", text: "The watch was set by hand before it was smashed." },
      { clue: "connecting_bolt", text: "The connecting door from compartment 8 was open." },
      { clue: "opener_found", text: "The weapon was hidden in her compartment, in her handkerchief." },
      { clue: "forgery_report", text: "She had been sold a fake for 400,000 francs." },
      { clue: "duval_note", text: "Kessel refused to pay and threatened her." },
      { clue: "ilse_tea", text: "Ilse was at the far end of the train at 02:55." }
    ]
  }
},
{
  id: "blueHour", number: "CF-1920", title: "The Blue Hour Forgery", kind: "Fraud", difficulty: "Standard",
  tagline: "A painting sells for £2.1 million. The buyer’s lab says it was painted last spring.",
  place: "Whitcombe’s Auction House, London", when: "Friday 9 June, 11:00",
  brief: [
    "On 2 June, “The Blue Hour” by Elsa Varga sold at Whitcombe’s for £2.1 million. A week later the buyer’s laboratory found titanium white in the paint. Titanium white wasn’t sold until the 1920s, and Varga died in 1911.",
    "The painting was photographed as genuine when Whitcombe’s valued it in February. Somewhere between February and June, someone swapped it for a copy."
  ],
  victim: { label: "The painting", name: "“The Blue Hour”", age: null, role: "Oil on canvas by Elsa Varga, 1909", found: "Sold at Whitcombe’s on 2 June", cause: "A modern forgery. The original is missing." },
  facts: [
    "Whitcombe’s photographed the painting in February for the catalogue.",
    "It was sent out for cleaning before the sale.",
    "The seller, Freddie Vane, inherited it from his grandmother.",
    "Whitcombe’s uses an outside courier for all deliveries."
  ],
  suspects: [
    { id: "nina", name: "Nina Albescu", age: 44, role: "Picture restorer", background: "Runs a respected restoration studio in Bermondsey.", motive: "None known.", relation: "Has cleaned paintings for Whitcombe’s for ten years.", alibi: "Says she only removed old varnish." },
    { id: "hugo", name: "Hugo Pemberton", age: 45, role: "Auction specialist", background: "Head of Early Modern at Whitcombe’s.", motive: "Earns commission on every sale.", relation: "Handled the sale.", alibi: "Says he was in New York while the painting was being cleaned." },
    { id: "freddie", name: "Freddie Vane", age: 31, role: "Seller", background: "Inherited the painting along with a large tax bill.", motive: "Deeply in debt.", relation: "Owner of the painting.", alibi: "Says he never saw the painting after February." },
    { id: "mo", name: "Mo Sayed", age: 40, role: "Fine-art courier", background: "Drives for Whitcombe’s and several studios.", motive: "None known.", relation: "Moved the painting to and from the studio.", alibi: "Says he only moves crates he’s given." }
  ],
  clues: {
    titanium: { title: "Titanium white in the paint", text: "The lab found titanium white under the surface. It proves the painting in the sale is modern." },
    crack_photo: { title: "The cracks don’t match February’s photos", text: "Under raking light, the cracks in the paint differ from Whitcombe’s February photographs. The swap happened after February.", key: true },
    studio_log: { title: "Six weeks in Nina’s studio", text: "The painting was at Nina’s studio from 1 March to 12 April for cleaning.", key: true },
    pigments_order: { title: "Nina ordered crackle medium and titanium white", text: "Nina’s supply invoice, 20 March: period pigments, titanium white and artificial crackle medium, used to fake the cracks of age.", key: true },
    tea_rags: { title: "Tea-stained canvas offcuts", text: "Offcuts of new canvas stained with tea to look old, in the studio bin." },
    shipping_crate: { title: "A crate to Geneva on 3 May", text: "Nina’s dispatch book: a crate labelled “empty antique frame” sent to the Geneva Freeport on 3 May.", key: true },
    crate_weight: { title: "The crate was too heavy for an empty frame", text: "Mo says the “empty frame” crate weighed as much as a framed painting.", key: true },
    bank: { title: "£400,000 paid to Nina from Geneva", text: "On 10 May Nina received £400,000 from a Geneva company that trades in art.", key: true },
    hugo_away: { title: "Hugo was in New York all spring", text: "Hugo’s passport and hotel bills put him in New York from 28 February to 15 April." },
    freddie_debt: { title: "Freddie owes £900,000 in tax", text: "Freddie needs the full sale price to pay his inheritance tax." },
    freddie_loses: { title: "A fake costs Freddie everything", text: "If the sale is cancelled, Freddie gets nothing and still owes Whitcombe’s fees." }
  },
  locations: [
    { id: "saleroom", name: "Whitcombe’s Saleroom", desc: "The forgery stands on an easel under a single lamp.", spots: [
      { id: "raking", label: "The painting under raking light", text: "You shine a lamp across the surface and compare the cracks with the catalogue.", clue: "crack_photo" },
      { id: "back", label: "Back of the canvas", text: "New stretcher bars stained to look old. The auction labels were moved over from the original." }
    ]},
    { id: "studio", name: "Nina’s Restoration Studio", desc: "Easels, solvents and a wall of pigment jars.", spots: [
      { id: "shelf", label: "Pigment shelf and invoices", text: "Jars of pigment. A file of supplier invoices.", clue: "pigments_order" },
      { id: "bin", label: "Studio bin", text: "Canvas scraps and rags in the bin.", clue: "tea_rags" },
      { id: "dispatch", label: "Dispatch book", text: "Every piece that leaves the studio, with destination.", clue: "shipping_crate" }
    ]},
    { id: "office", name: "Whitcombe’s Registry", desc: "Where every lot is logged in and out.", spots: [
      { id: "movement", label: "Movement register", text: "Lot 41, The Blue Hour: every trip it took.", clue: "studio_log" }
    ]}
  ],
  interviews: {
    nina: [
      { id: "n1", q: "What did you do to the painting?", a: "Removed a century of yellow varnish. Six weeks of careful work." },
      { id: "n2", q: "Why order crackle medium and titanium white?", a: "For practice pieces. Students. It’s nothing.", requires: "pigments_order" },
      { id: "n3", q: "What was in the Geneva crate?", a: "An empty frame for a client.", requires: "shipping_crate" },
      { id: "n4", q: "Show her the Geneva payment", a: "(She takes a long breath.) I want to speak to my solicitor.", requires: "bank" }
    ],
    hugo: [
      { id: "h1", q: "Where was the painting before the sale?", a: "With Nina for cleaning, from March to mid-April. It came back looking wonderful.", clue: "studio_log" },
      { id: "h2", q: "Where were you this spring?", a: "New York, for the spring sales, from February to April. Here’s my passport.", clue: "hugo_away" }
    ],
    freddie: [
      { id: "f1", q: "Why sell the painting?", a: "Death duties. I owe the tax office nine hundred thousand.", clue: "freddie_debt" },
      { id: "f2", q: "What happens now it’s a fake?", a: "The sale is cancelled. I get nothing and still owe Whitcombe’s. Why would I do this to myself?", clue: "freddie_loses" }
    ],
    mo: [
      { id: "m1", q: "What did you move for Nina?", a: "The Blue Hour, both ways. And on 3 May, a crate for Geneva. She signed it off herself.", clue: "shipping_crate" },
      { id: "m2", q: "What was in the Geneva crate?", a: "Paperwork said empty frame. I’ve lifted a thousand empty frames. That weighed like a framed canvas.", requires: "shipping_crate", clue: "crate_weight" }
    ]
  },
  evidence: [
    { id: "lab", name: "Buyer’s lab report", kind: "Document", desc: "Paint samples from the sold painting.", detail: "Sample 3, lower ground layer: titanium dioxide (rutile). Not available before about 1921.", clue: "titanium" },
    { id: "photos", name: "February catalogue photos", kind: "Digital", desc: "High-resolution photographs taken by Whitcombe’s.", detail: "Crack pattern mapped in detail: a long diagonal break across the sky." },
    { id: "invoice", name: "Pigment supplier invoice", kind: "Document", requires: "pigments_order", desc: "Kremer Pigments, 20 March.", detail: "Lead white, ultramarine, titanium white, crackle medium (2 bottles). Paid by Albescu Studio." },
    { id: "dispatch", name: "Studio dispatch note", kind: "Document", requires: "shipping_crate", desc: "Crate 118.", detail: "Contents: empty antique frame. Size 92 × 73 cm, the size of The Blue Hour. To Geneva Freeport. Signed N. Albescu." },
    { id: "statement", name: "Nina’s bank statement", kind: "Document", requires: ["shipping_crate", "pigments_order"], desc: "Obtained with a court order.", detail: "10 May: £400,000 received from Lac Léman Fine Art SA, Geneva.", clue: "bank" },
    { id: "passport", name: "Hugo’s passport", kind: "Document", requires: "hugo_away", desc: "Entry and exit stamps.", detail: "Out of London 28 Feb. Into London 15 Apr." }
  ],
  timeline: [
    { t: "12 Feb", text: "Whitcombe’s photographs the genuine painting.", src: "Catalogue" },
    { t: "1 Mar", text: "The painting goes to Nina’s studio for cleaning.", src: "Registry", requires: "studio_log" },
    { t: "1 Mar", text: "Nina says she only removed old varnish.", src: "Nina’s statement", claim: true, key: true },
    { t: "20 Mar", text: "Nina orders titanium white and crackle medium.", src: "Invoice", requires: "pigments_order", key: true },
    { t: "12 Apr", text: "The painting returns to Whitcombe’s.", src: "Registry", requires: "studio_log" },
    { t: "3 May", text: "A crate of painting size leaves the studio for Geneva.", src: "Dispatch book", requires: "shipping_crate" },
    { t: "10 May", text: "£400,000 arrives in Nina’s account from Geneva.", src: "Bank", requires: "bank" },
    { t: "2 Jun", text: "The Blue Hour sells for £2.1 million.", src: "Whitcombe’s" },
    { t: "9 Jun", text: "The buyer’s lab finds titanium white.", src: "Lab report", requires: "titanium" }
  ],
  hints: [
    "Work out when the swap happened. Compare the painting with the February photos.",
    "Where did the painting spend time between February and June? Visit that place.",
    "Something the size of the painting left for Geneva. Ask the person who carried it."
  ],
  motives: [
    { id: "sell", label: "To sell the original privately" },
    { id: "tax", label: "To pay a tax bill" },
    { id: "commission", label: "To earn a larger commission" },
    { id: "revenge", label: "Revenge on the auction house" }
  ],
  solution: {
    culprit: "nina", motive: "sell",
    keyClues: ["crack_photo", "studio_log", "pigments_order", "shipping_crate", "crate_weight", "bank"],
    story: [
      "When The Blue Hour arrived for cleaning, Nina Albescu saw her chance. A Geneva dealer had a buyer who wanted a Varga and asked no questions.",
      "Over six weeks she painted a copy using period pigments, but her ground layer contained titanium white. She aged it with crackle medium and tea-stained canvas, moved the auction labels across and sent the copy back to Whitcombe’s. The original went to Geneva on 3 May, labelled as an empty frame. A week later she was paid £400,000."
    ],
    proof: [
      { clue: "crack_photo", text: "The cracks changed after February, so the swap came later." },
      { clue: "studio_log", text: "The only place the painting went was Nina’s studio." },
      { clue: "pigments_order", text: "She bought exactly what a forger needs." },
      { clue: "shipping_crate", text: "A painting-sized crate went to Geneva." },
      { clue: "crate_weight", text: "The “empty frame” weighed as much as a framed painting." },
      { clue: "bank", text: "She was paid £400,000 from Geneva a week later." },
      { clue: "hugo_away", text: "Hugo was in New York the whole time." },
      { clue: "freddie_loses", text: "Freddie loses everything if the painting is fake." }
    ]
  }
}
);
