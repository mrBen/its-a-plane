# Design, It's a Plane!

## The constraints

| # | Constraint | Source |
|---|---|---|
| 1 | Static files only. No server, no account, no database | bcollet, decision 27 |
| 2 | GitHub Pages hosts the site | bcollet, decision 28 |
| 3 | The phone and the desktop carry equal weight | bcollet, decision 39 |
| 4 | Safari deletes the script-writable storage of a site after seven days of Safari use with no interaction on that site. A site that the player adds to the home screen is exempt | The WebKit blog, the post on full third-party cookie blocking, read on 2026-10-28 |
| 5 | Each photo needs an author line and a license line | bcollet, decision 43 |
| 6 | This agent sandbox cannot reach `registry.npmjs.org`. The host times out, and `www.npmjs.com` answers 403. `nodejs.org` and `cdn.jsdelivr.net` answer 200 | A test on 2026-10-28 |
| 7 | Almost every airliner in passenger service has two engines. Four engines means the A380 and a few A340. Three engines means a rare freighter | A fact. It picked the six models of unit 1 |
| 8 | Bulma lives in the repo as a copied file, not as a CDN link | bcollet, decision 44 |

## The structure

### The data

Three record types live in Astro content collections. `src/content.config.ts`
holds one Zod schema for each one. The build fails on a record with a missing
field.

| Collection | File | Fields |
|---|---|---|
| models | `src/content/models.json` | id, manufacturer, family, variant, designation, engine count, engine position, tail type, winglet type, the tells, the photo ids |
| photos | `src/content/photos.json` | id, the model id, the image path, the author, the license, the license link, the crop boxes, the labels |
| features | `src/content/features.json` | id, the name, the glossary text, the types, the model ids for each type |

A crop box holds a part name and four numbers: x, y, width and height, in
percent of the image. A label holds a text, an x and a y, also in percent. The
percent keeps the data independent of the image size.

### The pages

| Path | Screen |
|---|---|
| `src/pages/index.astro` | The unit list |
| `src/pages/learn/[unit].astro` | The teaching screen, then the lesson island |
| `src/pages/models/[id].astro` | One page for each model |
| `src/pages/glossary/[id].astro` | One page for each feature |

`getStaticPaths()` writes the model pages and the glossary pages from the
collections. Those pages ship no JavaScript.

### The island

`src/components/Lesson.svelte` holds the whole lesson. The page passes the
models of the unit as a prop, and the island draws the exercises at run time,
because decision 14 asks for random candidates.

The island state:

- the exercise queue, five items, two types mixed
- the index of the current exercise
- the picked answer, or none
- the score
- the repeat queue, for a wrong answer

A wrong answer turns the card, names the model and the tell, and pushes the
exercise to the end of the queue. The lesson ends with the score screen.

### The logic that is not a screen

`src/lib/progress.ts` holds the local storage, the share code and the review
schedule. It is plain TypeScript with no Svelte and no DOM. Two reasons: a later
test needs no browser, and a move away from Svelte touches no rule.

The review schedule uses the intervals of one, three, seven and thirty days. A
right answer moves the model up one interval, and a wrong answer sends it back
to one day. The first version does not use this module, and the design names it
now so the lesson code does not grow into it.

### The look

Bulma 1.0.4 sits in `src/styles/bulma.min.css`, copied from the CDN once. The
site uses its card, its button and its progress bar. Its color mode covers the
light, dark and system theme. One accent color for each unit comes from its
color palette feature.

The text uses the system font. The model designation uses a monospace face, so
`737-800` reads as a code and not as a word.

### The deploy

`.github/workflows/deploy.yml` runs `withastro/action`, then
`actions/deploy-pages`. `astro.config.mjs` sets `site` to the Pages URL and
`base` to `/its-a-plane`. The repository settings need Pages set to GitHub
Actions, and that setting needs the repository owner.

## The rejected options

| Option | Why not |
|---|---|
| A quiz game with no course | bcollet changed the goal on 2026-10-28. The quiz became one exercise type |
| Plain HTML, CSS and JS | It writes no reference page from the data, and the records get no schema |
| Ionic 9, Framework7 9 | Their iOS and Android look fights the friendly course look, and both add a component model |
| Web Awesome 3 | A paid Pro tier, and the docs name no license |
| Shoelace 2 | The site says "sunset with no active development" |
| Tailwind and daisyUI | The install page names no license, and it adds Tailwind to the build |
| Bootstrap 5.3.8 | A team maintains it, and that is the stronger point. Its look is the most generic, and Bulma won on the look |
| Open Props | Tokens only. Every component stays mine to write |
| The two-photo exercise type | bcollet left it out of the list |
| The model-to-feature exercise type | bcollet left it out of the list |
| Hearts, or a pass mark | bcollet chose a score that locks nothing |
| A server with accounts | Constraint 1 |
| A shared leaderboard | It needs a server, and it invites cheating |
| A spotter site API called from the browser | A static page cannot hold a key, and the terms need a read. Task 14 surveys it |
| A native phone app through Capacitor | bcollet chose a progressive web app |

## The trade-offs

What this design costs:

1. Node and npm, a dependency tree and a build step. Constraint 6 blocks the
   install inside this agent sandbox, so bcollet runs the npm commands himself.
2. Two new tools for bcollet to learn: Astro and Svelte 5.
3. Class names from Bulma in the markup. A move away from it touches the markup,
   and no logic.

What it buys:

1. The reference pages come from the data file, with no page to write by hand.
2. The Zod schema fails the build on a bad record, instead of a blank screen.
3. One island of interactive code. Every other page ships no JavaScript.

The costs that bcollet accepted, after I named them:

| Cost | Where it shows |
|---|---|
| The friendly course look serves the beginner, and the expert loses a dense reference page | decision 36 |
| Random candidates are cheap to build, and often too easy. A widebody next to a regional jet gives the answer away | decision 14 |
| No test. The review schedule is logic with no screen, and a date bug hides for days | decision 32 |
| The progress lives in one browser. The share code and the install both reduce the loss | decisions 26 and 33 |
