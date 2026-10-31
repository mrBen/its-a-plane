Interview record, closed on 2026-10-28. Not maintained. On a conflict, README.md
wins.

# Interview log, web game

The folder started as `web-game`, a placeholder. Topic 5 settled the name on
2026-10-28, and I renamed the folder to `its-a-plane`.

## The goal, in Benjamin's words

"I want to create a web-based game, let's start the interview, starting with the
name so we can create the folder and initialize the git repo"

"for the path, perfect, for the name, start the interview so we can brainstorm it
together, just we should have a name before the whole interview process is done
and the spec are written"

## Topic map

1. The game. Genre, the core loop, the win condition, the failure condition.
2. The player. One player or more, session length, the target device, the input.
3. The first version. What the first version holds, and what stays out.
4. The look and the sound. Where the art comes from, and who makes it.
5. The name. The theme words, the candidate list, the domain check.
6. The build and the delivery. The stack, the repo layout, the host, the license.

## Open items

| # | Item | State |
|---|---|---|
| 1 | The name of the game | open, topic 5 |
| 2 | Every topic, 1 to 6 | open |

## Topics

<!-- I append one section after each turn. -->

### Topic 1, the game

- Q: What kind of game is it?
- A: Word or trivia.

- Q: What does the player do, second to second?
- A: "something between 3 and 4, not shure yet". Option 3 was "pick one option,
  see the result". Option 4 was "type or guess an answer". The answer stays open.

- Q: How does one run end?
- A: No end, an open sandbox.

- Q: Where does the difficulty come from?
- A: Deduction. Full information, no chance.

Gap 1. The core loop mixes a pick and a typed guess. I ask again.

Gap 2. "No end" and "deduction" pull apart. A deduction puzzle holds a solution,
so a run ends when the player finds it. I ask what "no end" covers.

Second pass on topic 1.

- Q: The core loop, how does the player submit a move?
- A: "I think the 3, depending on the difficulty settings". Option 3 was "type,
  then pick". The difficulty setting changes the input. An easy level shows the
  candidates. A hard level asks for a typed answer.

- Q: What does "no end" cover?
- A: An endless puzzle stream. Each puzzle holds a solution and ends. The session
  runs on, and the next puzzle loads.

- Q: Where does the puzzle content come from?
- A: An outside source. A public dataset or an API.

Gap 3. The outside source needs a name and a license. I ask after the subject.

Open point. A difficulty setting now sits in the first version. It changes the
input shape, not only the word length.

Third pass on topic 1.

- Q: What are the puzzles about?
- A: "plane, airliner for now, it's a identification game". The subject starts
  with airliners. "for now" leaves room for other aircraft later.

- Q: What does the player deduce?
- A: Guess the plane model.

- Q: What does the game show after a guess?
- A: Right or wrong only.

The game, in one sentence. The game shows an airliner, and the player names the
model. An easy level offers the candidates. A hard level asks for a typed name.
One puzzle follows the next, with no end to the session.

Gap 3 stays open. The content source needs a name and a license. A photo of an
aircraft carries a copyright, and the model label must come from the same record.

Fourth pass on topic 1, closed.

- Q: What does the game show the player?
- A: A photo.

- Q: How precise must the answer be?
- A: The difficulty setting decides. Easy asks for the family. Hard asks for the
  variant.

- Q: Where do the images come from?
- A: A spotter site API.

Risk R1. A spotter site API returns a photo for an aircraft that the caller
names, by registration or by ICAO hex. The API gives the photo. It does not
always give the model. The game needs both fields, from a source that agrees
with itself. Topic 6 settles the source, the terms and the attribution.

### Topic 1, the answer

The game shows a photo of an airliner. The player names the model. The
difficulty setting picks the input and the precision:

| Level | Input | Answer precision |
|---|---|---|
| Easy | Pick from the candidates | The family, for example Boeing 737 |
| Hard | Type the name | The variant, for example 737-800 |

