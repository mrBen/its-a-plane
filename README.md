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

The decision log lives in [`decisions.md`](decisions.md).

## Open questions

1. The npm registry. Closed on 2026-10-29. Where `registry.npmjs.org` is out
   of reach, `.devcontainer/local.env` points npm to a local registry. See
   decisions 49 to 51 in `decisions.md`.
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
- `decisions.md`, the decision log
- `build-plan.md`, the tasks for the execution agent
- `progress.md`, what the execution agent finished
- `interview-log.md`, the interview record, closed
