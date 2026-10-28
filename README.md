# It's a Plane!

But which one?

A learning site that teaches airliner identification, in the Duolingo shape.

Tracker id: none
Interview date: 2026-10-28
Status: planned

## Scope

The site teaches a player to name an airliner from a photo. The course holds
units, and each unit teaches one visual feature: the engine count, the engine
position, the tail, the winglet. A lesson holds five exercises and runs about
two minutes. Every answer shows the right model and the tell that proves it.

The full course covers about 30 models in five units. A reference section holds
one page for each model and one glossary page for each feature. A review
schedule brings a model back after one, three, seven and thirty days.

The first version covers one unit, the engine count, with six models and two
lessons.

The site runs as static files on GitHub Pages, with no server and no account.

## Non-goals

- A server, an account or a login.
- A shared leaderboard.
- A daily puzzle, with the same content for every player.
- Aircraft other than airliners. Freighters count as airliners, and retired
  models stay out.
- The typed hard level, in the first version.
- Sound.
- Tests.
- A mascot, in the first version.
- A native phone app. The progressive web app covers the install.

## Decisions

| # | Decision | Source | Date |
|---|---|---|---|
| 1 | Name: It's a Plane! Tagline: But which one? Repo and folder: `its-a-plane` | bcollet | 2026-10-28 |
| 2 | The site teaches airliner identification, in the Duolingo shape | bcollet | 2026-10-28 |
| 3 | The quiz is one exercise type inside a lesson, not the product | bcollet | 2026-10-28 |
| 4 | Airliners only. Freighters yes, retired models no | bcollet | 2026-10-28 |
| 5 | One unit teaches one visual feature: the engine count, the engine position, the tail, the winglet | bcollet | 2026-10-28 |
| 6 | One lesson holds five exercises, about two minutes | bcollet | 2026-10-28 |
| 7 | A lesson ends whatever the score, and the next lesson opens | bcollet | 2026-10-28 |
| 8 | The course locks the lesson order. A practice mode draws from every model the player saw | bcollet | 2026-10-28 |
| 9 | The full course: about 30 models in five units | bcollet | 2026-10-28 |
| 10 | Two exercise types: a photo to the model, and a crop of one part | bcollet | 2026-10-28 |
| 11 | One lesson mixes the two types | bcollet | 2026-10-28 |
| 12 | A wrong answer turns the card, names the model and the tell, and the exercise returns at the end of the lesson | bcollet | 2026-10-28 |
| 13 | A score at the end of the lesson. Nothing locks on the score | bcollet | 2026-10-28 |
| 14 | The easy level shows four candidate buttons, drawn at random | bcollet | 2026-10-28 |
| 15 | The hard level asks for a typed answer and the variant. It comes after the first version | bcollet | 2026-10-28 |
| 16 | The difficulty setting picks the input and the answer precision | bcollet | 2026-10-28 |
| 17 | Each unit opens with a teaching screen: two photos that compare, with the difference marked on both | bcollet | 2026-10-28 |
| 18 | The player can skip the teaching screen, and it stays reachable from the lesson page | bcollet | 2026-10-28 |
| 19 | A reference section holds one page for each model, and one glossary page for each feature | bcollet | 2026-10-28 |
| 20 | A label sits on a photo by coordinates in the data file | bcollet | 2026-10-28 |
| 21 | Claude drafts the model records and the teaching text. bcollet checks the aviation facts | bcollet | 2026-10-28 |
| 22 | The review schedule uses intervals of one, three, seven and thirty days | bcollet | 2026-10-28 |
| 23 | A right answer moves the model up one interval. A wrong answer sends it back to one day | bcollet | 2026-10-28 |
| 24 | A streak of days. One lesson a day keeps it | bcollet | 2026-10-28 |
| 25 | The progress screen shows the path, and a mastery bar for each model | bcollet | 2026-10-28 |
| 26 | The browser holds the progress in local storage, plus a share code to move it | bcollet | 2026-10-28 |
| 27 | No account and no server | bcollet | 2026-10-28 |
| 28 | Astro writes the site. The official `withastro/action` publishes it to GitHub Pages | bcollet | 2026-10-28 |
| 29 | The data lives in Astro content collections, with a Zod schema for the model, photo and feature records | bcollet | 2026-10-28 |
| 30 | The lesson island is one Svelte 5 component | bcollet | 2026-10-28 |
| 31 | `getStaticPaths()` writes the reference pages from the data | bcollet | 2026-10-28 |
| 32 | No test | bcollet | 2026-10-28 |
| 33 | The first version carries the manifest only. The service worker comes with the review schedule | bcollet | 2026-10-28 |
| 34 | The repo is public, with no license file. All rights reserved | bcollet | 2026-10-28 |
| 35 | The repo layout follows the Astro default: `src/content`, `src/pages`, `src/components`, `public`, `.github/workflows` | Claude proposes, nobody decided yet | 2026-10-28 |
| 36 | The friendly course look, on every screen. Rounded cards, one accent color for each unit, large progress | bcollet | 2026-10-28 |
| 37 | No sound | bcollet | 2026-10-28 |
| 38 | A free icon set, with an attribution line | bcollet | 2026-10-28 |
| 39 | The phone and the desktop carry equal weight | bcollet | 2026-10-28 |
| 40 | English first. One file holds every string, for a French version later | bcollet | 2026-10-28 |
| 41 | The first version: one unit, the engine count. The teaching screen, two lessons of five exercises, both exercise types, a score at the end | bcollet | 2026-10-28 |
| 42 | Six models. A380-800 and A340-300 with four engines. 737-800, A320, 777-300ER and A220-300 with two | bcollet | 2026-10-28 |
| 43 | The photos come from Wikimedia Commons, each with an author line and a license line | bcollet | 2026-10-28 |
| 44 | Bulma 1.0.4 for the CSS, copied into `src/styles/`. MIT, one file, no JavaScript, no CDN at run time | bcollet | 2026-10-28 |
| 45 | The system font for the text, and a monospace face for the model designation | bcollet | 2026-10-28 |
| 46 | The theme follows the system, plus a switch. The switch stores one value | bcollet | 2026-10-28 |
| 47 | No mascot in the first version | bcollet | 2026-10-28 |
| 48 | The GitHub repository description: "Learn to name an airliner from a photo, two minutes at a time." | bcollet | 2026-10-28 |

## Open questions

1. The npm registry. This agent sandbox cannot reach `registry.npmjs.org`. I
   tested it on 2026-10-28: the host times out, and `www.npmjs.com` answers 403.
   `nodejs.org` and `cdn.jsdelivr.net` both answer 200. So an agent in this
   sandbox cannot run `npm install`. bcollet runs the npm commands in his own
   shell, or the proxy allowlist needs `registry.npmjs.org`. Task 1 of the build
   plan settles it.
2. The mascot. One idea sits on the table: a bird that people take for a plane,
   from the line in the name. Nobody decided it.
3. The photo source for the full course. Wikimedia Commons serves the first six
   photos. Task 14 surveys the other sources: the terms, the CORS headers and
   the label quality of each one.
4. The accent color for each of the five units. The palette is not chosen.
5. The license file. The repo carries none, so all rights reserved. Revisit it
   when somebody asks to reuse the code.

## The other files

- `design.md`, the structure and the trade-offs
- `build-plan.md`, the tasks for the execution agent
- `progress.md`, what the execution agent finished
- `interview-log.md`, the interview record, closed