Feedback is right or wrong, with no hint. One puzzle follows the next, and the
session has no end.

### Topic 2, the player

- Q: Who plays it?
- A: "I was expecting some client-only website, so it can be hosted on a github
  page. the hard level must satisfy expert, but it should also be a learning
  tool, especialy on the low level"

- Q: Which device comes first?
- A: Both, equal. One layout serves the phone and the desktop.

- Q: Does the game remember the player?
- A: Saved in the browser. Local storage holds the streak and the settings.

- Q: Is there a score or a competition?
- A: A personal streak.

Contradiction C1. A client-only page on GitHub Pages cannot hold a secret. A
spotter site API key in the page is public. The API must also send CORS headers,
or the browser blocks the call. Topic 6 settles this.

Contradiction C2. Topic 1 set the feedback to "right or wrong only". Topic 2 asks
for a learning tool at the low level. A learning tool shows the right answer and
the reason. I ask which answer wins.

Second pass on topic 2.

- Q: C1. How do we get the photos into a static page?
- A: Survey the sources first. Open item 3.

- Q: C2. Does the game teach, or does it only mark the answer?
- A: Always show the answer and the reason. C2 resolves against the topic 1
  answer. Every guess names the model and the tell.

- Q: At the easy level, where do the wrong candidates come from?
- A: Random models. I said that a random set is often too easy, and Benjamin kept
  random. `design.md` records the trade-off.

Consequence of C2. The game needs a model reference: one record for each model,
with the manufacturer, the family, the variant and the tells. A photo API gives
no tell. The repo must hold this table. Open item 4 covers the author of it.

### Topic 3, the first version

- Q: How many models does the first version cover?
- A: About 3.

- Q: What stays out of the first version?
- A: All four non-goals. No server and no accounts. No shared leaderboard. No
  daily puzzle. No aircraft other than airliners.

- Q: What must work first, end to end?
- A: One photo, one answer. Four buttons, a right or wrong mark, hard-coded data
  and no API call.

- Q: Is there a date or an occasion for the first version?
- A: No date. A side project.

Note. Three models and a hard-coded photo agree with each other. The first
version is a demo of the loop, not a game with a full dataset. The survey of the
photo sources, open item 3, does not block the first slice.

### Topic 4, the look and the sound

- Q: What is the visual style?
- A: Photo first, plain frame. The photo fills the screen, and the controls sit
  in one neutral color.

- Q: Does the player get a feedback animation?
- A: A card that turns. The back of the card holds the model and the tell.

- Q: Is there sound?
- A: No sound.

- Q: Who makes the art that is not a photo?
- A: A free icon set. The license needs an attribution line in the page.

Note. The card that turns carries the C2 answer. The front asks, and the back
teaches. One component holds the whole feedback rule.

### Topic 5, the name

- Q: Which name do you like?
- A: "I had something like "what is that plane" in mind, I want to discuss it".
  I gave four candidates: Type Rating, Winglet, Squawk, Spot Check. Benjamin
  brought his own. The discussion runs in the next pass.

- Q: Does the name need a matching domain?
- A: No. The GitHub Pages URL is enough.

- Q: Which language does the interface use?
- A: English first, French later. The code holds every string in one file.

Second pass on topic 5.

- Q: Which form of the name wins?
- A: "What Plane?", with the repo `what-plane`. Benjamin took the recommendation.

- Q: Should I check whether the name is already in use?
- A: Yes, check it now.

#### The name check, run on 2026-10-28

Sources: the GitHub search API, and the Apple search API for the US store. A
DuckDuckGo query and a Bing query both failed, so no general web search ran.

| Name | Result |
|---|---|
| What Plane? | Taken. An iOS app, "What Plane?" by David Wilkinson, in Utilities. |
| WhatPlane | Taken four times on GitHub, and once as "Plane Identifier - WhatPlane". |
| what-plane | A GitHub organization holds it, with three repositories. |
| Name That Plane | Free. No app in the Apple store carries the name. |

