# Progress, It's a Plane!

The execution agent writes this file. bcollet reads it. One row for each task of
`build-plan.md`.

| Task | Title | Status | Date | Verification result | Note |
|---|---|---|---|---|---|
| 1 | Make npm work | done | 2026-10-29 | In the `javascript-node:26` container with `.devcontainer/local.env`: `node --version` printed v26.12.1, `npm ping` printed PONG. A test install wrote a lockfile with 0 `resolved` lines | Node runs in the devcontainer, not on the host. A local registry sits in the git-ignored `local.env` |
| 2 | Create the Astro project | done | 2026-10-29 | `npm run build` printed "Complete!" and wrote `dist/index.html`, 312 bytes. `package-lock.json` holds 0 `resolved` lines | Method differs from steps 1 to 5. I ran `npm create astro@latest -- scaffold --template minimal --no-install --no-git --skip-houston --yes` in `/tmp` of the container, because the starter does not write into a folder that holds files. I copied `.vscode`, `AGENTS.md`, `astro.config.mjs`, `package.json`, `public`, `src` and `tsconfig.json` into the project, and skipped the starter `README.md`. I added the starter `.gitignore` lines after ours, renamed the package to `its-a-plane`, then ran `npm install`. The minimal template is the empty one. The starter asks no TypeScript question, and the template extends `astro/tsconfigs/strict`. The local registry stops at astro 7.4.1, so `package.json` asks for `^7.4.1` and not `^7.4.4`. `site` is `https://mrben.github.io`, in lowercase, and `base` is `/its-a-plane`. Open point: the template page links `/favicon.svg` with no base, so the icon fails under `/its-a-plane`. Task 6 replaces that page |
| 3 | Add Svelte and the Bulma file | done | 2026-10-29 | `npm run build` exit 0, "Complete!". `wc -c src/styles/bulma.min.css` printed 677931. `package-lock.json` holds 0 `resolved` lines | `npx astro add svelte --yes` installed `@astrojs/svelte` ^9.1.0, `svelte` ^5.57.2 and `typescript` ^6.0.3, wrote `svelte.config.js`, and added `svelte()` to `astro.config.mjs`. The file header reads "bulma.io v1.0.4 | MIT License". No layout exists before task 6, so `src/pages/index.astro` imports the Bulma file. Task 6 moves the import to `src/layouts/Base.astro`. Extra check: a temporary page with one `$state` component built to an `astro-island` with `component-url="/its-a-plane/_astro/..."`. I deleted the page and the component after the check |
| 4 | Write the data schema | done | 2026-10-29 | `npm run build` exit 0. A temporary list on the index page printed "models: 6, features: 1" and the six designations. `grep -c A380 dist/index.html` printed 1. With `engineCount` removed from one record, the build failed with `InvalidContentEntryDataError` | Three collections with the `file()` loader and Zod 4 from `astro/zod`. Field names: `engineCount`, `enginePosition`, `tailType`, `wingletTypes`, `tells`, `photoIds`. `wingletTypes` is a list, because one model can fly with more than one wingtip type: bcollet pointed out the fence and the sharklet on the A320-200. Each tell names its feature. `reference()` links photos, models and features, so the build fails on an unknown id. Claude drafted the tells, the winglet types and the glossary text. bcollet did not check them yet (decision 21). The build warns "No items found in src/content/photos.json" until task 5. I removed the temporary list after the check |
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
