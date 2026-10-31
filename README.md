# It's a Plane!

But which one?

A learning site that teaches airliner identification, in the Duolingo shape.

> [!WARNING]
> **Early build.** The lessons are not finished, and the content in the app is
> placeholder. The second lesson, the remaining units, the reference pages and
> the progress features are still to come.

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
It is live at https://mrben.github.io/its-a-plane/, and it installs as a
standalone app from the browser.

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

## Built with

Astro 7 writes the static site, with one Svelte 5 island for the lesson. The
data sits in Astro content collections with a Zod schema, and TypeScript runs
throughout. Bulma 1.0.4 supplies the CSS, copied into `src/styles/`. The site
deploys to GitHub Pages with `withastro/action`, and the project runs in a Node
26 devcontainer.

## Running it

The project runs in the devcontainer, which carries Node 26. Nothing installs
on the host.

```sh
npm install
npm run dev
```

The dev server answers at http://localhost:4321/its-a-plane/. `npm run build`
writes the static site to `dist/`.

## Decisions

The decision log lives in [`decisions.md`](decisions.md).

## Open questions

1. The mascot. One idea sits on the table: a bird that people take for a plane,
   from the line in the name. Nobody decided it.
2. The photo source for the full course. Wikimedia Commons serves the first six
   photos. The other sources are still to be surveyed: the terms, the CORS
   headers and the label quality of each one.
3. The accent color for each of the five units. The palette is not chosen.
4. The license file. The repo carries none, so all rights reserved. Revisit it
   when somebody asks to reuse the code.

## The other files

- `design.md`, the structure and the trade-offs
- `decisions.md`, the decision log
- `build-plan.md`, the tasks for the execution agent
- `progress.md`, what the execution agent finished
- `interview-log.md`, the interview record, closed