The collision runs deeper than the name. The phrase "what plane" belongs to the
flight tracker category: Flightradar24, Plane Finder, Plane Above Me, "HeadUp -
What plane is this?". Each one answers "which aircraft flies over me now", from
ADS-B data. The name sets that expectation, and this game does something else.

The quiz category holds other names: "Guess the Modern Aircraft", "Aircraft
Recognition Quiz", "Aircraft Photos Quiz". A name that starts with "Guess the"
joins a crowd.

Claude proposes "Name That Plane". Nobody decided it yet. It is free in the
store, it signals a quiz, and it keeps the meaning of Benjamin's first idea.

Third pass on topic 5.

- Q: Which name do we keep?
- A: "Give me more names, I do like something silly and inocent link "What's
  that plane?"". The tone rule for the name: silly and innocent, in the shape of
  a question that a child asks.

#### The second name set, with the store check of 2026-10-28

| Name | Repo | Apple store |
|---|---|---|
| Oooh, a Plane! | oooh-a-plane | free |
| Look, a Plane! | look-a-plane | free |
| Plane Brain | plane-brain | free |
| Big Metal Bird | big-metal-bird | free |
| Tail Tale | tail-tale | free |
| Wing It | wing-it | not checked |
| Planey McPlaneface | planey-mcplaneface | not checked |
| Nice Plane! | nice-plane | not checked |

Fourth pass on topic 5.

- Q: Which name do we keep?
- A: "a superman meme reference: "is it a plane?"". The reference is the Superman
  line: "Look, up in the sky. It is a bird. It is a plane. It is Superman."

Check of 2026-10-28. No Apple store app carries the name "Is It a Plane" or
"It's a Plane". GitHub holds two repositories: `boryanvbu/is-it-a-plane` and
`DevanshGaira/Is-It-a-Bird-Is-It-a-Plane-It-s-Superman-`. A repository name only
needs to stay unique inside one account, so `is-it-a-plane` is free for Benjamin.

Weak part. The title asks a yes or no question, and the game asks for a model.
Claude proposes a tagline to carry the function, and nobody decided it yet.

Fifth pass on topic 5.

- Q: Can you check the exact meme before we settle on a name?
- A: Benjamin asked for the source. I read the two Wikipedia articles on the
  series, and I report the two versions of the line.

| Version | The line |
|---|---|
| Radio, through the mid-1940s | "Up in the sky! Look! It's a bird! It's a plane! It's Superman!" |
| Radio from 1945, and the 1952 TV show | "Look! Up in the sky! It's a bird! It's a plane! It's Superman!" |

The line states the guesses. It does not ask one. The form "Is it a plane?"
changes the quote.

The line also matches the game. It is a list of wrong guesses that ends with the
right answer, and the player does the same thing.

### Topic 5, the answer

- Q: Which name do we settle on?
- A: "It's a Plane!", with the tagline "But which one?" and the repo
  `its-a-plane`.

| Field | Value |
|---|---|
| Display name | It's a Plane! |
| Tagline | But which one? |
| Repo and folder | its-a-plane |
| Source of the name | The Superman opening line. Benjamin proposed the reference. |

The name keeps the apostrophe. The house style rule bans a contraction in prose,
and a quoted line keeps its own words.

Check of 2026-10-28. No Apple store app carries the name. GitHub holds five
repositories named `its-a-plane`, and none is a quiz. Three of them read ADS-B
data. The name is free inside Benjamin's own account.

### Topic 6, the build and the delivery

- Q: Which stack?
- A: Plain HTML, CSS and JS. No build step, no npm, no framework.

- Q: How does the page reach GitHub Pages?
- A: A GitHub action builds it.

- Q: Which tests does the first version carry?
- A: No test.

- Q: Is the repo public, and under which license?
- A: Public, with no license file. Consequence: nobody may reuse the code. The
  default is all rights reserved.

