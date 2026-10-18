CASES.push(
{
  id: "lumen", number: "CF-2512", title: "A Bitter Course at Lumen", kind: "Poisoning", difficulty: "Standard",
  tagline: "A food critic with a peanut allergy collapses over dessert at a famous restaurant.",
  place: "Lumen, Marylebone", when: "Saturday 22 February, 21:52",
  brief: [
    "Gideon Pryce is the most feared restaurant critic in London. On Saturday he ate the tasting menu at Lumen. The kitchen had been warned in advance that he has a severe peanut allergy.",
    "At 21:52, two spoonfuls into dessert, Pryce collapsed. His companion used his adrenaline pen and he survived. The dessert contained peanut oil. Lumen doesn’t cook with peanuts."
  ],
  victim: { name: "Gideon Pryce", age: 57, role: "Restaurant critic", found: "Collapsed at table 9", cause: "Severe allergic reaction to peanut oil. He survived." },
  facts: [
    "Pryce’s booking note said: “SEVERE PEANUT ALLERGY. No traces.”",
    "Plates wait at the pass for up to two minutes before a waiter collects them.",
    "A camera covers the pass for training purposes.",
    "Lumen’s main investor is known to be unhappy."
  ],
  suspects: [
    { id: "marco", name: "Marco Bellini", age: 36, role: "Sous chef", background: "Talented and ambitious. Has wanted his own restaurant for years.", motive: "None known.", relation: "Sofia’s second-in-command for four years.", alibi: "Says he was in the cold room from 21:40 to 21:55." },
    { id: "aiko", name: "Aiko Mori", age: 31, role: "Pastry chef", background: "Made the dessert: dark chocolate with seed praline.", motive: "Pryce once called her work “fussy” in print.", relation: "Had never met Pryce.", alibi: "Says she plated the desserts, then went to her section." },
    { id: "sofia", name: "Sofia Lund", age: 44, role: "Head chef and owner", background: "Built Lumen from nothing. A Pryce review could make or break it.", motive: "Pryce gave her last restaurant a savage review.", relation: "Critic and chef.", alibi: "Says she was at the grill all service." },
    { id: "jules", name: "Jules Fontaine", age: 40, role: "Sommelier", background: "Runs the wine list and the cellar.", motive: "Pryce mocked his wine list last year.", relation: "Old grudge.", alibi: "Says he was in the cellar with guests." }
  ],
  clues: {
    allergy_ticket: { title: "The kitchen knew about the allergy", text: "Table 9’s ticket at the pass is marked in red: “SEVERE PEANUT ALLERGY.”" },
    peanut_found: { title: "Peanut oil on the praline", text: "The lab found peanut oil brushed onto the surface of the praline on Pryce’s plate." },
    batch_clean: { title: "The rest of the batch was nut-free", text: "Every other dessert from the same batch tested clean. The oil was added to one plate only, after plating.", key: true },
    aiko_log: { title: "Aiko’s nut-free prep log", text: "Aiko’s log shows the praline made with sunflower and pumpkin seeds at 15:00, checked nut-free." },
    oil_bottle: { title: "The kitchen’s only peanut oil is at Marco’s station", text: "One squeeze bottle of peanut oil, for the staff meal stir-fry, stands at Marco’s section.", key: true },
    pass_cctv: { title: "Camera: Marco at the pass at 21:47", text: "The pass camera shows Marco leaning over table 9’s dessert at 21:47 with a squeeze bottle.", key: true },
    cold_room: { title: "The cold room was opened only at 21:40", text: "The cold room door log shows it opened at 21:40 and closed at 21:41. No one was inside after that." , key: true },
    investor_email: { title: "Investor to Marco: “If Lumen stumbles…”", text: "An email on Marco’s phone from Lumen’s investor: “If Lumen stumbles, the Soho site is yours to run.”", key: true },
    sofia_grill: { title: "Sofia never left the grill", text: "The pass camera shows Sofia at the grill throughout service." },
    jules_cellar: { title: "Jules was in the cellar with guests", text: "Jules gave a party of six a cellar tour from 21:35 to 22:00." },
    aiko_review: { title: "Pryce once called Aiko’s work “fussy”", text: "A three-year-old review of Aiko’s previous restaurant." }
  },
  locations: [
    { id: "pass", name: "The Pass", desc: "A heated steel shelf where finished plates wait for waiters.", spots: [
      { id: "tickets", label: "Order tickets", text: "Table 9’s ticket, marked in red.", clue: "allergy_ticket" },
      { id: "camera", label: "Training camera", text: "You play back the footage from 21:40.", clue: "pass_cctv" }
    ]},
    { id: "kitchen", name: "The Kitchen", desc: "Sections for grill, fish, pastry and the sous chef.", spots: [
      { id: "marcoStation", label: "Marco’s section", text: "Squeeze bottles of oils and sauces.", clue: "oil_bottle" },
      { id: "pastry", label: "Pastry section", text: "Aiko’s tidy bench and her prep log.", clue: "aiko_log" },
      { id: "coldroom", label: "Cold room door", text: "An electronic lock records each opening.", clue: "cold_room" }
    ]},
    { id: "cellar", name: "Wine Cellar", desc: "Racks of bottles and a tasting table.", spots: [
      { id: "tour", label: "Tasting table", text: "Six glasses and a signed guestbook: tour 21:35–22:00.", clue: "jules_cellar" }
    ]}
  ],
  interviews: {
    marco: [
      { id: "m1", q: "Where were you at 21:47?", a: "In the cold room, sorting tomorrow’s fish. From twenty to ten till five to." },
      { id: "m2", q: "Why is there peanut oil at your station?", a: "Staff meal. Stir-fry. It never goes near service.", requires: "oil_bottle" },
      { id: "m3", q: "The cold room was only opened at 21:40", a: "Maybe I stepped out for a second.", requires: "cold_room" },
      { id: "m4", q: "Show him the investor’s email", a: "(He takes off his apron.) I’m not saying anything else.", requires: "investor_email" }
    ],
    aiko: [
      { id: "a1", q: "What’s in the praline?", a: "Sunflower and pumpkin seeds. Nut-free, I check it every time. It’s in my log.", clue: "aiko_log" },
      { id: "a2", q: "Did Pryce ever review you?", a: "He called my food “fussy” three years ago. I framed it.", clue: "aiko_review" }
    ],
    sofia: [
      { id: "s1", q: "Where were you during dessert?", a: "At the grill. The camera sees me every second.", clue: "sofia_grill" },
      { id: "s2", q: "Who gains if Lumen fails?", a: "Our investor has been talking to Marco about opening in Soho. I wasn’t meant to know.", clue: "investor_email" }
    ],
    jules: [
      { id: "j1", q: "Where were you?", a: "Cellar tour for table 3, six people, half nine till ten.", clue: "jules_cellar" },
      { id: "j2", q: "Pryce mocked your wine list", a: "He called it “a museum”. It is a very good museum." }
    ]
  },
  evidence: [
    { id: "plate", name: "Pryce’s dessert plate", kind: "Physical", desc: "Taken from table 9.", detail: "Lab result: peanut oil on the surface of the praline only.", clue: "peanut_found" },
    { id: "batch", name: "Other desserts from the batch", kind: "Physical", requires: "peanut_found", desc: "Eleven untouched portions.", detail: "All eleven tested clean. The oil was added after plating.", clue: "batch_clean" },
    { id: "footage", name: "Pass camera clip", kind: "Digital", requires: "pass_cctv", desc: "21:46–21:48.", detail: "21:47:10 Marco reaches across table 9’s plate with a squeeze bottle. 21:47:30 the waiter collects it." },
    { id: "doorlog", name: "Cold room door log", kind: "Digital", requires: "cold_room", desc: "Electronic lock.", detail: "21:40:02 open\n21:41:15 closed\nNo further openings until 22:30." },
    { id: "bottle", name: "Peanut oil squeeze bottle", kind: "Physical", requires: "oil_bottle", desc: "From Marco’s station.", detail: "Labelled “PEANUT — STAFF ONLY”. Marco’s fingerprints on the nozzle." }
  ],
  timeline: [
    { t: "15:00", text: "Aiko makes the nut-free praline.", src: "Prep log", requires: "aiko_log" },
    { t: "21:35", text: "Jules begins a cellar tour.", src: "Guestbook", requires: "jules_cellar" },
    { t: "21:40", text: "The cold room opens and closes.", src: "Door log", requires: "cold_room" },
    { t: "21:40", text: "Marco says he was in the cold room until 21:55.", src: "Marco’s statement", claim: true, key: true },
    { t: "21:47", text: "Marco leans over table 9’s dessert with a squeeze bottle.", src: "Camera", requires: "pass_cctv", key: true },
    { t: "21:52", text: "Pryce collapses at table 9.", src: "Staff" }
  ],
  hints: [
    "Was the praline poisoned in the making, or afterwards? Test the rest of the batch.",
    "There is only one bottle of peanut oil in the kitchen. Where is it?",
    "Check the sous chef’s alibi against the cold room lock and the pass camera."
  ],
  motives: [
    { id: "ambition", label: "To sink Lumen and get his own restaurant" },
    { id: "review", label: "Revenge for a bad review" },
    { id: "wine", label: "Revenge for mocking the wine list" },
    { id: "accident", label: "No motive: a kitchen accident" }
  ],
  solution: {
    culprit: "marco", motive: "ambition",
    keyClues: ["batch_clean", "oil_bottle", "pass_cctv", "cold_room", "investor_email"],
    story: [
      "Lumen’s investor had promised Marco Bellini his own restaurant “if Lumen stumbles”. A critic nearly dying at Lumen would do more than stumble.",
      "Marco opened the cold room at 21:40 so he could claim to be in it, then waited at the pass. At 21:47 he brushed peanut oil from his staff-meal bottle onto table 9’s praline. Two minutes later the waiter carried it out."
    ],
    proof: [
      { clue: "batch_clean", text: "Only Pryce’s plate was contaminated, after plating." },
      { clue: "oil_bottle", text: "The only peanut oil was at Marco’s station." },
      { clue: "pass_cctv", text: "The camera shows him at table 9’s plate with a squeeze bottle." },
      { clue: "cold_room", text: "He wasn’t in the cold room, so his alibi is false." },
      { clue: "investor_email", text: "He was promised his own restaurant if Lumen failed." },
      { clue: "aiko_log", text: "Aiko’s praline was nut-free." },
      { clue: "sofia_grill", text: "Sofia never left the grill." }
    ]
  }
},
{
  id: "kronberg", number: "CF-3150", title: "The Kronberg Gambit", kind: "Cheating", difficulty: "Hard",
  tagline: "An unknown player is winning a chess tournament with impossible moves.",
  place: "Grand Hotel Kronberg, Kronberg Open", when: "Saturday 14 September, 18:00",
  brief: [
    "Lukas Brenner, ranked 212th in the world, is leading the Kronberg Open with a perfect score. His moves in the last three rounds have been almost flawless.",
    "After losing to him in round 7, Grandmaster Sergei Antonov lodged a formal complaint of computer-assisted cheating. The final round is tomorrow. The first prize is €50,000."
  ],
  victim: { label: "Target", name: "The Kronberg Open", age: null, role: "International chess tournament, €50,000 first prize", found: "Rounds 5 to 7", cause: "Suspected cheating with computer help." },
  facts: [
    "Players must leave phones and watches with the arbiters before each round.",
    "Games are broadcast live on the internet, move by move, with no delay.",
    "Players may leave the board to use the bathroom.",
    "Most players are staying in the tournament hotel."
  ],
  suspects: [
    { id: "lukas", name: "Lukas Brenner", age: 24, role: "Tournament leader", background: "A strong club player who has never beaten a grandmaster before this week.", motive: "None known.", relation: "Has beaten Antonov, Obi and three others this week.", alibi: "Says he prepares alone and has never used a device." },
    { id: "sergei", name: "GM Sergei Antonov", age: 38, role: "Grandmaster, complainant", background: "Former national champion.", motive: "Lost to Brenner and wants the result overturned.", relation: "Opponent in round 7.", alibi: "Not needed. He made the complaint." },
    { id: "amara", name: "Amara Obi", age: 19, role: "Rising player", background: "The youngest player in the field, in second place.", motive: "Would take first place if Brenner is disqualified.", relation: "Lost to Brenner in round 5.", alibi: "Leaves the board often, which has caused gossip." },
    { id: "hendrik", name: "Hendrik Vos", age: 55, role: "Chief arbiter", background: "Runs the tournament rules.", motive: "Missed checks would embarrass him.", relation: "Responsible for fair play.", alibi: "Says all checks were carried out." }
  ],
  clues: {
    engine_match: { title: "Brenner’s moves match the engine 97%", text: "In rounds 5–7, 97% of Brenner’s moves match the strongest chess engine. In rounds 1–4 the figure was 61%." },
    live_feed: { title: "The live broadcast has no delay", text: "Anyone watching online can see each move within a second, and could feed an engine’s reply back to a player." },
    radio_scan: { title: "Radio bursts during Brenner’s games", text: "A scanner in the playing hall picked up short radio bursts on 433 MHz, only while Brenner was thinking.", key: true },
    shoe_device: { title: "A receiver in Brenner’s shoe", text: "In the heel of Brenner’s left shoe: a small receiver that vibrates in short patterns.", key: true },
    arbiter_lax: { title: "Metal detector checks were skipped", text: "Vos admits body scans were skipped from round 4 to save time." },
    booking_512: { title: "Room 512 booked by K. Brenner", text: "The hotel register shows room 512 booked by “K. Brenner”, Lukas’s cousin Katrin, for the week.", key: true },
    room_512: { title: "A laptop and transmitter in room 512", text: "Room 512 holds a laptop running a chess engine, connected to a small radio transmitter.", key: true },
    transmit_log: { title: "Transmissions match Brenner’s moves", text: "The laptop logged every signal it sent. Each one matches a move Brenner played seconds later.", key: true },
    amara_medical: { title: "Amara has diabetes", text: "Amara has a doctor’s letter approved by the arbiters. She leaves the board to check her blood sugar." },
    amara_breaks: { title: "Amara left her board eleven times", text: "Gossip says Amara leaves too often. The breaks are logged and short." },
    sergei_grudge: { title: "Antonov lost his title chances to Brenner", text: "Antonov needed a win against Brenner to qualify for the national team." }
  },
  locations: [
    { id: "hall", name: "Playing Hall", desc: "Forty boards under chandeliers, and an arbiter’s table at the front.", spots: [
      { id: "board1", label: "Board 1", text: "Brenner’s board. A plain chair and a scoresheet." },
      { id: "scanner", label: "Signal scanner", text: "You set up a radio scanner during round 8 practice games and check the log.", clue: "radio_scan" }
    ]},
    { id: "arbiter", name: "Arbiters’ Office", desc: "Phone bags, a metal detector wand and paperwork.", spots: [
      { id: "search", label: "Search of Brenner", text: "With a radio signal found, the arbiters ask Brenner to remove his shoes.", clue: "shoe_device", requires: "radio_scan" },
      { id: "checks", label: "Check sheets", text: "Body scan column: blank from round 4.", clue: "arbiter_lax" },
      { id: "medical", label: "Medical letters", text: "Approved medical exemptions for this event.", clue: "amara_medical" }
    ]},
    { id: "reception", name: "Hotel Reception", desc: "A marble desk and the guest register.", spots: [
      { id: "register", label: "Guest register", text: "You search for other Brenners staying in the hotel.", clue: "booking_512" }
    ]},
    { id: "fifth", name: "Fifth Floor", desc: "A quiet corridor above the playing hall.", spots: [
      { id: "room512", label: "Room 512", text: "With the manager’s key, you open room 512.", clue: "room_512", requires: "booking_512" }
    ]}
  ],
  interviews: {
    lukas: [
      { id: "l1", q: "How do you explain your results?", a: "I’ve worked hard. Everyone improves sometimes. I prepare alone and I’ve never used any device." },
      { id: "l2", q: "Explain the receiver in your shoe", a: "I’ve never seen it. Someone must have put it there.", requires: "shoe_device" },
      { id: "l3", q: "Your cousin is in room 512", a: "Katrin came to support me. That’s all.", requires: "booking_512" },
      { id: "l4", q: "Show him the transmission log", a: "(He looks at the board for a long time.) I needed that prize. I needed one sponsor to notice me.", requires: "transmit_log" }
    ],
    sergei: [
      { id: "s1", q: "Why do you suspect Brenner?", a: "He plays like a machine for twenty moves, then like a club player when the hall goes quiet. Humans don’t do that." },
      { id: "s2", q: "What did losing cost you?", a: "My place in the national team. Yes, I am angry. That doesn’t make me wrong.", clue: "sergei_grudge" },
      { id: "s3", q: "How could someone cheat here?", a: "The broadcast has no delay. Someone watching online knows each move instantly.", clue: "live_feed" }
    ],
    amara: [
      { id: "a1", q: "Why do you leave the board so often?", a: "I have type 1 diabetes. I check my blood sugar. The arbiters have my letter.", clue: "amara_medical" },
      { id: "a2", q: "People are talking about your breaks", a: "Eleven breaks, all under three minutes. It’s in the log. Check it.", clue: "amara_breaks" }
    ],
    hendrik: [
      { id: "h1", q: "Were all the fair-play checks done?", a: "Phones collected every round. The body scans… we stopped after round 3. We were running late.", clue: "arbiter_lax" },
      { id: "h2", q: "Can you analyse Brenner’s games?", a: "Our fair-play officer ran them overnight. The numbers are not human.", clue: "engine_match" }
    ]
  },
  evidence: [
    { id: "scores", name: "Scoresheets, rounds 1–7", kind: "Document", desc: "Brenner’s signed scoresheets.", detail: "Wins in rounds 5, 6 and 7 against players rated 200 points higher." },
    { id: "scan", name: "Scanner log", kind: "Digital", requires: "radio_scan", desc: "433 MHz band.", detail: "Bursts of 0.3 seconds, in groups of 2 to 6, only during Brenner’s thinking time." },
    { id: "shoe", name: "Brenner’s left shoe", kind: "Physical", requires: "shoe_device", desc: "Black leather, hollow heel.", detail: "A coin-sized receiver and a vibration motor, wired to a battery in the heel." },
    { id: "laptop", name: "Laptop from room 512", kind: "Digital", requires: "room_512", desc: "Running a chess engine and a transmitter program.", detail: "Log: R7 move 14 “e5” sent 15:42:10. Brenner played e5 at 15:42:31.", clue: "transmit_log" },
    { id: "letter", name: "Amara’s medical letter", kind: "Document", requires: "amara_medical", desc: "Approved before round 1.", detail: "Type 1 diabetes. Permitted to leave the board to test blood glucose." }
  ],
  timeline: [
    { t: "Rd 3", text: "Arbiters stop body scans to save time.", src: "Check sheets", requires: "arbiter_lax" },
    { t: "Rd 4", text: "Brenner says he has never used any device.", src: "Brenner’s statement", claim: true, key: true },
    { t: "Rd 5", text: "Brenner beats Amara Obi with near-perfect play.", src: "Scoresheets" },
    { t: "Rd 7", text: "Radio bursts are sent from room 512 during Brenner’s game.", src: "Laptop log", requires: "transmit_log", key: true },
    { t: "Rd 7", text: "Antonov loses to Brenner and lodges a complaint.", src: "Arbiters" },
    { t: "Rd 8", text: "Final round due tomorrow.", src: "Schedule" }
  ],
  hints: [
    "If he’s getting help, it has to reach him somehow. Listen to the air in the playing hall.",
    "A signal needs a receiver. Search the player, from head to foot.",
    "A signal also needs a sender close by. Who else is staying in the hotel?"
  ],
  motives: [
    { id: "prize", label: "Prize money and sponsorship" },
    { id: "team", label: "To win a national team place" },
    { id: "rank", label: "To move up the rankings" },
    { id: "cover", label: "To hide sloppy officiating" }
  ],
  solution: {
    culprit: "lukas", motive: "prize",
    keyClues: ["radio_scan", "shoe_device", "booking_512", "room_512", "transmit_log"],
    story: [
      "Lukas Brenner wanted the €50,000 prize and the sponsors who come with it. His cousin Katrin booked room 512 above the playing hall and followed his games on the live broadcast.",
      "She fed each position to a chess engine and sent its best move as a pattern of radio pulses. A receiver in Brenner’s shoe heel turned them into vibrations. Once the arbiters stopped the body scans, nothing stood in his way."
    ],
    proof: [
      { clue: "radio_scan", text: "Radio bursts appear only while Brenner is thinking." },
      { clue: "shoe_device", text: "A receiver was hidden in his shoe." },
      { clue: "booking_512", text: "His cousin booked a room above the hall." },
      { clue: "room_512", text: "The room held an engine and a transmitter." },
      { clue: "transmit_log", text: "Each signal matches a move he played seconds later." },
      { clue: "amara_medical", text: "Amara’s breaks are medical and approved." }
    ]
  }
},
{
  id: "vintage", number: "CF-0733", title: "The Counterfeit Vintage", kind: "Fraud", difficulty: "Easy",
  tagline: "Twelve bottles of rare 1982 wine turn out to be cheap red with printed labels.",
  place: "Delacroix & Webb, Wine Merchants, Bath", when: "Tuesday 11 July, 10:00",
  brief: [
    "Collector Edward Harcourt paid £36,000 for a case of Château Montvallon 1982 from Delacroix & Webb. At his birthday dinner he opened a bottle. It tasted young and thin.",
    "A lab confirms it: the wine is a cheap blend from 2019, and the labels are modern prints. Delacroix & Webb bought the case genuine at auction in March. Somewhere in their cellar, it was swapped."
  ],
  victim: { name: "Edward Harcourt", age: 67, role: "Wine collector", found: "A case of fake Château Montvallon 1982", cause: "Fraud: £36,000 for counterfeit wine." },
  facts: [
    "The genuine case was photographed when it arrived at the merchant’s in March.",
    "Every bottle moved in the cellar is written in the cellar log.",
    "Empty bottles of famous wines are sometimes sold by restaurants to collectors, or forgers.",
    "Only two people have keys to the cellar."
  ],
  suspects: [
    { id: "benny", name: "Benny Ruiz", age: 26, role: "Cellar hand", background: "Moves stock and keeps the cellar log. Studying graphic design at night.", motive: "None known.", relation: "Two years at the shop.", alibi: "Says he never touched the Montvallon case." },
    { id: "claire", name: "Claire Webb", age: 54, role: "Owner", background: "Runs Delacroix & Webb, founded by her father.", motive: "The shop is struggling.", relation: "Sold the case to Harcourt.", alibi: "Says she had no idea." },
    { id: "philippe", name: "Philippe Arnaud", age: 60, role: "Auction house seller", background: "Sold the case to Delacroix & Webb in March.", motive: "Could have sold fakes in the first place.", relation: "Supplier.", alibi: "Says his bottles were genuine." },
    { id: "harcourt", name: "Edward Harcourt", age: 67, role: "Collector", background: "Wealthy, fussy, and a good customer.", motive: "Could be making a false claim.", relation: "Customer for twenty years.", alibi: "Says he opened the bottle in front of eight guests." }
  ],
  clues: {
    uv_labels: { title: "The labels glow under UV light", text: "Under ultraviolet light, the labels glow bright blue. Modern paper contains brighteners. 1982 paper doesn’t." },
    young_wine: { title: "The wine is a 2019 blend", text: "The lab dates the wine to 2019. It is worth about £8 a bottle." },
    arrival_photos: { title: "The case was genuine in March", text: "Photos from March show the right corks and aged labels, which don’t glow under UV.", key: true },
    cellar_log: { title: "Benny moved the case alone at night", text: "The cellar log: 14 May, 21:30, “Montvallon 82 ×12 moved to bay 9”, initialled B.R. The shop closes at 18:00.", key: true },
    empties: { title: "A restaurant sold twelve empty Montvallon bottles", text: "The Crescent restaurant sold twelve empty Château Montvallon bottles in April to “a young man in a Delacroix & Webb apron”.", key: true },
    label_printer: { title: "Montvallon labels in Benny’s locker", text: "In Benny’s staff locker: a sheet of printed Château Montvallon 1982 labels, and three misprints.", key: true },
    online_sale: { title: "“bruiz_wine” sold twelve real 1982 bottles", text: "An online wine auction sold twelve bottles of Montvallon 1982 in June, seller “bruiz_wine”.", key: true },
    claire_loss: { title: "Claire has to refund £36,000", text: "Claire has refunded Harcourt in full. The fraud has cost her shop dearly." },
    harcourt_uninsured: { title: "Harcourt claimed nothing from insurance", text: "Harcourt’s cellar isn’t insured. He gains nothing from a false claim." },
    philippe_certs: { title: "Philippe’s case came with certificates", text: "The auction lot came with certificates and a record of where it had been stored since 1985." }
  },
  locations: [
    { id: "cellar", name: "The Cellar", desc: "Racks of bottles in numbered bays under the shop.", spots: [
      { id: "log", label: "Cellar log", text: "Every bottle moved, with time and initials.", clue: "cellar_log" },
      { id: "bay9", label: "Bay 9", text: "Empty now. A few flakes of old red wax on the shelf." }
    ]},
    { id: "staff", name: "Staff Room", desc: "Lockers, a kettle and a noticeboard.", spots: [
      { id: "locker", label: "Benny’s locker", text: "With Claire’s permission, you open it.", clue: "label_printer", requires: "cellar_log" },
      { id: "board", label: "Noticeboard", text: "A flyer for Benny’s graphic design course. His work is very good." }
    ]},
    { id: "office", name: "Claire’s Office", desc: "Invoices, delivery photos and a computer.", spots: [
      { id: "photos", label: "March delivery photos", text: "The Montvallon case as it arrived.", clue: "arrival_photos" },
      { id: "refund", label: "Refund paperwork", text: "A full refund to Harcourt.", clue: "claire_loss" }
    ]},
    { id: "crescent", name: "The Crescent Restaurant", desc: "An upmarket restaurant two streets away.", spots: [
      { id: "manager", label: "Talk to the manager", text: "He keeps empty bottles of famous wines to sell.", clue: "empties" }
    ]}
  ],
  interviews: {
    benny: [
      { id: "b1", q: "Did you handle the Montvallon case?", a: "Never touched it. Claire handles the expensive stuff." },
      { id: "b2", q: "The log says you moved it at 21:30", a: "I was catching up on stock. It’s normal.", requires: "cellar_log" },
      { id: "b3", q: "Show him the labels from his locker", a: "Design practice. For my course.", requires: "label_printer" },
      { id: "b4", q: "Are you “bruiz_wine”?", a: "(A long pause.) I owed money. I thought nobody would open a 1982 for years.", requires: "online_sale" }
    ],
    claire: [
      { id: "c1", q: "What happened to the case?", a: "I don’t know. I’ve refunded Edward every penny. We can’t afford it.", clue: "claire_loss" },
      { id: "c2", q: "Who has cellar keys?", a: "Me and Benny. He locks up most nights." }
    ],
    philippe: [
      { id: "p1", q: "Were your bottles genuine?", a: "Certificates, storage records back to 1985. The merchant photographed them on arrival too.", clue: "philippe_certs" },
      { id: "p2", q: "Have you seen these bottles since?", a: "Funny you ask. Twelve bottles of Montvallon 82 sold online in June. Seller called “bruiz_wine”. I watch all the sales.", clue: "online_sale" }
    ],
    harcourt: [
      { id: "h1", q: "Is the case insured?", a: "No. I don’t insure my cellar. I drink it.", clue: "harcourt_uninsured" },
      { id: "h2", q: "When did you realise?", a: "First sip. Eight guests watched me open it. It tasted like cough syrup." }
    ]
  },
  evidence: [
    { id: "bottle", name: "Harcourt’s opened bottle", kind: "Physical", desc: "Château Montvallon 1982, supposedly.", detail: "Under UV light the label glows blue. Lab: 2019 Languedoc blend.", clue: "uv_labels" },
    { id: "lab", name: "Laboratory report", kind: "Document", requires: "uv_labels", desc: "Isotope dating of the wine.", detail: "Vintage estimate 2018–2020. Not Bordeaux.", clue: "young_wine" },
    { id: "photos", name: "March arrival photos", kind: "Digital", requires: "arrival_photos", desc: "Taken by Claire on arrival.", detail: "Original corks branded “1982”. Labels dull under UV. Genuine." },
    { id: "labels", name: "Sheet of printed labels", kind: "Physical", requires: "label_printer", desc: "From Benny’s locker.", detail: "Château Montvallon 1982, printed on inkjet paper. The same paper glows under UV." },
    { id: "listing", name: "Online auction listing", kind: "Digital", requires: "online_sale", desc: "June sale.", detail: "12 × Montvallon 1982, sold for £29,500. Seller “bruiz_wine”, Bath." }
  ],
  timeline: [
    { t: "Mar", text: "The genuine case arrives and is photographed.", src: "Photos", requires: "arrival_photos" },
    { t: "Apr", text: "A young man in a D&W apron buys twelve empty Montvallon bottles.", src: "Crescent", requires: "empties" },
    { t: "14 May", text: "Benny moves the case to bay 9 at 21:30.", src: "Cellar log", requires: "cellar_log", key: true },
    { t: "14 May", text: "Benny says he never touched the case.", src: "Benny’s statement", claim: true, key: true },
    { t: "Jun", text: "“bruiz_wine” sells twelve real bottles online.", src: "Listing", requires: "online_sale" },
    { t: "8 Jul", text: "Harcourt opens a bottle at his birthday dinner.", src: "Harcourt" }
  ],
  hints: [
    "Was the case fake when it arrived? Check the March photos.",
    "Forgers need real empty bottles. Who sells those in town?",
    "Check who moved the case and when, then look in that person’s locker."
  ],
  motives: [
    { id: "money", label: "To sell the real bottles for cash" },
    { id: "shop", label: "To save a struggling shop" },
    { id: "claim", label: "To make a false claim" },
    { id: "cover", label: "To hide that the lot was always fake" }
  ],
  solution: {
    culprit: "benny", motive: "money",
    keyClues: ["arrival_photos", "cellar_log", "empties", "label_printer", "online_sale"],
    story: [
      "Benny Ruiz owed money and had the skills of a graphic designer. In April he bought twelve empty Montvallon bottles from the Crescent and printed his own labels.",
      "On 14 May, after closing, he moved the genuine case to bay 9 and swapped it for his fakes filled with cheap red. In June he sold the real bottles online as “bruiz_wine”."
    ],
    proof: [
      { clue: "arrival_photos", text: "The case was genuine when it arrived." },
      { clue: "cellar_log", text: "Benny moved it alone at night." },
      { clue: "empties", text: "He bought empty Montvallon bottles." },
      { clue: "label_printer", text: "Fake labels were in his locker." },
      { clue: "online_sale", text: "He sold the real bottles online." },
      { clue: "harcourt_uninsured", text: "Harcourt gains nothing from a false claim." }
    ]
  }
},
{
  id: "mill", number: "CF-2046", title: "Hit and Run on Mill Lane", kind: "Hit and run", difficulty: "Standard",
  tagline: "A nurse cycling home is knocked down, and the driver doesn’t stop.",
  place: "Mill Lane, Hatherley", when: "Friday 24 November, 22:15",
  brief: [
    "Amy Chen, a nurse, was cycling home along Mill Lane after her shift when a car hit her from behind at about 22:15. It didn’t stop.",
    "A passing driver found her and called an ambulance at 22:17. Amy has a broken leg and will recover. She remembers only headlights and the colour green."
  ],
  victim: { name: "Amy Chen", age: 31, role: "Nurse, cycling home", found: "In the verge on Mill Lane", cause: "Hit from behind by a car that didn’t stop. Broken leg." },
  facts: [
    "Mill Lane is a narrow road between the Mill pub and the town.",
    "Four drivers were seen on or near Mill Lane between 22:00 and 22:30.",
    "Taxis in Hatherley have dashcams.",
    "Damaged cars often go for repair the next morning."
  ],
  suspects: [
    { id: "nathan", name: "Nathan Price", age: 45, role: "Restaurant owner", background: "Owns the Bistro on the high street. Drives a dark green saloon.", motive: "None known.", relation: "Doesn’t know Amy.", alibi: "Says he left the Mill pub at 21:30 and was home by 21:45." },
    { id: "colette", name: "Colette Barnes", age: 50, role: "Taxi driver", background: "Drives nights for Hatherley Cabs.", motive: "Was on Mill Lane at the right time.", relation: "Doesn’t know Amy.", alibi: "Says she was driving a fare to the station." },
    { id: "owen", name: "Owen Hughes", age: 28, role: "Delivery driver", background: "Drives a white van for a parcel company.", motive: "Behind on his deliveries and speeding.", relation: "Doesn’t know Amy.", alibi: "Says he was delivering on the other side of town." },
    { id: "priti", name: "Dr. Priti Shah", age: 39, role: "GP on call", background: "Found Amy and called the ambulance.", motive: "First on the scene.", relation: "Works at the same hospital as Amy.", alibi: "Says she came round the bend and found Amy already hurt." }
  ],
  clues: {
    paint_flakes: { title: "Dark green paint on Amy’s bike", text: "Flakes of dark green car paint are stuck in the scuffs on Amy’s rear mudguard.", key: true },
    headlight_glass: { title: "Headlight glass from a saloon", text: "Broken headlight glass at the scene comes from a Volvo S60 of the last five years.", key: true },
    nathan_car: { title: "Nathan drives a green Volvo S60", text: "Nathan Price’s car is a dark green Volvo S60.", key: true },
    dashcam: { title: "Taxi dashcam: green saloon speeding at 22:14", text: "Colette’s dashcam shows a dark green saloon passing her fast on Mill Lane at 22:14. Part of the plate reads “NP”.", key: true },
    bar_tab: { title: "Nathan drank at the Mill until 22:08", text: "The Mill’s till shows Nathan’s tab: four pints and two whiskies, closed at 22:08.", key: true },
    garage: { title: "Nathan’s car at a garage the next morning", text: "At 08:00 on Saturday, Nathan took his car to his cousin’s garage for a new headlight and front wing. He said he hit a deer.", key: true },
    no_deer: { title: "No deer hair or blood on the car", text: "The mechanic says there was no hair, no blood and no dent a deer would leave. The damage was low and narrow.", key: true },
    colette_fare: { title: "Colette’s fare confirms her route", text: "Her passenger and the cab’s GPS confirm she was driving to the station, behind the green car." },
    owen_gps: { title: "Owen’s van was across town", text: "The van’s GPS tracker has Owen on the Fernhill estate from 21:50 to 22:40." },
    priti_car: { title: "Priti’s silver car is undamaged", text: "Priti’s silver Toyota has no damage at all. She called 999 at 22:17." }
  },
  locations: [
    { id: "lane", name: "Mill Lane", desc: "A narrow lane with hedges on both sides and no street lights.", spots: [
      { id: "verge", label: "The verge where Amy fell", text: "Tyre marks and broken glass.", clue: "headlight_glass" },
      { id: "bike", label: "Amy’s bicycle", text: "The rear mudguard is crushed.", clue: "paint_flakes" }
    ]},
    { id: "pub", name: "The Mill Pub", desc: "A low-beamed pub at the top of Mill Lane.", spots: [
      { id: "till", label: "Till records", text: "Tabs for Friday night.", clue: "bar_tab" },
      { id: "carpark", label: "Pub car park", text: "Gravel, a few cars. Regulars park here and drive home down Mill Lane." }
    ]},
    { id: "garage", name: "Price’s Garage", desc: "A small garage on the industrial estate.", spots: [
      { id: "workshop", label: "Workshop records", text: "Saturday’s jobs.", clue: "garage", requires: "nathan_car" },
      { id: "mechanic", label: "Talk to the mechanic", text: "He looks worried when you ask about Saturday.", clue: "no_deer", requires: "garage" }
    ]}
  ],
  interviews: {
    nathan: [
      { id: "n1", q: "Where were you on Friday night?", a: "The Mill for a quick one. I left at half nine and was home by quarter to ten." },
      { id: "n2", q: "What do you drive?", a: "A green Volvo. S60. Why?", clue: "nathan_car" },
      { id: "n3", q: "Your tab closed at 22:08", a: "Maybe I stayed a bit longer. I wasn’t drunk.", requires: "bar_tab" },
      { id: "n4", q: "The mechanic says it wasn’t a deer", a: "(He stares at the table.) I thought I’d hit a sign. I didn’t stop to look. I knew I’d lose my licence.", requires: "no_deer" }
    ],
    colette: [
      { id: "c1", q: "Where were you at 22:15?", a: "Driving a fare to the station along Mill Lane. A car came past me like a rocket.", clue: "colette_fare" },
      { id: "c2", q: "Does your cab have a dashcam?", a: "They all do. Take the card.", clue: "dashcam" }
    ],
    owen: [
      { id: "o1", q: "Where were you on Friday night?", a: "Fernhill estate. Forty parcels. The van’s tracked.", clue: "owen_gps" }
    ],
    priti: [
      { id: "p1", q: "What happened?", a: "I came round the bend and she was in the verge. I called 999 at 22:17 and kept her still.", clue: "priti_car" },
      { id: "p2", q: "Did you see another car?", a: "Tail lights disappearing towards town. Red, fast. That’s all." }
    ]
  },
  evidence: [
    { id: "bike", name: "Amy’s bicycle", kind: "Physical", requires: "paint_flakes", desc: "Rear mudguard crushed.", detail: "Paint flakes: dark green metallic, Volvo colour code 721 “Pine Grey Green”." },
    { id: "glass", name: "Headlight fragments", kind: "Physical", requires: "headlight_glass", desc: "Collected from the lane.", detail: "Part number stamped on one piece: a Volvo S60 headlight, 2019 onwards." },
    { id: "dashcam", name: "Taxi dashcam footage", kind: "Digital", requires: "dashcam", desc: "Colette’s cab, 22:14.", detail: "22:14:05 Dark green saloon overtakes at speed. Plate partly visible: “NP19 …”." },
    { id: "tab", name: "Mill pub till receipt", kind: "Document", requires: "bar_tab", desc: "Tab for N. Price.", detail: "4 × bitter, 2 × whisky. Opened 20:30, closed 22:08." },
    { id: "invoice", name: "Garage invoice", kind: "Document", requires: "garage", desc: "Saturday 08:00.", detail: "Volvo S60, NP19 XKT. New nearside headlight and front wing. Customer note: “hit a deer”." }
  ],
  timeline: [
    { t: "21:30", text: "Nathan says he left the Mill pub.", src: "Nathan’s statement", claim: true, key: true },
    { t: "21:50", text: "Owen’s van is on the Fernhill estate.", src: "GPS", requires: "owen_gps" },
    { t: "22:08", text: "Nathan’s bar tab is closed.", src: "Till", requires: "bar_tab", key: true },
    { t: "22:14", text: "A green saloon speeds past Colette’s taxi on Mill Lane.", src: "Dashcam", requires: "dashcam" },
    { t: "22:15", text: "Amy is hit from behind.", src: "Amy" },
    { t: "22:17", text: "Priti calls 999.", src: "Ambulance service", requires: "priti_car" },
    { t: "08:00", text: "Nathan takes his car to a garage for a new headlight.", src: "Invoice", requires: "garage" }
  ],
  hints: [
    "The car left pieces of itself at the scene. What do they tell you about it?",
    "One of the other drivers had a camera running.",
    "Check when the pub tab really closed, and where a damaged car would go the next morning."
  ],
  motives: [
    { id: "drink", label: "To avoid a drink-driving charge" },
    { id: "late", label: "To make up time on deliveries" },
    { id: "fare", label: "To keep a taxi fare" },
    { id: "grudge", label: "A grudge against the victim" }
  ],
  solution: {
    culprit: "nathan", motive: "drink",
    keyClues: ["paint_flakes", "headlight_glass", "nathan_car", "dashcam", "bar_tab", "garage", "no_deer"],
    story: [
      "Nathan Price drank four pints and two whiskies at the Mill and left at 22:08. Driving too fast down Mill Lane, he overtook a taxi and hit Amy Chen from behind.",
      "He knew he was over the limit, so he didn’t stop. At 08:00 he took the car to his cousin’s garage for a new headlight and wing and said he had hit a deer."
    ],
    proof: [
      { clue: "paint_flakes", text: "The paint on the bike is Volvo dark green." },
      { clue: "headlight_glass", text: "The headlight glass came from a Volvo S60." },
      { clue: "nathan_car", text: "Nathan drives a dark green Volvo S60." },
      { clue: "dashcam", text: "A green saloon, plate “NP19”, sped past at 22:14." },
      { clue: "bar_tab", text: "He left the pub at 22:08, not 21:30, after heavy drinking." },
      { clue: "garage", text: "His headlight and wing were replaced the next morning." },
      { clue: "no_deer", text: "The damage wasn’t caused by a deer." },
      { clue: "owen_gps", text: "Owen was across town." }
    ]
  }
},
{
  id: "broadcast", number: "CF-3409", title: "The Last Broadcast", kind: "Murder", difficulty: "Hard",
  tagline: "A late-night radio host dies on air, seconds before a big announcement.",
  place: "Harbour FM, Studio B", when: "Wednesday 30 October, 01:17",
  brief: [
    "Vince Harlow has hosted Harbour FM’s midnight show for fifteen years. At 01:17, live on air, he said, “After the news, something important about our charity appeal,” and reached for his microphone. The station went silent.",
    "Vince had been electrocuted through the metal microphone stand. The station engineer says that shouldn’t be possible."
  ],
  victim: { name: "Vince Harlow", age: 52, role: "Late-night radio host", found: "Studio B, beside the microphone stand", cause: "Electric shock through the microphone stand." },
  facts: [
    "Studio B’s door opens with a keycard that logs every entry.",
    "The station engineer checks all studio equipment before each live show.",
    "Harbour FM’s charity appeal raised £80,000 this year.",
    "Vince wrote his running order by hand every night."
  ],
  suspects: [
    { id: "nell", name: "Nell Carver", age: 42, role: "Producer", background: "Produces Vince’s show and runs the charity appeal.", motive: "None known.", relation: "Worked with Vince for nine years.", alibi: "Says she was in the control room all night and never went into Studio B." },
    { id: "dev", name: "Dev Anand", age: 33, role: "Station engineer", background: "Builds and repairs all the studio equipment.", motive: "Vince got him disciplined last year.", relation: "Colleague. They didn’t get on.", alibi: "Says he wasn’t on shift that night." },
    { id: "bobbie", name: "Bobbie Kane", age: 35, role: "Rival presenter", background: "Hosts the breakfast show and wants the midnight slot.", motive: "Would take over Vince’s show.", relation: "Professional rivals.", alibi: "Says she was presenting live on the sister station." },
    { id: "martin", name: "Martin Pole", age: 47, role: "Obsessive listener", background: "Writes to Vince every week. Came to the station that night.", motive: "Vince stopped reading his letters on air.", relation: "Fan turned stalker.", alibi: "Says security threw him out at reception." }
  ],
  clues: {
    mic_wired: { title: "The microphone stand was wired to the mains", text: "The earth wire in the lamp cable clipped to the stand was cut, and the live wire was bared against the metal.", key: true },
    cable_foreign: { title: "The cable isn’t station stock", text: "Every cable at Harbour FM is grey with asset tags. This one is black and untagged.", key: true },
    cable_order: { title: "The same cable was delivered to Nell’s home", text: "An online order for that exact black lamp cable was delivered to Nell Carver’s address on 25 October.", key: true },
    rota_change: { title: "Nell took Dev off the rota", text: "The engineer who checks the studio was due on shift. Nell changed the rota on Monday and took him off.", key: true },
    keycard: { title: "Nell entered Studio B at 23:40", text: "Studio B’s keycard log: N. Carver in at 23:40, out at 23:52. Vince was at dinner until 23:55.", key: true },
    running_order: { title: "Vince’s running order: “Tell them the truth”", text: "Vince’s handwritten running order: “01:30: the appeal. Tell them the truth. Where is the £80k?”", key: true },
    appeal_cash: { title: "£80,000 withdrawn from the appeal by Nell", text: "The appeal account shows four cash withdrawals of £20,000 each, all signed by Nell Carver.", key: true },
    dev_home: { title: "Dev was at home", text: "Dev’s online game logs and his flatmate put him at home from 20:00 to 03:00." },
    dev_grudge: { title: "Vince got Dev disciplined", text: "A complaint from Vince got Dev a written warning last year." },
    bobbie_live: { title: "Bobbie was live on the sister station", text: "Bobbie presented live on Harbour Gold from midnight to 02:00. Listeners heard her the whole time." },
    martin_reception: { title: "Martin never got past reception", text: "The security log shows Martin arriving at 00:30 and being escorted out at 00:40. He never had a keycard." }
  },
  locations: [
    { id: "studioB", name: "Studio B", desc: "A small studio: desk, microphone on a metal stand, and a reading lamp.", spots: [
      { id: "stand", label: "Microphone stand", text: "A reading lamp is clipped to the stand. You trace its cable.", clue: "mic_wired" },
      { id: "cable", label: "The lamp cable", text: "You compare it with the other cables in the building.", clue: "cable_foreign", requires: "mic_wired" },
      { id: "desk", label: "Vince’s desk", text: "His handwritten running order for the night.", clue: "running_order" }
    ]},
    { id: "corridor", name: "Studio Corridor", desc: "A carpeted corridor with keycard readers on every studio door.", spots: [
      { id: "reader", label: "Studio B keycard log", text: "Every swipe tonight.", clue: "keycard" }
    ]},
    { id: "office", name: "Production Office", desc: "Desks, the staff rota and the appeal paperwork.", spots: [
      { id: "rota", label: "Staff rota", text: "This week’s engineering cover, with a change marked.", clue: "rota_change" },
      { id: "appeal", label: "Appeal account statements", text: "The charity appeal’s bank statements.", clue: "appeal_cash", requires: "running_order" }
    ]},
    { id: "reception", name: "Reception", desc: "Front desk, a sofa and the security log.", spots: [
      { id: "seclog", label: "Security log", text: "Visitors tonight.", clue: "martin_reception" }
    ]}
  ],
  interviews: {
    nell: [
      { id: "n1", q: "Where were you before the show?", a: "In the control room, getting ready. I never went into Studio B." },
      { id: "n2", q: "Why was Dev taken off the rota?", a: "Budget. We can’t pay an engineer to sit around every night.", requires: "rota_change" },
      { id: "n3", q: "The keycard log has you in Studio B at 23:40", a: "Oh, I… dropped off his coffee. I forgot.", requires: "keycard" },
      { id: "n4", q: "Show her the cable order and the withdrawals", a: "(She stares at the papers.) He was going to say it on air. On air. To everyone.", requires: ["cable_order", "appeal_cash"] }
    ],
    dev: [
      { id: "d1", q: "Where were you last night?", a: "At home. I was supposed to be on, but Nell took me off the rota on Monday.", clue: "rota_change" },
      { id: "d2", q: "Could someone wire a stand to the mains?", a: "With a cut earth and a bared live wire, yes. That cable isn’t ours, by the way. Ours are grey and tagged." },
      { id: "d3", q: "Can anyone confirm you were home?", a: "My flatmate, and my game account. I was online all night.", clue: "dev_home" },
      { id: "d4", q: "How did you get on with Vince?", a: "He got me a written warning. I didn’t like him. I didn’t kill him.", clue: "dev_grudge" }
    ],
    bobbie: [
      { id: "b1", q: "Where were you at 01:17?", a: "Live on Harbour Gold, midnight till two. Ten thousand people heard me.", clue: "bobbie_live" },
      { id: "b2", q: "Did Nell ever order things for the studio?", a: "She has everything delivered to her flat. Says the post room loses stuff.", requires: "cable_foreign", clue: "cable_order" }
    ],
    martin: [
      { id: "m1", q: "Why did you come to the station?", a: "To give Vince my letter in person. Security threw me out after ten minutes.", clue: "martin_reception" },
      { id: "m2", q: "Did you hear the show?", a: "In my car outside. He said something about the charity appeal, and then nothing." }
    ]
  },
  evidence: [
    { id: "recording", name: "Broadcast recording, 01:17", kind: "Digital", desc: "The station’s logger.", detail: "“After the news, something important about our charity appeal. Some of you are going to be—” (A crack. Silence.)" },
    { id: "cable", name: "Black lamp cable", kind: "Physical", requires: "cable_foreign", desc: "From the Studio B stand.", detail: "Earth wire snipped. Live wire bared for 2 cm. Brand: Lumaflex, not stocked by the station." },
    { id: "order", name: "Online order record", kind: "Digital", requires: "cable_order", desc: "Lumaflex 3 m black lamp cable.", detail: "Ordered 23 October. Delivered 25 October to N. Carver, Flat 4, Quay House." },
    { id: "cardlog", name: "Studio B keycard log", kind: "Digital", requires: "keycard", desc: "Tuesday to Wednesday.", detail: "23:40  IN   N. Carver\n23:52  OUT  N. Carver\n23:55  IN   V. Harlow" },
    { id: "running", name: "Vince’s running order", kind: "Document", requires: "running_order", desc: "Handwritten.", detail: "00:00 Open\n00:30 Calls\n01:30 THE APPEAL. Tell them the truth. Where is the £80k?" },
    { id: "bank", name: "Appeal account statement", kind: "Document", requires: "appeal_cash", desc: "Harbour FM Charity Appeal.", detail: "4 × £20,000 cash withdrawals, July to October. Signed N. Carver." }
  ],
  timeline: [
    { t: "23:40", text: "Nell swipes into Studio B.", src: "Keycard log", requires: "keycard", key: true },
    { t: "23:40", text: "Nell says she never went into Studio B.", src: "Nell’s statement", claim: true, key: true },
    { t: "23:52", text: "Nell leaves Studio B.", src: "Keycard log", requires: "keycard" },
    { t: "23:55", text: "Vince returns from dinner.", src: "Keycard log" },
    { t: "00:00", text: "Bobbie goes live on Harbour Gold.", src: "Sister station", requires: "bobbie_live" },
    { t: "00:30", text: "Martin arrives at reception and is escorted out at 00:40.", src: "Security log", requires: "martin_reception" },
    { t: "01:17", text: "Vince mentions the appeal, touches the stand and dies on air.", src: "Recording" }
  ],
  hints: [
    "The engineer says it shouldn’t be possible. Look at what’s connected to the stand.",
    "Who was in Studio B before Vince came back from dinner?",
    "What was Vince about to announce? Follow the appeal money."
  ],
  motives: [
    { id: "appeal", label: "To stop Vince revealing stolen appeal money" },
    { id: "slot", label: "To take over the midnight show" },
    { id: "warning", label: "Revenge for a disciplinary warning" },
    { id: "obsession", label: "Anger at being ignored" }
  ],
  solution: {
    culprit: "nell", motive: "appeal",
    keyClues: ["mic_wired", "cable_foreign", "cable_order", "rota_change", "keycard", "running_order", "appeal_cash"],
    story: [
      "Nell Carver had taken £80,000 in cash from the station’s charity appeal. Vince found out and planned to tell listeners at 01:30.",
      "Nell took the engineer off the rota so no one would check the studio. At 23:40, while Vince was at dinner, she clipped a lamp with her own doctored cable to his microphone stand. When Vince grabbed the stand at 01:17, it carried mains power."
    ],
    proof: [
      { clue: "mic_wired", text: "The stand was deliberately wired to the mains." },
      { clue: "cable_foreign", text: "The cable was brought in from outside." },
      { clue: "cable_order", text: "The same cable was delivered to Nell." },
      { clue: "keycard", text: "She was alone in Studio B before the show, although she denies it." },
      { clue: "rota_change", text: "She removed the engineer who would have checked the studio." },
      { clue: "running_order", text: "Vince was about to reveal the missing money." },
      { clue: "appeal_cash", text: "Nell withdrew the £80,000." },
      { clue: "bobbie_live", text: "Bobbie was live on air elsewhere." },
      { clue: "martin_reception", text: "Martin never got past reception." }
    ]
  }
}
);
