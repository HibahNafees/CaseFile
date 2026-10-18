CASES.push(
{
  id: "skerry", number: "CF-0808", title: "The Keeper’s Last Log", kind: "Disappearance", difficulty: "Standard",
  tagline: "A lighthouse goes dark in a storm, and its keeper is gone by morning.",
  place: "Skerry Rock Lighthouse, Outer Hebrides", when: "Sunday 3 November, 06:00",
  brief: [
    "Skerry Rock lighthouse stands on a bare rock six miles out to sea. On Saturday night, during a gale, its light went dark at 01:00. Fishing boats radioed the coastguard.",
    "At 06:00 the assistant keeper radioed that principal keeper Alasdair Mackie was missing. His cap was found on the rocks below the gallery. The logbook stops in the middle of a sentence."
  ],
  victim: { label: "Missing", name: "Alasdair Mackie", age: 58, role: "Principal lighthouse keeper", found: "Missing. His cap was on the rocks below the gallery.", cause: "Presumed to have gone into the sea." },
  facts: [
    "Two keepers live on the rock. A birdwatcher was also staying there that week.",
    "The lamp can only be switched off by hand, from the lamp room.",
    "The mainland harbour keeps a log of boats going in and out.",
    "Cigarette smuggling has been reported along this coast."
  ],
  suspects: [
    { id: "callum", name: "Callum Reid", age: 28, role: "Assistant keeper", background: "Second year on Skerry Rock. Quiet and good with engines.", motive: "None known.", relation: "Alasdair trained him.", alibi: "Says he slept from 22:00 to 06:00 and heard nothing." },
    { id: "imogen", name: "Dr. Imogen Frost", age: 46, role: "Visiting ornithologist", background: "Counting storm petrels on the rock for a university survey.", motive: "Alasdair wanted her survey stopped because it disturbed the station.", relation: "Guest. They argued about access to the cliffs.", alibi: "Says she was in her hide on the east cliff at night." },
    { id: "gregor", name: "Gregor Munro", age: 60, role: "Harbourmaster", background: "Runs the harbour on the mainland and the supply boat to the rock.", motive: "Alasdair had reported him for a late supply run.", relation: "Old colleagues.", alibi: "Says his boat stayed in harbour all night." },
    { id: "rab", name: "Rab Tulloch", age: 39, role: "Fisherman", background: "Owns the trawler Morag. Money seems to come easily lately.", motive: "Alasdair had reported boats running without lights.", relation: "Neighbours on the mainland.", alibi: "Says he was out fishing." }
  ],
  clues: {
    log_stops: { title: "The log stops mid-sentence at 23:40", text: "Alasdair’s last entry: “23:40. Wind SW 9. Light steady. C. says the—” and nothing more." },
    light_off: { title: "The lamp was switched off by hand", text: "The lamp’s switch is in the off position and the bulbs are fine. There was no power failure.", key: true },
    gallery_rail: { title: "Oilskin threads on the gallery rail", text: "Yellow oilskin threads are caught on a bolt on the gallery railing, directly above where the cap was found.", key: true },
    oilskin_torn: { title: "Callum’s oilskin has a torn sleeve", text: "Callum’s yellow oilskin, still damp, has a fresh tear on the right sleeve.", key: true },
    crates_store: { title: "Cigarette crates in the oil store", text: "Behind the paraffin drums: twelve crates of untaxed cigarettes.", key: true },
    cash_tin: { title: "£6,000 in Callum’s kit bag", text: "A tobacco tin in Callum’s kit bag holds £6,000 in used notes.", key: true },
    rab_signal: { title: "Rab: the light went out as arranged", text: "Rab admits he lands smuggled cigarettes on the rock. Callum switches off the light as the signal.", key: true },
    boat_lights: { title: "A boat close to the rock at 01:10", text: "Imogen saw a small boat’s lights come close to the landing stage at about 01:10." },
    imogen_hide: { title: "Imogen was in her hide 00:30–02:00", text: "Imogen’s notebook logs petrel counts every ten minutes from her hide on the east cliff, from 00:30 to 02:00." },
    gregor_boat: { title: "Gregor’s boat stayed in harbour", text: "The harbour log and CCTV show Gregor’s supply boat moored all night." },
    rab_boat: { title: "Rab’s Morag was out without lights", text: "Gregor says the Morag left harbour at 23:00 with no navigation lights." }
  },
  locations: [
    { id: "lamp", name: "The Lamp Room", desc: "The great lens sits in the middle, with the switch panel and logbook desk beside it.", spots: [
      { id: "switch", label: "Switch panel", text: "You test the switches and bulbs.", clue: "light_off" },
      { id: "logbook", label: "Logbook", text: "Alasdair’s neat entries every hour, until they stop.", clue: "log_stops" }
    ]},
    { id: "gallery", name: "The Gallery", desc: "An iron walkway around the lamp, sixty feet above the rocks.", spots: [
      { id: "rail", label: "Railing above the rocks", text: "Something yellow is caught on a bolt.", clue: "gallery_rail" },
      { id: "view", label: "Look down", text: "The rocks below, where the cap was found. The tide covers them twice a day." }
    ]},
    { id: "quarters", name: "Keepers’ Quarters", desc: "Two bunks, a stove and oilskins drying on hooks.", spots: [
      { id: "hook", label: "Callum’s oilskin", text: "You check it for damage.", clue: "oilskin_torn" },
      { id: "bag", label: "Callum’s kit bag", text: "You search the kit bag.", clue: "cash_tin", requires: "crates_store" },
      { id: "alasdair", label: "Alasdair’s bunk", text: "A letter to the coastguard, unsent: “I believe the rock is being used by smugglers.”" }
    ]},
    { id: "store", name: "Oil Store", desc: "A cold stone store of paraffin drums and spare parts.", spots: [
      { id: "drums", label: "Behind the drums", text: "Stacked crates, not on any supply list.", clue: "crates_store" }
    ]}
  ],
  interviews: {
    callum: [
      { id: "c1", q: "Where were you last night?", a: "Asleep from ten. I didn’t hear a thing until I woke at six and found the light out." },
      { id: "c2", q: "How did you tear your oilskin?", a: "Caught it on the door weeks ago.", requires: "oilskin_torn" },
      { id: "c3", q: "Show him the £6,000", a: "My savings. I don’t trust banks.", requires: "cash_tin" },
      { id: "c4", q: "Rab says you switch off the light for him", a: "(He is silent for a long time.) Alasdair came up and caught me at the switch. He grabbed my arm. We were on the gallery. I didn’t mean for him to go over.", requires: "rab_signal" }
    ],
    imogen: [
      { id: "i1", q: "Where were you last night?", a: "In my hide on the east cliff from half past midnight to two. Storm petrels come in on nights like that. It’s all in my notebook.", clue: "imogen_hide" },
      { id: "i2", q: "Did you see anything?", a: "A small boat’s lights, near the landing stage, about ten past one. Just after the lighthouse went dark.", clue: "boat_lights" }
    ],
    gregor: [
      { id: "g1", q: "Where was your boat?", a: "Tied up in harbour all night. Check the log and the camera.", clue: "gregor_boat" },
      { id: "g2", q: "Who could reach the rock in that weather?", a: "Only a fool or Rab Tulloch. His Morag went out at eleven with no lights showing.", clue: "rab_boat" }
    ],
    rab: [
      { id: "r1", q: "Where were you last night?", a: "Fishing. Where else?" },
      { id: "r2", q: "Show him the cigarette crates", a: "Fine. Cigarettes. The lad signals, the light goes out, we land the crates. Nobody gets hurt.", requires: "crates_store", clue: "rab_signal" },
      { id: "r3", q: "What happened to Alasdair?", a: "I never set foot on the rock. Callum met us at the landing. He was white as a sheet.", requires: "rab_signal" }
    ]
  },
  evidence: [
    { id: "cap", name: "Alasdair’s cap", kind: "Physical", desc: "Found on the rocks below the gallery.", detail: "Northern Lighthouse Board cap, soaked. It must have fallen from the gallery." },
    { id: "log", name: "Lighthouse logbook", kind: "Document", requires: "log_stops", desc: "The station log.", detail: "22:40 Wind SW 8. Light steady.\n23:40 Wind SW 9. Light steady. C. says the—" },
    { id: "threads", name: "Oilskin threads", kind: "Physical", requires: "gallery_rail", desc: "From the gallery rail.", detail: "Yellow PVC-coated cotton. Only the keepers wear yellow oilskins on the rock." },
    { id: "oilskin", name: "Callum’s oilskin", kind: "Physical", requires: "oilskin_torn", desc: "Yellow, right sleeve torn.", detail: "The tear is fresh. The threads from the rail match the missing piece." },
    { id: "cash", name: "Tobacco tin of cash", kind: "Physical", requires: "cash_tin", desc: "From Callum’s kit bag.", detail: "£6,000 in used £20 notes, wrapped in bands from a mainland bank." },
    { id: "notebook", name: "Imogen’s field notebook", kind: "Document", requires: "imogen_hide", desc: "Petrel counts.", detail: "00:30 hide. 00:40 12 birds. … 01:00 LIGHT OUT. 01:10 boat lights W landing. … 02:00 back to hut." }
  ],
  timeline: [
    { t: "22:00", text: "Callum says he went to bed and slept until 06:00.", src: "Callum’s statement", claim: true, key: true },
    { t: "23:00", text: "The Morag leaves harbour without lights.", src: "Gregor", requires: "rab_boat" },
    { t: "23:40", text: "Alasdair’s last log entry stops mid-sentence.", src: "Logbook", requires: "log_stops" },
    { t: "00:30", text: "Imogen begins counting petrels from her hide.", src: "Notebook", requires: "imogen_hide" },
    { t: "01:00", text: "The light is switched off by hand.", src: "Lamp room", requires: "light_off", key: true },
    { t: "01:10", text: "A boat’s lights are seen near the landing stage.", src: "Imogen", requires: "boat_lights" },
    { t: "06:00", text: "Callum radios that Alasdair is missing.", src: "Coastguard" }
  ],
  hints: [
    "Lamps don’t switch themselves off. Who could have done it?",
    "Look at what’s caught on the gallery rail, then look at what the keepers wear.",
    "Someone is using the rock for business. Search the stores, then ask the man whose boat was out."
  ],
  motives: [
    { id: "smuggle", label: "To protect a smuggling operation" },
    { id: "survey", label: "To keep a bird survey going" },
    { id: "report", label: "Revenge for being reported" },
    { id: "promotion", label: "To take over as principal keeper" }
  ],
  solution: {
    culprit: "callum", motive: "smuggle",
    keyClues: ["light_off", "gallery_rail", "oilskin_torn", "crates_store", "cash_tin", "rab_signal"],
    story: [
      "Callum Reid was paid to switch off the light so Rab Tulloch’s Morag could land smuggled cigarettes on the rock unseen. On Saturday night Alasdair was still awake.",
      "Callum interrupted the log at 23:40 and Alasdair went to bed. At 01:00 Alasdair caught Callum at the switch. They struggled on the gallery, Callum’s oilskin tore on the rail, and Alasdair went over.",
      "Callum met the boat anyway, then waited until six to raise the alarm."
    ],
    proof: [
      { clue: "light_off", text: "The light was switched off by hand. Only the keepers were in the lamp room." },
      { clue: "gallery_rail", text: "Oilskin threads on the rail above where the cap fell." },
      { clue: "oilskin_torn", text: "Callum’s oilskin has the matching tear." },
      { clue: "crates_store", text: "The rock was a drop point for smuggled cigarettes." },
      { clue: "cash_tin", text: "Callum was being paid in cash." },
      { clue: "rab_signal", text: "Rab confirms Callum switched off the light as a signal." },
      { clue: "imogen_hide", text: "Imogen was on the east cliff counting birds." }
    ]
  }
},
{
  id: "rook", number: "CF-3001", title: "Ransom at Rook Hall", kind: "Kidnapping", difficulty: "Hard",
  tagline: "The heir vanishes after a party, and the ransom note was printed in the house.",
  place: "Rook Hall, Northumberland", when: "Sunday 12 May, 07:00",
  brief: [
    "Theo Rook, 19, heir to Rook Hall, went up to bed after his birthday party at midnight. At 07:00 the housekeeper found a note on the breakfast table: £500,000 by Friday, no police, or Theo will not come home.",
    "His bed hadn’t been slept in. His phone was on the bedside table. The family has called you in quietly."
  ],
  victim: { label: "Missing", name: "Theo Rook", age: 19, role: "Heir to Rook Hall", found: "Missing from his room. Ransom note on the breakfast table.", cause: "Taken overnight. £500,000 demanded by Friday." },
  facts: [
    "Five people stayed at Rook Hall after the party.",
    "The estate office printer is shared by family and guests, each with their own login.",
    "Estate vehicle keys hang on a hook in the boot room.",
    "An old ice house stands in the woods, half a mile from the hall."
  ],
  suspects: [
    { id: "jasper", name: "Jasper Rook", age: 27, role: "Theo’s cousin", background: "Charming, unemployed and a regular at London casinos.", motive: "None known.", relation: "Grew up together. Theo looks up to him.", alibi: "Says he was in the billiard room all night." },
    { id: "marion", name: "Marion Rook", age: 49, role: "Theo’s stepmother", background: "Married Theo’s father six years ago.", motive: "Theo inherits the estate, not her.", relation: "Polite but distant.", alibi: "Says she went to bed at 00:30." },
    { id: "dunne", name: "Frank Dunne", age: 56, role: "Chauffeur and groundsman", background: "Has worked for the family for thirty years.", motive: "Recently told his job will end in the summer.", relation: "Taught Theo to drive.", alibi: "Says he spent the night at his sister’s in the village." },
    { id: "kit", name: "Kit Albright", age: 20, role: "Theo’s girlfriend", background: "A student at Theo’s university.", motive: "She and Theo argued loudly at the party.", relation: "Together a year.", alibi: "Says she left on the late train to London." }
  ],
  clues: {
    note_paper: { title: "The note is on Rook Hall paper", text: "The ransom note is printed on the estate’s own watermarked paper. It came from inside the house.", key: true },
    printer_dots: { title: "Tracking dots match the office printer", text: "Almost invisible yellow dots on the note identify the estate office laser printer.", key: true },
    office_login: { title: "Printed at 01:12 under Jasper’s login", text: "The printer’s job log: one page printed at 01:12 by user “jrook”.", key: true },
    sedative: { title: "Sleeping pills in Theo’s water bottle", text: "Theo’s water bottle holds dissolved sleeping pills, prescribed to Marion Rook." },
    pills_missing: { title: "Marion’s pills sat in the guest bathroom", text: "Marion keeps her sleeping pills in the guest bathroom cabinet. Anyone staying could take them." },
    tyre_tracks: { title: "Fresh tyre tracks to the ice house", text: "Land Rover tracks run from the stable yard into the woods towards the old ice house." },
    ice_house: { title: "Theo found in the ice house", text: "Theo is in the ice house, drowsy and cold but unhurt. He remembers nothing after his drink at midnight." },
    mud_boots: { title: "Ice-house clay on Jasper’s shoes", text: "Jasper’s brogues in the boot room are caked in the red clay found only around the ice house.", key: true },
    jasper_debt: { title: "Jasper owes a casino £300,000", text: "Jasper asked Theo’s father for £300,000 last week to pay a casino. He was refused.", key: true },
    dunne_car: { title: "Anyone could take the Land Rover", text: "The keys hang on the boot-room hook, and everyone in the house knows it." },
    dunne_sister: { title: "Dunne was at his sister’s all night", text: "Dunne’s sister and her husband confirm he slept on their sofa in the village." },
    kit_argument: { title: "Kit and Theo argued at the party", text: "They argued about Kit going abroad for a year. Several guests heard." },
    kit_train: { title: "Kit took the 23:50 train", text: "Kit’s ticket was scanned at Alnmouth station at 23:48." }
  },
  locations: [
    { id: "theo", name: "Theo’s Bedroom", desc: "The bed is made, and his phone is still charging.", spots: [
      { id: "bottle", label: "Water bottle on the desk", text: "There’s a chalky residue at the bottom.", clue: "sedative" },
      { id: "window", label: "Window", text: "Locked from inside. He left through the door." }
    ]},
    { id: "office", name: "Estate Office", desc: "Ledgers, maps of the estate and a shared laser printer.", spots: [
      { id: "printlog", label: "Printer job log", text: "The printer keeps a list of every job with user and time.", clue: "office_login" },
      { id: "paper", label: "Paper tray", text: "Rook Hall watermarked letter paper, a ream opened recently." }
    ]},
    { id: "grounds", name: "Stable Yard and Woods", desc: "Cobbles, then a track leading into beech woods.", spots: [
      { id: "track", label: "Track into the woods", text: "Fresh tyre marks in the mud.", clue: "tyre_tracks" },
      { id: "icehouse", label: "The old ice house", text: "You follow the tracks and force the door.", clue: "ice_house", requires: "tyre_tracks" }
    ]},
    { id: "bootroom", name: "Boot Room", desc: "Wellies, waxed jackets and a key hook by the back door.", spots: [
      { id: "shoes", label: "Row of shoes", text: "You check each pair for mud.", clue: "mud_boots" },
      { id: "hook", label: "Key hook", text: "The Land Rover keys are back on the hook.", clue: "dunne_car" }
    ]},
    { id: "bath", name: "Guest Bathroom", desc: "Marble, towels and a mirrored cabinet.", spots: [
      { id: "cabinet", label: "Mirrored cabinet", text: "A pill bottle labelled “Mrs M. Rook”. Half empty.", clue: "pills_missing", requires: "sedative" }
    ]}
  ],
  interviews: {
    jasper: [
      { id: "j1", q: "Where were you last night?", a: "Billiard room till dawn. Terrible for my game, excellent for the port." },
      { id: "j2", q: "Are you short of money?", a: "Everyone in this family is short of money. It’s the Rook tradition." },
      { id: "j3", q: "You printed a page at 01:12", a: "A boarding pass. For a trip. I… don’t remember where to.", requires: "office_login" },
      { id: "j4", q: "Show him the clay on his shoes", a: "I’d like my solicitor now, please.", requires: "mud_boots" }
    ],
    marion: [
      { id: "m1", q: "When did you last see Theo?", a: "Midnight. He took a glass of water up. I went to bed at half past." },
      { id: "m2", q: "Your pills were in his water", a: "They’re in the guest bathroom cabinet. Anyone staying could take them. I didn’t hide them.", requires: "sedative", clue: "pills_missing" },
      { id: "m3", q: "Has anyone asked the family for money?", a: "Jasper. He asked my husband for three hundred thousand last week. Casino debts. He was told no.", clue: "jasper_debt" }
    ],
    dunne: [
      { id: "d1", q: "Where were you last night?", a: "At my sister’s in the village. Slept on her sofa. She’ll tell you.", clue: "dunne_sister" },
      { id: "d2", q: "Who can use the Land Rover?", a: "Anyone. The keys are on the hook in the boot room. Always have been.", clue: "dunne_car" }
    ],
    kit: [
      { id: "k1", q: "What happened between you and Theo?", a: "We argued about me going to Spain for a year. It was stupid. I left early.", clue: "kit_argument" },
      { id: "k2", q: "How did you get home?", a: "The 23:50 from Alnmouth. My ticket was scanned.", clue: "kit_train" }
    ]
  },
  evidence: [
    { id: "note", name: "Ransom note", kind: "Document", desc: "Found on the breakfast table.", detail: "“£500,000 by Friday. No police or Theo doesn’t come home.” Printed on watermarked Rook Hall paper.", clue: "note_paper" },
    { id: "dots", name: "Printer tracking analysis", kind: "Digital", requires: "note_paper", desc: "The note examined under blue light.", detail: "Yellow tracking dots decode to serial number XK-40211: the estate office printer.", clue: "printer_dots" },
    { id: "bottle", name: "Theo’s water bottle", kind: "Physical", requires: "sedative", desc: "From his desk.", detail: "Residue of zopiclone, a strong sleeping pill." },
    { id: "ticket", name: "Kit’s train ticket", kind: "Digital", requires: "kit_train", desc: "Rail app record.", detail: "Scanned Alnmouth 23:48. Arrived London 03:40." },
    { id: "brogues", name: "Jasper’s brogues", kind: "Physical", requires: "mud_boots", desc: "From the boot room.", detail: "Red clay on soles and welts. The same clay lines the path to the ice house." }
  ],
  timeline: [
    { t: "23:48", text: "Kit’s train ticket is scanned at Alnmouth.", src: "Rail record", requires: "kit_train" },
    { t: "00:00", text: "Theo goes up to bed with a glass of water.", src: "Marion" },
    { t: "00:00", text: "Jasper says he stayed in the billiard room all night.", src: "Jasper’s statement", claim: true, key: true },
    { t: "01:12", text: "One page is printed under Jasper’s login.", src: "Printer log", requires: "office_login", key: true },
    { t: "01:30", text: "The Land Rover is driven into the woods.", src: "Tyre tracks", requires: "tyre_tracks" },
    { t: "07:00", text: "The ransom note is found on the breakfast table.", src: "Housekeeper" }
  ],
  hints: [
    "Look closely at the ransom note. Where was it made?",
    "Printers remember who used them. Find the log.",
    "Tracks lead somewhere in the woods. And someone’s shoes went there too."
  ],
  motives: [
    { id: "debt", label: "To pay off gambling debts with the ransom" },
    { id: "inherit", label: "To remove the heir to the estate" },
    { id: "job", label: "Revenge for losing a job" },
    { id: "jealous", label: "Anger after an argument" }
  ],
  solution: {
    culprit: "jasper", motive: "debt",
    keyClues: ["note_paper", "printer_dots", "office_login", "mud_boots", "jasper_debt"],
    story: [
      "Jasper Rook owed a casino £300,000 and had been refused help. He decided the family would pay a ransom for Theo instead.",
      "He put Marion’s sleeping pills in Theo’s water. At 01:12 he printed the ransom note in the estate office under his own login. He carried the drowsy Theo to the Land Rover and left him in the old ice house, getting its red clay all over his shoes. Then he went back to the billiard room."
    ],
    proof: [
      { clue: "note_paper", text: "The note was made inside Rook Hall." },
      { clue: "printer_dots", text: "It came from the estate office printer." },
      { clue: "office_login", text: "It was printed under Jasper’s login at 01:12." },
      { clue: "mud_boots", text: "His shoes carry the ice-house clay." },
      { clue: "jasper_debt", text: "He needed £300,000 and was refused." },
      { clue: "kit_train", text: "Kit was on a train to London." },
      { clue: "dunne_sister", text: "Dunne was in the village all night." }
    ]
  }
},
{
  id: "hollow", number: "CF-0612", title: "Fire at the Hollow Crown", kind: "Arson", difficulty: "Standard",
  tagline: "An old coaching inn burns in the night, and someone wanted it gone.",
  place: "The Hollow Crown Hotel, Ashby Cross", when: "Wednesday 17 January, 03:20",
  brief: [
    "The Hollow Crown is a listed coaching inn from the 1790s. At 03:20 a guest smelled smoke and raised the alarm. The east wing was gutted. All fourteen guests got out safely.",
    "The fire service found the fire began in a linen store that holds nothing that burns easily by itself. They think it was set deliberately."
  ],
  victim: { label: "Target", name: "The Hollow Crown Hotel", age: null, role: "Listed 1790s coaching inn", found: "East wing gutted", cause: "Fire started in the east-wing linen store at about 03:10." },
  facts: [
    "A listed building can only be knocked down if it is beyond repair.",
    "A developer has been trying to buy the site for new housing.",
    "The fire door to the car park is alarmed.",
    "The car park has a camera, but the reception desk has none."
  ],
  suspects: [
    { id: "stroud", name: "Leon Stroud", age: 48, role: "Property developer", background: "Builds housing estates across the county.", motive: "Wants the Hollow Crown site.", relation: "Made three offers to buy the hotel.", alibi: "Says he was asleep at home, forty minutes away." },
    { id: "beatrice", name: "Beatrice Crane", age: 63, role: "Owner", background: "Has run the Hollow Crown for thirty years.", motive: "Could collect insurance.", relation: "Owner.", alibi: "Says she was asleep in the owner’s flat in the west wing." },
    { id: "kevin", name: "Kevin Doyle", age: 34, role: "Night porter", background: "Works nights at reception.", motive: "Recently warned for sleeping on duty.", relation: "Employee.", alibi: "Says he was at the desk all night." },
    { id: "pike", name: "Ambrose Pike", age: 71, role: "Guest, retired fire officer", background: "A regular guest for twenty years.", motive: "Recently threatened to report the hotel’s fire safety.", relation: "Long-standing guest.", alibi: "Says he raised the alarm from room 12." }
  ],
  clues: {
    origin: { title: "The fire began in the linen store", text: "Burn patterns show the fire started low down in the east-wing linen store." },
    accelerant: { title: "Lamp oil in the linen store", text: "Samples from the linen store floor contain paraffin lamp oil.", key: true },
    wire_cut: { title: "The fire-door alarm wire was cut", text: "The alarm cable on the car-park fire door has been cut cleanly.", key: true },
    receipt: { title: "Lamp oil receipt in the car-park bin", text: "A hardware shop receipt: 2 litres of lamp oil, Tuesday 16:02, paid by card ending 4471.", key: true },
    cctv_car: { title: "Dark SUV in the car park 03:05–03:15", text: "The car-park camera shows a dark SUV arriving at 03:05 and leaving at 03:15. The plate starts “LS19”.", key: true },
    stroud_plate: { title: "Stroud drives a black SUV, LS19 KRD", text: "Leon Stroud’s car is a black SUV with the plate LS19 KRD.", key: true },
    card_match: { title: "Stroud’s card ends 4471", text: "The debit card in Stroud’s wallet ends in 4471.", key: true },
    offer_rejected: { title: "Beatrice refused Stroud three times", text: "Letters show Beatrice turned down all three of Stroud’s offers. His last letter said, “Old buildings don’t last forever.”", key: true },
    insurance: { title: "The hotel is badly underinsured", text: "The policy covers barely a third of the rebuild cost. The fire ruins Beatrice." },
    porter_asleep: { title: "Kevin dozed off from 02:30", text: "Kevin admits he fell asleep at the desk from about 02:30 until the alarm." },
    pike_alarm: { title: "Pike raised the alarm from room 12", text: "Pike smelled smoke at 03:20 and pulled the alarm outside room 12." },
    pike_complaint: { title: "Pike threatened to report the hotel", text: "Pike had written that the fire doors were “a disgrace” and threatened to report them." }
  },
  locations: [
    { id: "linen", name: "East-Wing Linen Store", desc: "Blackened walls and the remains of shelves.", spots: [
      { id: "floor", label: "Floor under the shelves", text: "You take samples from the charred floor.", clue: "accelerant" },
      { id: "shelves", label: "Remains of the shelves", text: "Burned sheets and towels. The deepest charring is at floor level." }
    ]},
    { id: "carpark", name: "Car Park and Fire Door", desc: "A gravel car park behind the east wing.", spots: [
      { id: "door", label: "Fire door", text: "You check the alarm contact.", clue: "wire_cut" },
      { id: "bin", label: "Litter bin", text: "Among the crisp packets, a crumpled receipt.", clue: "receipt" },
      { id: "camera", label: "Car-park camera", text: "You play back the night’s footage.", clue: "cctv_car" }
    ]},
    { id: "reception", name: "Reception", desc: "An oak desk, a key board and a porter’s chair.", spots: [
      { id: "desk", label: "Night desk", text: "The porter’s log has no entries after 02:20." },
      { id: "keys", label: "Key board", text: "All room keys present." }
    ]},
    { id: "ownerOffice", name: "Owner’s Office", desc: "Box files and a view of the car park.", spots: [
      { id: "letters", label: "Correspondence file", text: "Letters from Stroud Developments.", clue: "offer_rejected" },
      { id: "policy", label: "Insurance policy", text: "The hotel’s buildings insurance.", clue: "insurance" }
    ]}
  ],
  interviews: {
    stroud: [
      { id: "s1", q: "Where were you last night?", a: "Asleep at home in Carlow. It’s forty minutes away." },
      { id: "s2", q: "Why do you want the hotel?", a: "I made fair offers. Ninety new homes. The village needs them." },
      { id: "s3", q: "A dark SUV was in the car park", a: "Plenty of dark SUVs about. Mine’s a black one, LS19 KRD, if you must know.", requires: "cctv_car", clue: "stroud_plate" },
      { id: "s4", q: "Show him the lamp-oil receipt", a: "(He checks his wallet, then puts it away. The card ends 4471.) I think I need to call my lawyer.", requires: "receipt", clue: "card_match" }
    ],
    beatrice: [
      { id: "b1", q: "Has anyone wanted to buy the hotel?", a: "Leon Stroud. Three offers. I turned down every one. This place is my life.", clue: "offer_rejected" },
      { id: "b2", q: "Is the hotel insured?", a: "Not nearly enough. This fire has finished me.", clue: "insurance" }
    ],
    kevin: [
      { id: "k1", q: "Were you at the desk all night?", a: "I… dozed off. About half two. Next thing, the alarm was going. Please don’t tell Mrs Crane.", clue: "porter_asleep" },
      { id: "k2", q: "Anyone asking questions lately?", a: "A man in an expensive coat asked about the fire door last week. Said he was a surveyor." }
    ],
    pike: [
      { id: "p1", q: "What happened last night?", a: "I woke smelling smoke at twenty past three and pulled the alarm outside my room. Forty years in the fire service. You never forget that smell.", clue: "pike_alarm" },
      { id: "p2", q: "You complained about the hotel", a: "The fire doors were a disgrace. I wanted them fixed, not the place burned down.", clue: "pike_complaint" }
    ]
  },
  evidence: [
    { id: "report", name: "Fire investigator’s report", kind: "Document", desc: "Preliminary findings.", detail: "Point of origin: east-wing linen store, floor level. Rapid spread. Deliberate ignition suspected.", clue: "origin" },
    { id: "still", name: "CCTV still, 03:05", kind: "Digital", requires: "cctv_car", desc: "Car-park camera.", detail: "Black SUV. Partial plate: LS19 K…. One figure walks towards the fire door." },
    { id: "receipt", name: "Hardware shop receipt", kind: "Document", requires: "receipt", desc: "From the car-park bin.", detail: "Ashby Cross Hardware, Tue 16:02. Lamp oil 2L ×1. Card ****4471." },
    { id: "letter", name: "Stroud’s last letter", kind: "Document", requires: "offer_rejected", desc: "Dated 2 January.", detail: "“My final offer stands. Old buildings don’t last forever, Mrs Crane. Once beyond repair, the council will have no choice.”" },
    { id: "policy", name: "Insurance schedule", kind: "Document", requires: "insurance", desc: "Buildings cover.", detail: "Sum insured: £1.1m. Estimated rebuild: £3.4m." }
  ],
  timeline: [
    { t: "02:30", text: "Kevin falls asleep at the desk.", src: "Kevin", requires: "porter_asleep" },
    { t: "03:00", text: "Stroud says he was asleep at home in Carlow.", src: "Stroud’s statement", claim: true, key: true },
    { t: "03:05", text: "A black SUV, plate LS19 K…, enters the car park.", src: "CCTV", requires: "cctv_car", key: true },
    { t: "03:10", text: "Fire starts in the linen store.", src: "Fire report", requires: "origin" },
    { t: "03:15", text: "The SUV leaves.", src: "CCTV", requires: "cctv_car" },
    { t: "03:20", text: "Pike raises the alarm.", src: "Pike", requires: "pike_alarm" },
    { t: "03:40", text: "The fire brigade arrives.", src: "Fire service" }
  ],
  hints: [
    "Fires in linen stores don’t start by themselves. What was used?",
    "The car park has a camera, and the bin has been used recently.",
    "Who gains if the building is beyond repair? Compare his car and his wallet with what you found."
  ],
  motives: [
    { id: "develop", label: "To get a listed building demolished for development" },
    { id: "insurance", label: "Insurance money" },
    { id: "cover", label: "To cover up sleeping on duty" },
    { id: "safety", label: "To prove the hotel was unsafe" }
  ],
  solution: {
    culprit: "stroud", motive: "develop",
    keyClues: ["accelerant", "wire_cut", "cctv_car", "stroud_plate", "receipt", "card_match", "offer_rejected"],
    story: [
      "Leon Stroud needed the Hollow Crown to be beyond repair. A listed building that is still standing can’t be demolished. One that has burned down can be.",
      "He bought lamp oil on Tuesday afternoon. At 03:05 he drove into the car park, cut the fire-door alarm wire, poured the oil in the linen store and lit it. He threw the receipt in the bin on his way out and left at 03:15."
    ],
    proof: [
      { clue: "accelerant", text: "Lamp oil was used to start the fire." },
      { clue: "receipt", text: "Lamp oil was bought on Tuesday with a card ending 4471." },
      { clue: "card_match", text: "Stroud’s card ends 4471." },
      { clue: "cctv_car", text: "A black SUV, LS19 K…, was there from 03:05 to 03:15." },
      { clue: "stroud_plate", text: "Stroud drives a black SUV, LS19 KRD." },
      { clue: "offer_rejected", text: "Beatrice refused to sell. Only a ruin could be knocked down." },
      { clue: "insurance", text: "Beatrice was underinsured and loses heavily." }
    ]
  }
},
{
  id: "violin", number: "CF-1437", title: "The Vanishing Violin", kind: "Theft", difficulty: "Easy",
  tagline: "A 300-year-old violin disappears from a practice room the day before a competition final.",
  place: "Royal Northern Conservatoire", when: "Thursday 3 April, 14:30",
  brief: [
    "Mei Tanaka, 20, plays “the Nightingale”, a 1714 violin by Lorenzo Varni lent to her by the conservatoire. Tomorrow she plays in the final of the Kingsley Prize.",
    "At 14:05 she left practice room 4 for five minutes to fetch a coffee. When she came back at 14:30 after a queue, the violin was gone."
  ],
  victim: { label: "Stolen item", name: "“The Nightingale”", age: null, role: "Violin by Lorenzo Varni, 1714", found: "Missing from practice room 4", cause: "Taken between 14:05 and 14:30." },
  facts: [
    "Students sign in and out of practice rooms on a sheet in the corridor.",
    "Only two students reached the Kingsley Prize final.",
    "The instrument storeroom is at the end of the same corridor.",
    "The ground floor has CCTV. The practice corridor doesn’t."
  ],
  suspects: [
    { id: "dmitri", name: "Dmitri Volkov", age: 22, role: "Violin student, finalist", background: "Brilliant and ambitious. The other Kingsley finalist.", motive: "None known.", relation: "Mei’s rival.", alibi: "Says he was practising in room 5 and never came out." },
    { id: "helen", name: "Prof. Helen Ashdown", age: 60, role: "Head of strings", background: "Chose Mei to play the Nightingale.", motive: "Other students claim she wanted the violin for herself.", relation: "Mei’s teacher.", alibi: "Says she was in a faculty meeting." },
    { id: "sam", name: "Sam Okoro", age: 35, role: "Caretaker", background: "Knows every room in the building.", motive: "Has keys to everything.", relation: "Friendly with the students.", alibi: "Says he was mopping the ground floor." },
    { id: "lotte", name: "Lotte Berg", age: 21, role: "Violin student", background: "Missed out on the final by one mark.", motive: "Bitter about the result.", relation: "Mei’s flatmate.", alibi: "Says she was in the library." }
  ],
  clues: {
    room_unlocked: { title: "Room 4 was left unlocked from 14:05", text: "Mei left room 4 unlocked while she went for coffee. The queue kept her away for 25 minutes." },
    rosin: { title: "Dark rosin dust on the door handle", text: "The handle of room 4 has a smear of dark amber rosin. Mei uses pale rosin.", key: true },
    signin: { title: "Dmitri in room 5, 13:50–14:40", text: "The sign-in sheet has Dmitri in room 5, next door, from 13:50 to 14:40." },
    cello_case: { title: "The violin, hidden in a cello case", text: "In the storeroom, inside an orchestra cello case: the Nightingale, wrapped in a scarf.", key: true },
    cello_label: { title: "The cello case was signed out to Dmitri", text: "The storeroom book shows that cello case signed out on Monday to “D. Volkov”.", key: true },
    dmitri_no_cello: { title: "Dmitri doesn’t play the cello", text: "Prof. Ashdown says Dmitri has never played the cello in his life.", key: true },
    sam_saw: { title: "A cello case wheeled into the storeroom at 14:15", text: "Sam saw a dark-haired young man wheel a cello case into the storeroom at 14:15.", key: true },
    dmitri_rival: { title: "Only Mei and Dmitri are in the final", text: "Without the Nightingale, Mei would have to play the final on a student violin." },
    helen_meeting: { title: "Prof. Ashdown was in a meeting 14:00–15:00", text: "The minutes list Prof. Ashdown as present for the whole meeting." },
    sam_cctv: { title: "Sam on the ground-floor camera", text: "Ground-floor CCTV shows Sam mopping from 14:00, except for a quick trip upstairs to fetch a bucket at 14:15." },
    lotte_library: { title: "Lotte was in the library", text: "The library gate logged Lotte in at 13:30 and out at 15:10." }
  },
  locations: [
    { id: "room4", name: "Practice Room 4", desc: "A piano, a music stand and Mei’s open, empty violin case.", spots: [
      { id: "handle", label: "Door handle", text: "A faint amber smear on the brass.", clue: "rosin" },
      { id: "stand", label: "Music stand", text: "Sibelius Concerto, heavily marked. Mei had been practising the cadenza." }
    ]},
    { id: "corridor", name: "Practice Corridor", desc: "Six practice rooms and a sign-in sheet on a clipboard.", spots: [
      { id: "sheet", label: "Sign-in sheet", text: "Names, rooms and times.", clue: "signin" },
      { id: "room5", label: "Room 5", text: "A violin case, and a block of dark amber rosin on the piano lid." }
    ]},
    { id: "store", name: "Instrument Storeroom", desc: "Racks of cellos, basses and timpani.", spots: [
      { id: "cases", label: "Cello cases", text: "You open each case in turn. One is much too light for a cello.", clue: "cello_case" },
      { id: "book", label: "Sign-out book", text: "Who borrowed which instrument.", clue: "cello_label", requires: "cello_case" }
    ]}
  ],
  interviews: {
    dmitri: [
      { id: "d1", q: "Where were you this afternoon?", a: "In room 5 the whole time. I never came out. I have a final tomorrow." },
      { id: "d2", q: "Why did you sign out a cello case?", a: "For a friend. He needed to move some books.", requires: "cello_label" },
      { id: "d3", q: "Sam saw you wheel it into the storeroom", a: "(A long pause.) I wasn’t going to keep it. I just wanted one fair final.", requires: "sam_saw" }
    ],
    helen: [
      { id: "h1", q: "Where were you at 14:15?", a: "In the faculty meeting from two until three. Deeply boring and fully minuted.", clue: "helen_meeting" },
      { id: "h2", q: "Who plays in the final?", a: "Mei and Dmitri. Without the Nightingale, Mei plays a student violin against his Gagliano.", clue: "dmitri_rival" },
      { id: "h3", q: "Does Dmitri play the cello?", a: "Dmitri? He couldn’t tell a cello from a coat stand.", requires: "cello_label", clue: "dmitri_no_cello" }
    ],
    sam: [
      { id: "s1", q: "Where were you this afternoon?", a: "Mopping downstairs. The cameras will show you.", clue: "sam_cctv" },
      { id: "s2", q: "Did you see anything upstairs?", a: "When I went for a bucket, about quarter past two, a dark-haired lad was wheeling a cello case into the storeroom. Didn’t think anything of it.", clue: "sam_saw" }
    ],
    lotte: [
      { id: "l1", q: "Where were you?", a: "The library, all afternoon. Check the gate.", clue: "lotte_library" },
      { id: "l2", q: "Were you upset about the final?", a: "One mark. Of course I was. But Mei is my best friend." }
    ]
  },
  evidence: [
    { id: "receipt", name: "Mei’s coffee receipt", kind: "Document", desc: "From the conservatoire café.", detail: "Queued from 14:07. Paid 14:26. Flat white.\nMei left room 4 unlocked the whole time.", clue: "room_unlocked" },
    { id: "case", name: "Mei’s violin case", kind: "Physical", desc: "Open, empty, the bow still clipped in the lid.", detail: "The thief took the violin but left the bow. They weren’t planning to play it." },
    { id: "sheet", name: "Practice sign-in sheet", kind: "Document", requires: "signin", desc: "Thursday afternoon.", detail: "Rm 4  M. Tanaka  13:30 –\nRm 5  D. Volkov  13:50 – 14:40\nRm 6  (empty)" },
    { id: "rosin", name: "Rosin sample", kind: "Physical", requires: "rosin", desc: "Scraped from the door handle.", detail: "Dark amber rosin. Mei uses pale gold. The block in room 5 is dark amber." },
    { id: "cello", name: "Orchestra cello case", kind: "Physical", requires: "cello_case", desc: "Where the violin was hidden.", detail: "Wheeled hard case, no cello inside. The violin was wrapped in a grey scarf." }
  ],
  timeline: [
    { t: "13:50", text: "Dmitri signs into room 5.", src: "Sign-in sheet", requires: "signin" },
    { t: "14:05", text: "Mei leaves room 4 unlocked to get coffee.", src: "Mei", requires: "room_unlocked" },
    { t: "14:10", text: "Dmitri says he never left room 5.", src: "Dmitri’s statement", claim: true, key: true },
    { t: "14:15", text: "A young man wheels a cello case into the storeroom.", src: "Sam", requires: "sam_saw", key: true },
    { t: "14:30", text: "Mei returns. The Nightingale is gone.", src: "Mei" },
    { t: "14:40", text: "Dmitri signs out of room 5.", src: "Sign-in sheet", requires: "signin" }
  ],
  hints: [
    "The thief touched the door on the way in. What did they leave on the handle?",
    "A violin is hard to carry out unnoticed. What bigger case could hide it?",
    "The caretaker went upstairs once. Ask him what he saw."
  ],
  motives: [
    { id: "win", label: "To make Mei play the final on a worse violin" },
    { id: "money", label: "To sell a valuable violin" },
    { id: "keep", label: "To keep the violin for herself" },
    { id: "bitter", label: "Bitterness at missing the final" }
  ],
  solution: {
    culprit: "dmitri", motive: "win",
    keyClues: ["rosin", "cello_case", "cello_label", "dmitri_no_cello", "sam_saw"],
    story: [
      "Dmitri Volkov wanted to win the Kingsley Prize, and the Nightingale gave Mei an edge. On Monday he signed out an empty cello case.",
      "When Mei went for coffee he slipped next door, leaving dark rosin on the handle, wrapped the violin in his scarf and put it in the cello case. At 14:15 he wheeled it into the storeroom, then went back to room 5 to practise."
    ],
    proof: [
      { clue: "rosin", text: "Dark rosin from room 5 was on room 4’s handle." },
      { clue: "cello_case", text: "The violin was hidden in a cello case." },
      { clue: "cello_label", text: "That case was signed out to Dmitri." },
      { clue: "dmitri_no_cello", text: "He doesn’t play the cello." },
      { clue: "sam_saw", text: "Sam saw a young man wheel it into the storeroom at 14:15." },
      { clue: "helen_meeting", text: "Prof. Ashdown was in a meeting." },
      { clue: "lotte_library", text: "Lotte was in the library." }
    ]
  }
}
);