Contradiction C3. The plain stack has nothing to build, so Pages can serve the
repository root with no action. An action still has a job: it can refresh the
photo and model data file. I ask what the action does.

Second pass on topic 6.

- Q: C3. What does the GitHub action do?
- A: It publishes the page. The repository root holds the tools and the notes,
  and the action publishes the site folder as the Pages artifact.

- Q: When do I run the photo source survey?
- A: A task in the build plan, after the loop works. Open item 3 closes as a
  planned task.

- Q: Who writes the model records?
- A: Claude drafts, and Benjamin checks the aviation facts. Open item 4 closes.

- Q: Where do the three photos of the first version come from?
- A: Wikimedia Commons. Each photo needs an author line and a license line.

Contradiction C4. The first version holds three models, and the easy level draws
random candidates. Three models cannot fill four candidate buttons. A draw from
three models also shows the same three names every time, so the player learns the
buttons and not the aircraft. I ask how to solve it.

Third pass on topic 6, closed.

- Q: C4. How do we fix the model count?
- A: Six models, four buttons. Each puzzle draws the right answer and three
  wrong ones. This replaces the "about 3" answer from topic 3.

- Q: Does the first version carry the hard level, with a typed answer?
- A: No. The easy level only.

- Q: Does the first version carry the streak and the browser storage?
- A: Yes. The streak counts, and local storage keeps the best streak.

Claude proposes the repository layout, and nobody decided it yet. The action
publishes the page, so the site needs its own folder:

| Path | Content |
|---|---|
| `site/` | index.html, the style, the script, the data and the images |
| `tools/` | the scripts that build the data file |
| `.github/workflows/` | the action that publishes `site/` |
| the root | README.md, design.md, build-plan.md, progress.md, interview-log.md |

## The change of goal, 2026-10-28

Benjamin read the 25 decisions and changed the goal: "I changed my mind, I do not
want a quizz game, I want a learning site (duolingo style), and quizz are a
sub-feature of it".

The interview reopens. The quiz becomes one exercise type inside a course.

### What the change breaks

| # | Decision | What breaks |
|---|---|---|
| 4 | The session has no end | A lesson ends. The endless stream becomes a practice mode, not the whole game. |
| 24 | The first version: six models, four buttons | The first version now needs a lesson, and six models fill a course of one unit. |
| 12 | The browser holds the progress | A course tracks each item for weeks. One browser holds it, and the player loses it on a second device. |
| 19 | Plain HTML, CSS and JS | A course needs a lesson order, a screen for each exercise type and a progress store. More code than one loop. |
| 22 | No test | A review schedule is logic with no screen. A unit test fits it. |
| 1 | The tagline "But which one?" | The tagline names a quiz. A course teaches, so the second line may change. |

### What the change keeps

Decisions 2, 3, 5, 6, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 23 and 25 stand.
The name "It's a Plane!" stands.

### The second topic map

1. The course. The unit, the lesson, the order, the length of one lesson.
2. The exercise types. The photo quiz is one. Which others does a lesson hold?
3. The teaching screen. What a lesson shows before the first exercise.
4. Progress and review. Mastery for each model, the review schedule, the daily goal.
5. The first version, a second pass. What the first lesson holds.
6. The stack and the storage, a second pass. Decisions 12, 19 and 22.

### Second pass, topic 1, the course

- Q: What does one unit cover?
- A: One visual feature. Unit 1 the engine count, unit 2 the engine position,
  unit 3 the tail, unit 4 the winglet. The course teaches a method.

- Q: How long is one lesson?
- A: Two minutes, five exercises.

- Q: How does the player move through the course?
- A: A path plus a free practice mode. The course locks in order, and the
  practice mode draws from every model the player saw.

- Q: How large does the full course get?
- A: "six models, one unit for a first demo, about 30 models, five units for the
  full version". This replaces decision 24.

