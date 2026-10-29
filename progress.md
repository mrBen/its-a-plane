# Progress, It's a Plane!

The execution agent writes this file. bcollet reads it. One row for each task of
`build-plan.md`.

| Task | Title | Status | Date | Verification result | Note |
|---|---|---|---|---|---|
| 1 | Make npm work | done | 2026-10-29 | In the `javascript-node:26` container with `.devcontainer/local.env`: `node --version` printed v26.12.1, `npm ping` printed PONG. A test install wrote a lockfile with 0 `resolved` lines | Node runs in the devcontainer, not on the host. A local registry sits in the git-ignored `local.env` |
| 2 | Create the Astro project | not started | | | |
| 3 | Add Svelte and the Bulma file | not started | | | |
| 4 | Write the data schema | not started | | | |
| 5 | Collect the six photos | not started | | | |
| 6 | Build the unit list page | not started | | | |
| 7 | Build the teaching screen | not started | | | |
| 8 | Build the lesson island | not started | | | |
| 9 | Add the crop exercise | not started | | | |
| 10 | Build the card that turns | not started | | | |
| 11 | Add the repeat queue and the score screen | not started | | | |
| 12 | Add the manifest and the install | not started | | | |
| 13 | Add the deploy action | not started | | | |
| 14 | Survey the photo sources | not started | | | |

## The rules for this file

1. Write one row for each task you finish.
2. Use one of four words for the status: not started, in progress, done,
   blocked.
3. Write the real result of the verification step, and not a plan.
4. Name the blocker in the note column when you write "blocked".
5. Never edit `build-plan.md`.
