CASES.push(
{
  id: "bellweather", number: "CF-2288", title: "Blackmail at Bellweather", kind: "Blackmail", difficulty: "Standard",
  tagline: "A university head receives letters threatening to expose a thirty-year-old secret.",
  place: "Bellweather College, Oxbridge Road", when: "Monday 4 November, 09:00",
  brief: [
    "Since September, Vice-Chancellor Rupert Gale has received three typed letters. Each claims that his 1994 doctoral thesis copied large parts of another student’s work, and each threatens to go to the press.",
    "The first two letters demanded £50,000. The third changed its demand. Gale wants the writer found without a scandal."
  ],
  victim: { name: "Rupert Gale", age: 58, role: "Vice-Chancellor of Bellweather College", found: "Three letters in his post since September", cause: "Blackmail over his 1994 thesis." },
  facts: [
    "Gale’s 1994 thesis is kept in the college’s special collections archive.",
    "Archive boxes can only be opened by signing the access register.",
    "College post is franked by machine in the post room, with a numbered meter.",
    "Gale has proposed closing special collections to save money."
  ],
  suspects: [
    { id: "wren", name: "Dr. Ada Wren", age: 57, role: "Special collections librarian", background: "Has run the archive for twenty-two years.", motive: "None known.", relation: "Works under Gale’s management.", alibi: "Says she has never seen the thesis." },
    { id: "linden", name: "Paul Linden", age: 50, role: "College registrar", background: "Handles admissions and records.", motive: "Passed over when Gale was made Vice-Chancellor.", relation: "Former rival for the top job.", alibi: "Says he was on leave for part of the autumn." },
    { id: "jai", name: "Jai Mehta", age: 27, role: "PhD student", background: "Researches the history of academic citation.", motive: "Could have stumbled on the copying.", relation: "Gale sits on his review panel.", alibi: "Says he only read the thesis for his research." },
    { id: "hart", name: "Prof. Simon Hart", age: 70, role: "Retired professor", background: "Supervised the student whose work Gale is said to have copied.", motive: "Has always suspected Gale.", relation: "Old enemies.", alibi: "Says he lives in Portugal now." }
  ],
  clues: {
    letters_typed: { title: "The letters were typed, with a broken “e”", text: "All three letters were typed on a manual typewriter. Every lower-case “e” sits slightly below the line." },
    typewriter: { title: "The archive typewriter drops its “e”", text: "Special collections still uses an old Olivetti for labels. Its “e” prints low, exactly like the letters.", key: true },
    franking: { title: "Envelopes franked by the library meter", text: "The franking marks on all three envelopes carry meter number 07, which belongs to the library.", key: true },
    access_log: { title: "Only two people opened the 1994 box", text: "The access register shows the 1994 thesis box opened by Jai Mehta in May and by Ada Wren in August.", key: true },
    third_letter: { title: "The third letter wants the archive saved", text: "The third letter drops the money demand: “Withdraw your plan to close special collections, or the world reads your thesis.”", key: true },
    closure_plan: { title: "Gale plans to close special collections", text: "Council papers show Gale’s plan to close the archive and make its staff redundant in January.", key: true },
    wren_petition: { title: "Wren organised a petition against closure", text: "Ada Wren collected 3,000 signatures against the closure. Gale ignored it." },
    jai_research: { title: "Jai reported the copying to his supervisor", text: "Jai noticed the copying in May and reported it properly to his supervisor, who advised him to wait." },
    linden_leave: { title: "Linden was abroad when letter two was posted", text: "Linden was on holiday in Canada from 1 to 20 October. Letter two was franked on 10 October." },
    linden_grudge: { title: "Linden lost the top job to Gale", text: "Linden applied to be Vice-Chancellor and lost to Gale. Colleagues say he is still bitter." },
    hart_portugal: { title: "Hart hasn’t been in England since spring", text: "Hart’s passport and bank records put him in Portugal since April. The letters were franked in college." }
  },
  locations: [
    { id: "vcoffice", name: "Vice-Chancellor’s Office", desc: "Panelled walls, a large desk and the three letters in a folder.", spots: [
      { id: "letters", label: "The three letters", text: "You compare the typing on all three letters.", clue: "letters_typed" },
      { id: "third", label: "The third letter", text: "It reads differently from the first two.", clue: "third_letter" },
      { id: "envelopes", label: "The envelopes", text: "Franked, not stamped. You note the meter number.", clue: "franking" }
    ]},
    { id: "archive", name: "Special Collections", desc: "A quiet reading room, archive boxes and a label typewriter.", spots: [
      { id: "olivetti", label: "The label typewriter", text: "You type a test line on the old Olivetti.", clue: "typewriter" },
      { id: "register", label: "Access register", text: "Who opened which box, and when.", clue: "access_log" },
      { id: "noticeboard", label: "Noticeboard", text: "“SAVE SPECIAL COLLECTIONS. Sign the petition.”", clue: "wren_petition" }
    ]},
    { id: "council", name: "Council Room", desc: "The college governing council’s papers are filed here.", spots: [
      { id: "papers", label: "Council papers", text: "Minutes and proposals from this term.", clue: "closure_plan" }
    ]}
  ],
  interviews: {
    wren: [
      { id: "w1", q: "Have you read Gale’s thesis?", a: "Never. Why would I?" },
      { id: "w2", q: "What do you think of the closure plan?", a: "It’s vandalism. Two hundred years of collections, boxed up and sold. I got three thousand signatures. He didn’t read one.", clue: "wren_petition" },
      { id: "w3", q: "The register says you opened the 1994 box in August", a: "…Checking the condition of the boxes. It’s my job.", requires: "access_log" },
      { id: "w4", q: "The letters were typed on your Olivetti and franked by your meter", a: "(She takes off her glasses.) He was going to destroy everything I’ve looked after. I wanted him to know what it’s like to lose it all.", requires: ["typewriter", "franking"] }
    ],
    linden: [
      { id: "l1", q: "How do you feel about Gale?", a: "He got the job I wanted. I’m over it. Mostly.", clue: "linden_grudge" },
      { id: "l2", q: "Where were you in October?", a: "Canada, the first three weeks. Visiting my daughter.", clue: "linden_leave" }
    ],
    jai: [
      { id: "j1", q: "Why did you read the 1994 thesis?", a: "My research is on citation. I noticed whole pages matching an earlier thesis, so I reported it to my supervisor in May. She said to wait.", clue: "jai_research" },
      { id: "j2", q: "Did you write to Gale?", a: "No. I did it by the book. Blackmail would ruin my career." }
    ],
    hart: [
      { id: "h1", q: "Where have you been this autumn?", a: "In Portugal, growing tomatoes. I haven’t set foot in England since April.", clue: "hart_portugal" },
      { id: "h2", q: "Did Gale copy the work?", a: "I always thought so. But I’m seventy. I have better things to do than write letters." }
    ]
  },
  evidence: [
    { id: "letter1", name: "First letter", kind: "Document", desc: "Received 12 September.", detail: "“Your thesis is not your own. £50,000 or the press has it.” The “e”s sit low." },
    { id: "letter3", name: "Third letter", kind: "Document", requires: "third_letter", desc: "Received 1 November.", detail: "“Withdraw your plan to close special collections, or the world reads your thesis.”" },
    { id: "register", name: "Archive access register", kind: "Document", requires: "access_log", desc: "Box 1994/G.", detail: "14 May  J. Mehta (research)\n19 Aug  A. Wren (condition check)" },
    { id: "minutes", name: "Council paper C/41", kind: "Document", requires: "closure_plan", desc: "Proposal to close special collections.", detail: "Close by January. Collections to be sold or transferred. Two posts redundant, including the librarian’s." },
    { id: "meter", name: "Franking meter log", kind: "Digital", requires: "franking", desc: "Post room records.", detail: "Meter 07: Library. Franked items on 11 Sep, 10 Oct and 31 Oct include one letter to the VC’s office each time." }
  ],
  timeline: [
    { t: "14 May", text: "Jai reads the 1994 thesis and reports the copying.", src: "Register", requires: "jai_research" },
    { t: "19 Aug", text: "Ada Wren opens the 1994 thesis box.", src: "Register", requires: "access_log", key: true },
    { t: "1 Sep", text: "Ada Wren says she has never read Gale’s thesis.", src: "Wren’s statement", claim: true, key: true },
    { t: "11 Sep", text: "Letter one is franked on the library meter.", src: "Meter log", requires: "franking" },
    { t: "10 Oct", text: "Letter two is franked. Linden is in Canada.", src: "Meter log", requires: "linden_leave" },
    { t: "31 Oct", text: "Letter three is franked. It demands the archive stays open.", src: "Meter log", requires: "third_letter" },
    { t: "4 Nov", text: "Gale calls you in.", src: "Gale" }
  ],
  hints: [
    "The letters were typed on something unusual. Where in college is there still a typewriter?",
    "Envelopes that are franked carry a meter number. Whose meter is it?",
    "Read the third letter carefully. What does the writer really want?"
  ],
  motives: [
    { id: "archive", label: "To stop the archive being closed" },
    { id: "job", label: "Revenge for losing the top job" },
    { id: "money", label: "To extort money" },
    { id: "justice", label: "Justice for a former student" }
  ],
  solution: {
    culprit: "wren", motive: "archive",
    keyClues: ["typewriter", "franking", "access_log", "third_letter", "closure_plan"],
    story: [
      "Ada Wren learned that Gale planned to close special collections and make her redundant. In August she read his 1994 thesis in her own archive and found the copying Jai had noticed.",
      "She typed the letters on the archive’s old Olivetti and sent them through the library’s franking meter. The money demands were cover. The third letter showed what she really wanted: keep the archive open."
    ],
    proof: [
      { clue: "typewriter", text: "The archive’s typewriter drops its “e” exactly like the letters." },
      { clue: "franking", text: "All three envelopes went through the library meter." },
      { clue: "access_log", text: "She opened the thesis box in August, despite saying she never read it." },
      { clue: "third_letter", text: "The last letter demands the archive be saved." },
      { clue: "closure_plan", text: "The closure would end her job and her collections." },
      { clue: "linden_leave", text: "Linden was abroad when letter two was posted." },
      { clue: "hart_portugal", text: "Hart hasn’t been in England since April." }
    ]
  }
},
{
  id: "northwind", number: "CF-0990", title: "Code Red at Northwind Labs", kind: "Data theft", difficulty: "Hard",
  tagline: "A biotech’s secret vaccine formula turns up at a rival, printed under an intern’s name.",
  place: "Northwind Labs, Cambridge Science Park", when: "Monday 18 March, 08:30",
  brief: [
    "Northwind Labs has spent four years developing a new flu vaccine. On Monday a rival company, Halcyon Bio, filed a patent using Northwind’s exact formula.",
    "Northwind’s documents carry a hidden watermark for every printed copy. The one Halcyon used was printed at 19:42 on Tuesday 12 March, under the login of an intern who was across town at his graduation dinner."
  ],
  victim: { label: "Target", name: "Formula NW-7", age: null, role: "Northwind’s vaccine formula", found: "In a rival company’s patent filing", cause: "Leaked from a printed copy made on 12 March." },
  facts: [
    "Every printed document carries an invisible watermark naming the printer, user and time.",
    "Doors on the second floor open with staff ID badges.",
    "An outside security contractor audits the building’s systems.",
    "The second-floor corridor camera covers the printer."
  ],
  suspects: [
    { id: "dana", name: "Dana Kerr", age: 41, role: "Security contractor", background: "Runs a small firm that tests Northwind’s security.", motive: "None known.", relation: "Contractor for two years.", alibi: "Says she was at home on 12 March." },
    { id: "leo", name: "Leo Park", age: 23, role: "Intern", background: "A summer intern kept on over the winter.", motive: "The print was made under his login.", relation: "Junior staff.", alibi: "Says he was at his graduation dinner." },
    { id: "raj", name: "Raj Menon", age: 45, role: "Chief technology officer", background: "Co-founder. Recently fell out with the CEO.", motive: "Talk that he might leave to join a rival.", relation: "Co-founder.", alibi: "Says he was flying to Boston." },
    { id: "ines", name: "Inés Soler", age: 38, role: "Lab manager", background: "Runs the vaccine lab.", motive: "Found with the formula on a USB stick.", relation: "Six years at Northwind.", alibi: "Says she left at 18:00." }
  ],
  clues: {
    watermark: { title: "Leaked copy printed 12 March, 19:42", text: "The watermark on Halcyon’s copy: printer 2F, user lpark, 12 March 19:42." },
    leo_dinner: { title: "Leo was at his graduation dinner", text: "Photos and the restaurant bill place Leo at a dinner across town from 19:00 to 23:00." },
    badge_used: { title: "Leo’s badge opened the 2F door at 19:40", text: "The door system shows Leo’s badge used on the second floor at 19:40, while his real badge was in his coat pocket at dinner.", key: true },
    badge_lent: { title: "Dana borrowed Leo’s badge “for a test”", text: "Leo says Dana asked to borrow his badge for ten minutes last week “to test the readers”.", key: true },
    cloner: { title: "A badge-cloning device in Dana’s kit", text: "Dana’s equipment case holds a handheld card cloner, and its memory stores a copy of Leo’s badge.", key: true },
    camera_gap: { title: "2F camera off 19:30–20:00 for “maintenance”", text: "The 2F corridor camera was switched off from 19:30 to 20:00. The maintenance ticket was raised by Dana Kerr.", key: true },
    payment: { title: "£90,000 from a Halcyon shell company", text: "Dana’s firm received £90,000 on 14 March from “Harrow Lane Consulting”, a company owned by Halcyon’s chairman.", key: true },
    raj_flight: { title: "Raj was on a flight to Boston", text: "Raj boarded a 17:55 flight from Heathrow on 12 March." },
    raj_quarrel: { title: "Raj fell out with the CEO", text: "Raj and the CEO argued over funding. Staff heard shouting." },
    ines_usb: { title: "Inés had the formula on a USB stick", text: "Security found a USB stick in Inés’s bag with the formula on it." },
    ines_approved: { title: "The USB backups were approved", text: "The CEO approved weekly encrypted USB backups by the lab manager. The stick is encrypted and has never been plugged in elsewhere." }
  },
  locations: [
    { id: "print", name: "Second-Floor Print Room", desc: "A large printer, a shredder and a secure bin.", spots: [
      { id: "printer", label: "Printer 2F job log", text: "Job 19:42: “NW-7 full formula”, 34 pages, user lpark.", clue: "watermark" },
      { id: "bin", label: "Secure shredding bin", text: "No copy of the 19:42 print. Someone took all 34 pages away." }
    ]},
    { id: "secdesk", name: "Security Desk", desc: "Door-access system and camera controls.", spots: [
      { id: "doors", label: "Door-access log", text: "Every badge swipe on every door.", clue: "badge_used" },
      { id: "cameras", label: "Camera maintenance tickets", text: "Who switched which camera off, and why.", clue: "camera_gap" }
    ]},
    { id: "contractor", name: "Contractor’s Room", desc: "A small room where Dana keeps her testing equipment.", spots: [
      { id: "case", label: "Dana’s equipment case", text: "Laptops, cables and handheld radio devices.", clue: "cloner", requires: "badge_lent" },
      { id: "desk", label: "Desk", text: "Printed audit reports, all signed by Dana." }
    ]},
    { id: "lab", name: "Vaccine Lab", desc: "Benches, fridges and a locked data cabinet.", spots: [
      { id: "cabinet", label: "Data cabinet", text: "A backup log signed by Inés, countersigned by the CEO.", clue: "ines_approved" }
    ]}
  ],
  interviews: {
    dana: [
      { id: "d1", q: "Where were you on 12 March?", a: "At home. I don’t work evenings unless there’s a test booked." },
      { id: "d2", q: "The 2F camera was switched off on your ticket", a: "Routine firmware update. It happens every few months.", requires: "camera_gap" },
      { id: "d3", q: "Why is Leo’s badge stored in your cloner?", a: "It’s a test device. It stores lots of badges.", requires: "cloner" },
      { id: "d4", q: "Show her the Halcyon payment", a: "(She closes her laptop.) This conversation is over until my lawyer arrives.", requires: "payment" }
    ],
    leo: [
      { id: "l1", q: "Where were you on 12 March?", a: "My graduation dinner, seven till eleven. There are about two hundred photos.", clue: "leo_dinner" },
      { id: "l2", q: "Has anyone else had your badge?", a: "Dana borrowed it last week, for ten minutes. She said she was testing the door readers.", clue: "badge_lent" }
    ],
    raj: [
      { id: "r1", q: "Where were you on 12 March?", a: "On a plane to Boston. 17:55 from Heathrow.", clue: "raj_flight" },
      { id: "r2", q: "Were you planning to leave?", a: "I argued with the CEO about money. That doesn’t make me a thief.", clue: "raj_quarrel" }
    ],
    ines: [
      { id: "i1", q: "Why was the formula on your USB stick?", a: "Weekly backups, encrypted. The CEO asked me to do it after the flood last year.", clue: "ines_usb" },
      { id: "i2", q: "When did you leave on 12 March?", a: "Six o’clock. I had a parents’ evening." }
    ]
  },
  evidence: [
    { id: "patent", name: "Halcyon’s patent filing", kind: "Document", desc: "Filed Friday 15 March.", detail: "The formula matches NW-7 exactly. Page scans still show the faint watermark." },
    { id: "doorlog", name: "Door-access extract", kind: "Digital", requires: "badge_used", desc: "12 March, second floor.", detail: "19:40  2F-East  L. Park\n19:58  2F-East (exit)  L. Park" },
    { id: "ticket", name: "Camera maintenance ticket", kind: "Digital", requires: "camera_gap", desc: "Ticket #4471.", detail: "Camera 2F-C off 19:30–20:00. Reason: firmware. Raised by D. Kerr." },
    { id: "cloner", name: "Handheld card cloner", kind: "Physical", requires: "cloner", desc: "From Dana’s equipment case.", detail: "Stored credentials: 14. Slot 9: L. PARK, copied 5 March.", clue: "payment" },
    { id: "photos", name: "Graduation dinner photos", kind: "Digital", requires: "leo_dinner", desc: "From Leo’s friends.", detail: "Leo in every group shot from 19:05 to 22:50." }
  ],
  timeline: [
    { t: "17:55", text: "Raj’s flight leaves Heathrow.", src: "Airline", requires: "raj_flight" },
    { t: "19:00", text: "Leo arrives at his graduation dinner.", src: "Photos", requires: "leo_dinner" },
    { t: "19:00", text: "Dana says she was at home all evening.", src: "Dana’s statement", claim: true, key: true },
    { t: "19:30", text: "The 2F corridor camera is switched off on Dana’s ticket.", src: "Ticket", requires: "camera_gap", key: true },
    { t: "19:40", text: "“Leo’s” badge opens the second-floor door.", src: "Door log", requires: "badge_used" },
    { t: "19:42", text: "The formula is printed under Leo’s login.", src: "Printer log", requires: "watermark" },
    { t: "20:00", text: "The camera comes back on.", src: "Ticket", requires: "camera_gap" }
  ],
  hints: [
    "Leo couldn’t have been in two places at once. So who was using his identity?",
    "The camera over the printer went dark at just the right time. Who arranged that?",
    "Ask Leo if anyone has had his badge, then look at that person’s equipment."
  ],
  motives: [
    { id: "paid", label: "Paid by the rival company" },
    { id: "defect", label: "To take the formula to a new job" },
    { id: "revenge", label: "Revenge on the CEO" },
    { id: "careless", label: "No motive: a careless backup" }
  ],
  solution: {
    culprit: "dana", motive: "paid",
    keyClues: ["badge_lent", "cloner", "camera_gap", "badge_used", "payment"],
    story: [
      "Halcyon’s chairman paid Dana Kerr to get Northwind’s formula. As the security contractor, she knew every weakness in the building.",
      "She borrowed Leo’s badge “for a test” and cloned it. On 12 March she raised a ticket to switch off the second-floor camera from 19:30, used the cloned badge at 19:40, printed the formula under Leo’s login and walked out with it. Two days later her firm was paid £90,000."
    ],
    proof: [
      { clue: "badge_used", text: "Leo’s badge was used while he was at dinner, so it was a copy." },
      { clue: "badge_lent", text: "Dana borrowed Leo’s badge the week before." },
      { clue: "cloner", text: "Her cloner holds a copy of Leo’s badge." },
      { clue: "camera_gap", text: "She switched off the camera over the printer." },
      { clue: "payment", text: "She was paid £90,000 by a Halcyon company." },
      { clue: "raj_flight", text: "Raj was on a plane." },
      { clue: "ines_approved", text: "Inés’s backups were approved and encrypted." }
    ]
  }
},
{
  id: "duchess", number: "CF-0102", title: "The Mayor’s Missing Cat", kind: "Theft", difficulty: "Easy",
  tagline: "The mayor’s prize-winning Persian vanishes from the town hall the day before the cat show.",
  place: "Pennywell Town Hall", when: "Friday 7 October, 17:00",
  brief: [
    "Duchess, a white Persian cat, is Mayor Hollis’s pride and joy and a three-time county champion. She spends her days asleep on the mayor’s office windowsill.",
    "At 17:00, the mayor came back from a meeting and Duchess was gone. The county cat show is tomorrow morning."
  ],
  victim: { label: "Missing", name: "Duchess", age: 4, role: "White Persian cat, three-time county champion", found: "Missing from the mayor’s office", cause: "Last seen at 15:30." },
  facts: [
    "The mayor’s office is on the ground floor, overlooking the back car park.",
    "The back door is used for deliveries.",
    "Pennywell’s other famous cat breeder also has a champion entered tomorrow.",
    "Duchess only comes to people who feed her."
  ],
  suspects: [
    { id: "gloria", name: "Gloria Pemberly", age: 66, role: "Cat breeder", background: "Breeds Persians and sells her own brand of cat food, “Pemberly’s Pampered Puss”.", motive: "Her cat Snowdrop has come second to Duchess three years running.", relation: "The mayor’s rival at every show.", alibi: "Says she was at home grooming Snowdrop all afternoon." },
    { id: "barnaby", name: "Barnaby Fitch", age: 29, role: "Mayor’s aide", background: "Organised and ambitious.", motive: "Allergic to cats. Has complained about Duchess for months.", relation: "Shares the mayor’s outer office.", alibi: "Says he was in the council meeting." },
    { id: "rosa", name: "Rosa Mendes", age: 52, role: "Cleaner", background: "Cleans the town hall every afternoon.", motive: "Duchess once scratched her badly.", relation: "Feeds Duchess treats when the mayor isn’t looking.", alibi: "Says she was cleaning upstairs." },
    { id: "alfie", name: "Alfie Brooks", age: 11, role: "Paperboy", background: "Delivers the evening paper to the town hall.", motive: "Once said Duchess was “the best cat in the world”.", relation: "Visits Duchess every day.", alibi: "Says he was on his paper round." }
  ],
  clues: {
    window_ajar: { title: "The window was open, with white fur on the sill", text: "The office window is open a few inches. White Persian fur is caught on the latch." },
    tuna_trail: { title: "A trail of tuna flakes", text: "Flakes of tuna lead from under the window across the car park." },
    tuna_tin: { title: "An empty tin of “Pampered Puss” tuna", text: "In the car park bin: an empty tin of Pemberly’s Pampered Puss premium tuna. It is only sold at Gloria’s shop.", key: true },
    carrier_seen: { title: "A lady with a pink cat carrier at 16:10", text: "Alfie saw a grey-haired lady hurry out of the car park with a pink cat carrier at about 16:10.", key: true },
    pink_carrier: { title: "Gloria owns a pink carrier", text: "Every photo of Gloria at a cat show shows her with the same bright pink carrier.", key: true },
    gloria_car: { title: "Gloria’s car in the car park at 16:05", text: "The car park ticket machine issued a ticket to Gloria’s green Morris at 16:02, and it left at 16:14.", key: true },
    found_duchess: { title: "Duchess found in Gloria’s conservatory", text: "Behind Gloria’s house, in the conservatory: Duchess, fed on tuna and asleep in a basket.", key: true },
    barnaby_allergy: { title: "Barnaby is allergic to Duchess", text: "Barnaby has asked three times for Duchess to be kept out of the office." },
    barnaby_meeting: { title: "Barnaby was in the meeting 15:30–17:00", text: "The meeting minutes list Barnaby taking notes from start to finish." },
    rosa_upstairs: { title: "Rosa was upstairs all afternoon", text: "The upstairs staff saw Rosa cleaning from 15:00 to 17:00." },
    alfie_round: { title: "Alfie was on his round", text: "Alfie delivered the town hall paper at 16:10, then carried on down the high street." }
  },
  locations: [
    { id: "office", name: "The Mayor’s Office", desc: "A big desk, a chain of office on a hook and an empty cushion on the windowsill.", spots: [
      { id: "window", label: "Windowsill", text: "Duchess’s cushion, still warm from the sun. The window is ajar.", clue: "window_ajar" },
      { id: "desk", label: "Mayor’s desk", text: "A framed photo of Duchess with her rosettes." }
    ]},
    { id: "carpark", name: "Back Car Park", desc: "A small car park with a ticket machine and a bin.", spots: [
      { id: "ground", label: "Ground under the window", text: "Little brown flakes on the tarmac.", clue: "tuna_trail" },
      { id: "bin", label: "Litter bin", text: "Something smells fishy.", clue: "tuna_tin" },
      { id: "machine", label: "Ticket machine", text: "You ask the council for the machine’s log.", clue: "gloria_car" }
    ]},
    { id: "gloria", name: "Gloria’s House", desc: "A cottage full of rosettes, with a conservatory at the back.", spots: [
      { id: "photos", label: "Show photos in the hallway", text: "Gloria and Snowdrop at every show, always with the same carrier.", clue: "pink_carrier" },
      { id: "conservatory", label: "The conservatory", text: "With the carrier and the tin, you have enough to ask to look around.", clue: "found_duchess", requires: ["tuna_tin", "carrier_seen"] }
    ]}
  ],
  interviews: {
    gloria: [
      { id: "g1", q: "Where were you this afternoon?", a: "At home, grooming Snowdrop for tomorrow. She’ll win this year, you know." },
      { id: "g2", q: "Show her the tuna tin", a: "Lots of people buy my tuna. It’s very popular.", requires: "tuna_tin" },
      { id: "g3", q: "Your car was in the town hall car park", a: "I… was posting a letter.", requires: "gloria_car" },
      { id: "g4", q: "Duchess was in your conservatory", a: "I was going to give her back after the show! I just wanted Snowdrop to win once.", requires: "found_duchess" }
    ],
    barnaby: [
      { id: "b1", q: "How do you feel about Duchess?", a: "I’m allergic. I sneeze all day. I’ve asked for her to be kept out. But I wouldn’t steal her.", clue: "barnaby_allergy" },
      { id: "b2", q: "Where were you this afternoon?", a: "Taking the minutes in the council meeting, half three to five.", clue: "barnaby_meeting" }
    ],
    rosa: [
      { id: "r1", q: "Where were you this afternoon?", a: "Upstairs all afternoon. Ask the girls in the planning office.", clue: "rosa_upstairs" },
      { id: "r2", q: "Did you ever feed Duchess?", a: "Only little treats. Don’t tell the mayor. She likes fish best." }
    ],
    alfie: [
      { id: "a1", q: "Where were you this afternoon?", a: "My paper round. I did the town hall at ten past four.", clue: "alfie_round" },
      { id: "a2", q: "Did you see anything?", a: "A lady with grey hair ran out of the car park with a pink cat box. She nearly knocked me off my bike!", clue: "carrier_seen" }
    ]
  },
  evidence: [
    { id: "fur", name: "Fur from the latch", kind: "Physical", requires: "window_ajar", desc: "A tuft of white fur.", detail: "Long white Persian fur. It belongs to Duchess." },
    { id: "tin", name: "Empty tuna tin", kind: "Physical", requires: "tuna_tin", desc: "From the car park bin.", detail: "Pemberly’s Pampered Puss, Premium Tuna. “Only at Pemberly’s, 4 Mill Street.”" },
    { id: "ticket", name: "Car park machine log", kind: "Digital", requires: "gloria_car", desc: "Friday afternoon.", detail: "16:02  Ticket issued: green Morris Minor (G. Pemberly)\n16:14  Exit" },
    { id: "minutes", name: "Council meeting minutes", kind: "Document", requires: "barnaby_meeting", desc: "Friday 15:30.", detail: "Present: Mayor Hollis, six councillors. Minutes taken by B. Fitch." }
  ],
  timeline: [
    { t: "15:30", text: "The mayor leaves Duchess asleep on the windowsill.", src: "Mayor" },
    { t: "15:30", text: "Barnaby takes minutes at the council meeting.", src: "Minutes", requires: "barnaby_meeting" },
    { t: "16:00", text: "Gloria says she was at home grooming Snowdrop.", src: "Gloria’s statement", claim: true, key: true },
    { t: "16:02", text: "Gloria’s car enters the town hall car park.", src: "Ticket machine", requires: "gloria_car", key: true },
    { t: "16:10", text: "A lady with a pink carrier hurries out of the car park.", src: "Alfie", requires: "carrier_seen" },
    { t: "16:14", text: "Gloria’s car leaves.", src: "Ticket machine", requires: "gloria_car" },
    { t: "17:00", text: "The mayor returns. Duchess is gone.", src: "Mayor" }
  ],
  hints: [
    "Duchess only goes to people who feed her. Follow the food.",
    "Someone left something in the bin that’s only sold in one shop.",
    "The paperboy was nearby at the right moment. Ask him what he saw."
  ],
  motives: [
    { id: "show", label: "To win the cat show" },
    { id: "allergy", label: "To get rid of a cat that causes allergies" },
    { id: "scratch", label: "Revenge for a scratch" },
    { id: "love", label: "To keep a cat he adored" }
  ],
  solution: {
    culprit: "gloria", motive: "show",
    keyClues: ["tuna_tin", "carrier_seen", "pink_carrier", "gloria_car", "found_duchess"],
    story: [
      "Gloria Pemberly’s Snowdrop had come second to Duchess three years running. The day before the show, she drove to the town hall at 16:02 with her pink carrier and a tin of her own tuna.",
      "She tempted Duchess off the windowsill with a trail of tuna, bundled her into the carrier and hurried to her car, nearly knocking Alfie off his bike. She threw the empty tin in the bin on the way. Duchess spent the night in Gloria’s conservatory."
    ],
    proof: [
      { clue: "tuna_tin", text: "The tuna is only sold at Gloria’s shop." },
      { clue: "gloria_car", text: "Her car was in the car park from 16:02 to 16:14." },
      { clue: "carrier_seen", text: "A grey-haired lady ran off with a pink carrier at 16:10." },
      { clue: "pink_carrier", text: "Gloria always uses a pink carrier." },
      { clue: "found_duchess", text: "Duchess was found in her conservatory." },
      { clue: "barnaby_meeting", text: "Barnaby was in the meeting throughout." }
    ]
  }
},
{
  id: "dig", number: "CF-1776", title: "Death at the Dig Site", kind: "Murder", difficulty: "Standard",
  tagline: "An archaeologist dies when a trench wall collapses, but the props were cut.",
  place: "Tell Qasr al-Nur excavation", when: "Thursday 21 March, 06:00",
  brief: [
    "Professor Harold Finch had led the dig at Tell Qasr al-Nur for twelve seasons. At 06:00 the workers found him in trench 4, under a collapsed wall of earth. He had been dead for about an hour.",
    "The trench walls are held up with timber props. At first it looked like an accident. Then the foreman noticed the props had been sawn through."
  ],
  victim: { name: "Prof. Harold Finch", age: 64, role: "Excavation director", found: "Trench 4, under a collapsed trench wall", cause: "Crushed when the wall collapsed. The props had been cut." },
  facts: [
    "Every object found is numbered, photographed and entered in the find register.",
    "Finds leave the site only in sealed crates, with export paperwork.",
    "A night guard patrols the camp and keeps a log.",
    "Finch had asked for a meeting with the antiquities inspector on Friday."
  ],
  suspects: [
    { id: "celia", name: "Dr. Celia Moran", age: 48, role: "Deputy director", background: "Runs the find register and the export paperwork.", motive: "None known.", relation: "Finch’s deputy for eight seasons.", alibi: "Says she was asleep in her tent until 06:00." },
    { id: "karim", name: "Karim Haddad", age: 50, role: "Site foreman", background: "Has run the dig crew for twenty years.", motive: "Argued loudly with Finch about wages.", relation: "Respected each other, but clashed often.", alibi: "Says he was at home in the village." },
    { id: "ellie", name: "Ellie Voss", age: 25, role: "Doctoral student", background: "Writing her thesis on the site’s pottery.", motive: "Finch had criticised her thesis harshly.", relation: "Her supervisor.", alibi: "Says she was on night-watch duty with the guard." },
    { id: "tom", name: "Tom Reilly", age: 40, role: "Site photographer", background: "Photographs every find for the register.", motive: "Finch refused to renew his contract.", relation: "Colleague.", alibi: "Says he was asleep in his tent." }
  ],
  clues: {
    props_cut: { title: "The trench props were sawn through", text: "Three timber props in trench 4 were cut most of the way through, so the wall would collapse under the slightest weight.", key: true },
    saw_found: { title: "A pruning saw with fresh sawdust", text: "In Celia’s tool roll: a small pruning saw with fresh pine sawdust in its teeth. The props are pine.", key: true },
    register_gap: { title: "Pages cut from the find register", text: "Finds 205 to 218 have been cut out of the register with a blade." },
    photo_212: { title: "Tom’s photo of find 212: a gold scarab", text: "Tom’s camera archive has photos of finds 205–218, including find 212, a gold scarab." },
    catalogue: { title: "Find 212 is for sale in London", text: "A London auction catalogue offers a gold scarab “from an old private collection”. It matches Tom’s photo exactly.", key: true },
    celia_email: { title: "Celia’s email: “next shipment with the pottery”", text: "On Celia’s laptop: “Next shipment goes with the pottery samples. Same arrangement.” Sent to a London dealer.", key: true },
    crate_amulet: { title: "A gold amulet hidden in the pottery crate", text: "The sealed pottery sample crate, signed off by Celia, has a gold amulet hidden under the potsherds.", key: true },
    guard_log: { title: "Guard saw Celia at trench 4 at 04:30", text: "The night guard’s log: “04:30. Dr. Moran walking to trench 4 with a torch. Said she couldn’t sleep.”", key: true },
    inspector_meeting: { title: "Finch booked the antiquities inspector", text: "Finch’s diary: “Friday. Inspector. Register doesn’t match the photos. Speak to C. first.”", key: true },
    karim_village: { title: "Karim was in the village", text: "Karim’s family and neighbours confirm he was home from 20:00 until he drove up at 05:45." },
    ellie_watch: { title: "Ellie was on watch with the guard", text: "Ellie sat with the guard at the camp gate from 02:00 to 05:00." },
    tom_contract: { title: "Tom’s contract wasn’t renewed", text: "Tom was angry, but Finch had offered him a reference." }
  },
  locations: [
    { id: "trench", name: "Trench 4", desc: "A deep trench, now half filled with fallen earth.", spots: [
      { id: "props", label: "Broken props", text: "You examine the ends of the broken timbers.", clue: "props_cut" },
      { id: "floor", label: "Trench floor", text: "Finch’s trowel and notebook, where he had been working at dawn." }
    ]},
    { id: "finds", name: "Finds Tent", desc: "Trays of pottery, the find register and packing crates.", spots: [
      { id: "register", label: "Find register", text: "You check each numbered page.", clue: "register_gap" },
      { id: "crate", label: "Sealed pottery crate", text: "You open the crate and search it.", clue: "crate_amulet", requires: "celia_email" }
    ]},
    { id: "celiaTent", name: "Celia’s Tent", desc: "Camp bed, a laptop and a canvas tool roll.", spots: [
      { id: "tools", label: "Tool roll", text: "Trowels, brushes and a small saw.", clue: "saw_found", requires: "props_cut" },
      { id: "laptop", label: "Laptop", text: "Her sent emails.", clue: "celia_email", requires: "catalogue" }
    ]},
    { id: "finchTent", name: "Finch’s Tent", desc: "Books, maps and a desk diary.", spots: [
      { id: "diary", label: "Desk diary", text: "Finch’s notes for this week.", clue: "inspector_meeting" }
    ]}
  ],
  interviews: {
    celia: [
      { id: "c1", q: "Where were you last night?", a: "Asleep in my tent until the shouting started at six." },
      { id: "c2", q: "Pages are missing from your register", a: "Water damage. I’m rewriting them.", requires: "register_gap" },
      { id: "c3", q: "The guard saw you at trench 4 at 04:30", a: "I couldn’t sleep. I went for a walk.", requires: "guard_log" },
      { id: "c4", q: "Show her the amulet from the crate", a: "(She sits down.) Harold was going to the inspector on Friday. Twenty years of my work, gone.", requires: "crate_amulet" }
    ],
    karim: [
      { id: "k1", q: "Where were you last night?", a: "At home in the village with my family. I drove up at quarter to six.", clue: "karim_village" },
      { id: "k2", q: "You argued with Finch", a: "About the men’s wages. He agreed in the end. Last week. We shook hands." }
    ],
    ellie: [
      { id: "e1", q: "Where were you last night?", a: "On watch with the guard from two until five. It’s a student rota.", clue: "ellie_watch" },
      { id: "e2", q: "Did the guard write anything down?", a: "Everything. He logs every person he sees. He wrote down Dr. Moran walking to the trenches at half four.", clue: "guard_log" }
    ],
    tom: [
      { id: "t1", q: "How did you feel about your contract?", a: "Angry. But he offered me a good reference. People don’t kill over references.", clue: "tom_contract" },
      { id: "t2", q: "Do you photograph every find?", a: "Every one. Here’s the archive.", clue: "photo_212" }
    ]
  },
  evidence: [
    { id: "props", name: "Sawn props", kind: "Physical", requires: "props_cut", desc: "Three pine props from trench 4.", detail: "Clean saw cuts through two-thirds of each prop. A fine-toothed saw." },
    { id: "photos", name: "Photo archive, finds 205–218", kind: "Digital", requires: "photo_212", desc: "Tom’s camera files.", detail: "Find 212: gold scarab, 3.1 cm, inscribed. Find 215: gold amulet. Neither appears in the register." },
    { id: "catalogue", name: "London auction catalogue", kind: "Document", requires: "photo_212", desc: "Found among Finch’s papers.", detail: "Lot 88: gold scarab, “from an old private collection”. It matches find 212 exactly.", clue: "catalogue" },
    { id: "guardlog", name: "Night guard’s log", kind: "Document", requires: "guard_log", desc: "Wednesday night.", detail: "02:00 Ellie on watch.\n04:30 Dr. Moran to trench 4 with torch.\n04:55 Dr. Moran back to tents.\n05:00 Ellie off watch." },
    { id: "saw", name: "Pruning saw", kind: "Physical", requires: "saw_found", desc: "From Celia’s tool roll.", detail: "Pine sawdust in the teeth. The cut marks on the props match its blade." }
  ],
  timeline: [
    { t: "20:00", text: "Karim is at home in the village.", src: "Family", requires: "karim_village" },
    { t: "02:00", text: "Ellie starts night watch with the guard.", src: "Guard log", requires: "ellie_watch" },
    { t: "04:30", text: "Celia walks to trench 4 with a torch.", src: "Guard log", requires: "guard_log", key: true },
    { t: "04:30", text: "Celia says she was asleep in her tent.", src: "Celia’s statement", claim: true, key: true },
    { t: "05:00", text: "Finch goes down into trench 4 at first light.", src: "Workers" },
    { t: "06:00", text: "Workers find Finch under the collapsed wall.", src: "Workers" }
  ],
  hints: [
    "Accidents don’t leave saw marks. Look at the props, then find the tool.",
    "The register and the photographs should match. Compare them.",
    "Something photographed on site is for sale in London. Who handles the exports?"
  ],
  motives: [
    { id: "smuggle", label: "To hide the smuggling of finds" },
    { id: "wages", label: "Anger over wages" },
    { id: "thesis", label: "Revenge for a harsh review" },
    { id: "contract", label: "Anger over a lost contract" }
  ],
  solution: {
    culprit: "celia", motive: "smuggle",
    keyClues: ["props_cut", "saw_found", "catalogue", "celia_email", "crate_amulet", "guard_log", "inspector_meeting"],
    story: [
      "For years Celia Moran had been sending gold finds to a London dealer, hidden in pottery crates she signed off herself, and cutting their pages from the register. Finch noticed the register no longer matched Tom’s photographs and booked the antiquities inspector for Friday.",
      "At 04:30 Celia walked to trench 4 and sawed through the props where Finch would be working at first light. When he climbed down at dawn, the wall came down on him."
    ],
    proof: [
      { clue: "props_cut", text: "The props were sawn. It was no accident." },
      { clue: "saw_found", text: "The saw in Celia’s tool roll made the cuts." },
      { clue: "guard_log", text: "She was at trench 4 at 04:30, although she says she was asleep." },
      { clue: "catalogue", text: "A find from the site is for sale in London." },
      { clue: "celia_email", text: "She arranged shipments with a dealer." },
      { clue: "crate_amulet", text: "The crate she sealed hides a gold amulet." },
      { clue: "inspector_meeting", text: "Finch was about to report her." },
      { clue: "ellie_watch", text: "Ellie was on watch with the guard." }
    ]
  }
}
);