Constraint K1, from the unit rule. A unit teaches one visual feature, so the six
models of the demo must differ in that feature. Almost every airliner in service
has two engines. A unit on the engine count needs a four-engine model, for
example the Boeing 747, and a three-engine model, for example the McDonnell
Douglas MD-11. Topic 5 picks the six models under this constraint.

### Second pass, topic 2, the exercise types

- Q: Which exercise types does a lesson hold?
- A: Two types. Photo to model, and a crop of one part. Benjamin left out the
  two-photo type and the model-to-feature type.

- Q: What happens on a wrong answer inside a lesson?
- A: Show the tell, then come back later. The exercise returns at the end of the
  lesson.

- Q: Does a lesson have a fail state?
- A: A score only. Nothing locks.

- Q: Does one lesson mix the exercise types?
- A: Yes. Five exercises, and the lesson mixes the two types.

Point P1, for topic 4. Topic 1 set a path that locks in order, and topic 2 set a
score that locks nothing. I read it this way: the player opens the next lesson
when the current lesson ends, whatever the score. Topic 4 confirms it.

Constraint K2, from the crop type. A crop exercise needs the part inside the
photo. Each photo record needs the crop box for each part it shows, for example
the tail or the wingtip. The data model carries the coordinates.

### Second pass, topic 3, the teaching screen

- Q: What does the teaching screen show before the first exercise?
- A: Two photos that compare, with the difference marked on both.

- Q: Can the player skip the teaching screen?
- A: Yes, and it stays reachable from the lesson page.

- Q: Is there a reference section outside the lessons?
- A: Both. One page for each model, and a glossary page for each feature.

- Q: How does a label sit on the photo?
- A: Coordinates in the data file. The record holds the label text and the
  position.

Consequence. The data model carries three record types:

| Record | Fields |
|---|---|
| Model | the manufacturer, the family, the variant, the tells, the photos |
| Photo | the image link, the author, the license, the crop boxes, the labels |
| Feature | the glossary entry, the types of it, the models that show each type |

The reference section adds two screen types and real content work. The course
needs one page for each of about 30 models, and one page for each of five
features.

### Second pass, topic 4, progress and review

- Q: P1. Which rule opens the next lesson?
- A: The lesson ends, whatever the score. P1 closes. The path locks the order,
  and the score locks nothing.

- Q: How does the review pick an item again?
- A: Intervals of one, three, seven and thirty days. A right answer moves the
  model to the next interval. A wrong answer sends it back to one day.

- Q: Is there a daily goal?
- A: A streak of days. One lesson a day keeps the streak.

- Q: What does the progress screen show?
- A: The path, plus a mastery bar for each model.

Consequence. The review schedule and the day streak both need a date in storage.
Decision 22 breaks as expected: the schedule is logic with no screen, and a unit
test for it costs little. Topic 6 settles it.

### Second pass, topic 5, the first version

- Q: What does the first version hold?
- A: One unit, teach and test. The teaching screen with two photos, two lessons
  of five exercises, both exercise types, and a score at the end. The review, the
  day streak, the reference pages and the path screen all wait.

- Q: Which feature does unit 1 teach?
- A: The engine count.

- Q: How many lessons does unit 1 hold?
- A: Two lessons, ten exercises over six models.

Problem with unit 1. The engine count splits the airliners well in history, and
poorly today. Almost every airliner in service has two engines. The four-engine
airliners in passenger service are the Airbus A380 and a few Airbus A340. The
three-engine airliners carry freight, and they are rare. So the six models of
unit 1 force a choice on the service scope.

Second pass on topic 5.

- Q: Which six models go into unit 1?
- A: Two and four engines, all in passenger service.

| Model | Engines |
|---|---|
| Airbus A380-800 | 4 |
| Airbus A340-300 | 4 |
| Boeing 737-800 | 2 |
| Airbus A320 | 2 |
| Boeing 777-300ER | 2 |
| Airbus A220-300 | 2 |

