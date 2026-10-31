# Decisions, It's a Plane!

One row for each decision. `README.md` links here. The source names who took
the decision, and the date names the day.

| # | Decision | Source | Date |
|---|---|---|---|
| 1 | Name: It's a Plane! Tagline: But which one? Repo and folder: `its-a-plane` | Benjamin | 2026-10-28 |
| 2 | The site teaches airliner identification, in the Duolingo shape | Benjamin | 2026-10-28 |
| 3 | The quiz is one exercise type inside a lesson, not the product | Benjamin | 2026-10-28 |
| 4 | Airliners only. Freighters yes, retired models no | Benjamin | 2026-10-28 |
| 5 | One unit teaches one visual feature: the engine count, the engine position, the tail, the winglet | Benjamin | 2026-10-28 |
| 6 | One lesson holds five exercises, about two minutes | Benjamin | 2026-10-28 |
| 7 | A lesson ends whatever the score, and the next lesson opens | Benjamin | 2026-10-28 |
| 8 | The course locks the lesson order. A practice mode draws from every model the player saw | Benjamin | 2026-10-28 |
| 9 | The full course: about 30 models in five units | Benjamin | 2026-10-28 |
| 10 | Two exercise types: a photo to the model, and a crop of one part | Benjamin | 2026-10-28 |
| 11 | One lesson mixes the two types | Benjamin | 2026-10-28 |
| 12 | A wrong answer turns the card, names the model and the tell, and the exercise returns at the end of the lesson | Benjamin | 2026-10-28 |
| 13 | A score at the end of the lesson. Nothing locks on the score | Benjamin | 2026-10-28 |
| 14 | The easy level shows four candidate buttons, drawn at random | Benjamin | 2026-10-28 |
| 15 | The hard level asks for a typed answer and the variant. It comes after the first version | Benjamin | 2026-10-28 |
| 16 | The difficulty setting picks the input and the answer precision | Benjamin | 2026-10-28 |
| 17 | Each unit opens with a teaching screen: two photos that compare, with the difference marked on both | Benjamin | 2026-10-28 |
| 18 | The player can skip the teaching screen, and it stays reachable from the lesson page | Benjamin | 2026-10-28 |
| 19 | A reference section holds one page for each model, and one glossary page for each feature | Benjamin | 2026-10-28 |
| 20 | A label sits on a photo by coordinates in the data file | Benjamin | 2026-10-28 |
| 21 | Claude drafts the model records and the teaching text. Benjamin checks the aviation facts | Benjamin | 2026-10-28 |
| 22 | The review schedule uses intervals of one, three, seven and thirty days | Benjamin | 2026-10-28 |
| 23 | A right answer moves the model up one interval. A wrong answer sends it back to one day | Benjamin | 2026-10-28 |
| 24 | A streak of days. One lesson a day keeps it | Benjamin | 2026-10-28 |
| 25 | The progress screen shows the path, and a mastery bar for each model | Benjamin | 2026-10-28 |
| 26 | The browser holds the progress in local storage, plus a share code to move it | Benjamin | 2026-10-28 |
| 27 | No account and no server | Benjamin | 2026-10-28 |
| 28 | Astro writes the site. The official `withastro/action` publishes it to GitHub Pages | Benjamin | 2026-10-28 |
| 29 | The data lives in Astro content collections, with a Zod schema for the model, photo and feature records | Benjamin | 2026-10-28 |
| 30 | The lesson island is one Svelte 5 component | Benjamin | 2026-10-28 |
| 31 | `getStaticPaths()` writes the reference pages from the data | Benjamin | 2026-10-28 |
| 32 | No test | Benjamin | 2026-10-28 |
| 33 | The first version carries the manifest only. The service worker comes with the review schedule | Benjamin | 2026-10-28 |
| 34 | The repo is public, with no license file. All rights reserved | Benjamin | 2026-10-28 |
| 35 | The repo layout follows the Astro default: `src/content`, `src/pages`, `src/components`, `public`, `.github/workflows` | Benjamin | 2026-10-31 |
| 36 | The friendly course look, on every screen. Rounded cards, one accent color for each unit, large progress | Benjamin | 2026-10-28 |
| 37 | No sound | Benjamin | 2026-10-28 |
| 38 | A free icon set, with an attribution line | Benjamin | 2026-10-28 |
| 39 | The phone and the desktop carry equal weight | Benjamin | 2026-10-28 |
| 40 | English first. One file holds every string, for a French version later | Benjamin | 2026-10-28 |
| 41 | The first version: one unit, the engine count. The teaching screen, two lessons of five exercises, both exercise types, a score at the end | Benjamin | 2026-10-28 |
| 42 | Six models. A380-800 and A340-300 with four engines. 737-800, A320, 777-300ER and A220-300 with two | Benjamin | 2026-10-28 |
| 43 | The photos come from Wikimedia Commons, each with an author line and a license line | Benjamin | 2026-10-28 |
| 44 | Bulma 1.0.4 for the CSS, copied into `src/styles/`. MIT, one file, no JavaScript, no CDN at run time | Benjamin | 2026-10-28 |
| 45 | The system font for the text, and a monospace face for the model designation | Benjamin | 2026-10-28 |
| 46 | The theme follows the system, plus a switch. The switch stores one value | Benjamin | 2026-10-28 |
| 47 | No mascot in the first version | Benjamin | 2026-10-28 |
| 48 | The GitHub repository description: "Learn to name an airliner from a photo, two minutes at a time." | Benjamin | 2026-10-28 |
| 49 | Node 26 runs in a devcontainer, `mcr.microsoft.com/devcontainers/javascript-node:26`. Nothing installs on the host | Benjamin | 2026-10-29 |
| 50 | The repo keeps the default npm registry. A local registry goes in `.devcontainer/local.env`, and git ignores that file | Benjamin | 2026-10-29 |
| 51 | When a local registry is used, `.devcontainer/local.env` sets `npm_config_omit_lockfile_registry_resolved=true`, so no local registry host goes into `package-lock.json` | Benjamin | 2026-10-31 |
| 52 | The icon set is Lucide (ISC). The plane icon and the theme icons come from it, and the footer credits it and links the license | Benjamin | 2026-10-31 |
| 53 | The manifest short name is `its-a-plane` | Benjamin | 2026-10-31 |