- Q: Does the course cover aircraft outside passenger service?
- A: Freighters yes, retired no. A spotter sees a freighter at a cargo apron.
  Constraint K1 closes.

### Second pass, topic 6, the stack and the storage

- Q: Decision 19, again. Which stack?
- A: Benjamin asked about Ionic, then asked for a comparison: "do you know
  anything like Ionic, so we can compare, and take a better descision?". The
  question stays open, and the comparison follows.

- Q: Do you want a phone app later?
- A: "more like a progressive web app, except if you have something against it".

- Q: Decision 12, again. Where does the progress live?
- A: Local storage, plus a share code.

- Q: Decision 22, again. Which tests?
- A: No test at all. Decision 22 stands. I stated the risk once: a date bug in
  the interval schedule hides for days.

#### The view layer comparison, checked on 2026-10-28

| Option | What it is | Build step | Look | Note |
|---|---|---|---|---|
| Plain CSS | No library | none | yours | The first version needs a button, a card and a progress bar |
| Web Awesome 3.14 | Web components, the successor of Shoelace | none, a CDN tag | neutral, themeable | A free core, and a paid Pro tier. The docs name no license |
| Shoelace 2.20.1 | The same library, earlier name | none, a CDN tag | neutral | The site says "sunset with no active development" |
| Ionic 9 | Web components with a native look | npm, for the supported route | iOS and Android | The CDN route exists, and the docs call it a testing route |
| Framework7 9.2 | A mobile app look, with a Core version | the docs do not say | iOS and Material | Same objection as Ionic |
| Vite and TypeScript | A build tool and types, no components | yes | yours | Types on the three record types |

#### The progressive web app, and a storage fact

Claude has nothing against a progressive web app. It needs a manifest and a
service worker, and GitHub Pages serves it over HTTPS. Any stack supports it.

One fact from the WebKit blog, the post on full third-party cookie blocking.
Safari deletes the script-writable storage of a site after seven days of Safari
use with no interaction on that site. The list covers local storage, IndexedDB,
session storage and the service worker cache. A web app that the player adds to
the home screen is exempt.

Consequence. A day streak in local storage disappears on iOS after seven days
away, unless the player installs the app. The progressive web app is not a nice
extra here. It protects the streak. The share code from decision 12 is the
second line of defence.

Second pass on topic 6.

- Q: Which view layer?
- A: Benjamin corrected the premise: "I don't care about the build or no build
  step, I care about the no server, hostable in a github page. Also if shoelace
  is the old version of webawesome, remove it from the options".

- Q: Does the first version carry the progressive web app parts?
- A: The manifest only. The player can install it. The service worker arrives
  with the review schedule.

Correction. My table framed the build step as the constraint. The real
constraint is a static site with no server, on GitHub Pages. Every option in the
table meets it, because each one writes static files. Shoelace leaves the list.

Fact, checked on this machine on 2026-10-28. `node` and `npm` do not exist in
the path. The sibling projects use bash and Python: `psdevenv/tooling` holds one
Python script and six bash scripts. So an npm stack starts with an install of
Node, and a Python generator uses the tooling that Benjamin already runs.

Third pass on topic 6.

- Q: Astro?
- A: "Astro look good, please present it to me in a bit more detail", then
  "Astro, and decide the island later". I gave the detail from the Astro docs:
  the island model, the content collections with a Zod schema, the page for each
  entry through `getStaticPaths()`, and the official `withastro/action` deploy.

- Q: Which language runs inside the lesson island?
- A: Benjamin asked for a comparison first: "I like svelte, but I never used it,
  can you make me a comparaison between svelte and plain TS?". I showed the same
  lesson code in both. Then Benjamin chose Svelte 5.

Reasons for Svelte, as I gave them. The island is one component, with no router
and no server, so it is the right size to learn on. A change of mind costs one
file. The data, the schema and the content pages do not depend on the choice.

Checked on 2026-10-28: the Svelte docs cover Svelte 5, and the runes are
`$state`, `$derived`, `$effect`, `$props`, `$bindable`, `$inspect` and `$host`.

### Topic 6, the answer

| Field | Value |
|---|---|
| Site builder | Astro, with the official `withastro/action` for Pages |
| The data | Astro content collections, with a Zod schema for each record type |
| The lesson island | One Svelte 5 component |
| The content pages | `getStaticPaths()` writes one page for each model and each feature |
| Hosting | GitHub Pages, static files, no server |
| Storage | Local storage, plus a share code to move the progress |
| Tests | None |
| Progressive web app | The manifest in the first version. The service worker later |

### Second pass, topic 7, the look

Benjamin opened this topic after the decision list: "for the look, do I need a UI
component library?".

- Q: Do you need a UI component library?
- A: I answered no, and I gave the list of parts: a button, a card that turns, a
  progress bar, a dialog, a list. A library adds a dropdown, a tab bar, a date
  picker, a toast and a data table, and the site uses none of them.

- Q: Which font does the site use?
- A: The system font, plus a monospace face for the model designation.

- Q: Decision 36, again?
- A: Benjamin asked to revisit it. I named the reason: decision 36 described one
  screen, and the site now holds eight screen types. I also named the tension
  between a friendly course for a beginner and a dense reference for an expert.

- Q: Which look does the whole site use?
- A: Friendly course everywhere. Rounded cards, one accent color for each unit,
  large progress. Consequence, stated before the choice: the expert loses the
  dense reference page.

- Q: Light or dark?
- A: Follow the system, plus a switch. The switch needs one stored value.

- Q: Does the site have a mascot?
- A: Later. The first version carries no character, and README.md records the
  question. The idea on the table: a bird that people take for a plane, from the
  line in the name.

- Q: Which CSS layer, after the friendly course answer?
- A: Benjamin asked for an option other than Web Awesome, then asked whether
  Bulma stays alive. He chose Bulma, vendored in the repo.

#### The CSS layer comparison, checked on 2026-10-28

| Option | What it gives | Install | License |
|---|---|---|---|
| Bulma 1.0.4 | card, button, progress bar, a light, dark and system theme, a palette from one color | one CSS file | MIT |
| Bootstrap 5.3.8 | the same parts, and a team of maintainers | one CSS file | MIT |
| Open Props 1.7.23 | design tokens only | one CDN link | MIT |
| Tailwind and daisyUI 5.7.50 | components as class names, many themes | Node, Tailwind, a plugin line | the install page names none |

#### The Bulma health check, 2026-10-28

| Fact | Value |
|---|---|
| License | MIT |
| Stars, forks | 50.0k, 3.9k |
| Open issues | 349 |
| Archived | no, and no unmaintained notice |
| Owner | jgthms, Jeremy Thomas. The page lists no other contributor |
| Releases | 1.0.0, then 1.0.1 to 1.0.4. The latest is 1.0.4 |

Two limits on that table. The releases page gave no years, and both the npm
registry and the GitHub API refused my requests on that day. From my own
knowledge, 1.0.0 came out in March 2024 and 1.0.4 in April 2025. I did not
verify those two dates.

The rule that answers the risk: copy the Bulma CSS file into `src/styles/`. The
file needs no runtime and no build, so a dead project still serves a working
file. No CDN outage and no npm change can reach the site.

## The end of the interview

Benjamin typed "agreed" on 2026-10-28. I wrote `README.md`, `design.md`,
`build-plan.md` and `progress.md`, then closed this log.

Open items: none. Items 1 to 4 closed. C1 to C4 resolved. K1, K2 and P1 closed.
The 47 decisions sit in `README.md`, with a source for each one.

Five questions stay open in `README.md`, and none of them blocks the build: the
npm registry access, the mascot, the photo source for the full course, the
accent color of each unit, and the license file.


