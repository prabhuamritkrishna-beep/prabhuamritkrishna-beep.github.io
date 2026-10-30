# Amrit Krishna Prabhu — portfolio

A standalone recreation of the owner's Base44 portfolio, using the five-page design visible in the editor. Static HTML, CSS and JavaScript: no Base44 subscription, database, account service, build step, or secret keys required.

## Publish on GitHub Pages

Upload `index.html`, `style.css`, `site.js`, `.nojekyll`, `404.html` `favicon.svg`, `portrait.avif` and `Amrit_Prabhu_Resume.docx` to the repository root. In repository Settings → Pages, publish `main` → `/ (root)` using Deploy from a branch. Keep the repository public for free GitHub Pages hosting.

This website uses hash routes (`#/projects`) so navigation works on GitHub Pages, including project repositories. A custom domain can be added later after ownership is verified. No CNAME is included until the domain is registered and its DNS is configured.

## Update content

- Edit `site.js` to update portfolio text, experience, skills and projects. The structured `experience`, `skillGroups` and `planned` arrays are near the top.
- Replace `portrait.avif` with a new portrait and update the HTML image source if its format changes.
- Replace `Amrit_Prabhu_Resume.docx` to update the downloadable resume.
- Styling lives in `style.css`. The primary color settings are in `:root`.
- Contact email: `prab2534@kettering.edu`. The form opens an email draft; it does not pretend to send messages or store visitor information.
- Real project screenshots can replace the clearly labeled illustrative WEB-C layout when available. No client screenshots, testimonials or future engineering results have been invented.

## Changes from Base44

- Uses the latest approved resume, rather than the outdated resume on the published Base44 site.
- Corrects WEB-C dates to January–June 2026.
- Adds user-supplied varsity volleyball and Troy Xavira achievements and dates.
- Displays planned engineering/AI work honestly as learning directions.
- Uses the Kettering email consistently.
- Removes Base44 dependencies and private admin/database functions. GitHub's file editor can be used for updates; there is no misleading local-only admin panel.

## Preview locally

From this directory run `python3 -m http.server 8765`, then open `http://localhost:8765`.

The site loads Google Fonts, falling back to system fonts if unavailable. Portrait is copied from the owner's existing portfolio. The Word resume is the owner's approved file.

## FactoryOS AI portfolio plan

Added October 29, 2026. This is a portfolio roadmap, not the FactoryOS application. All seven sprint milestones, seven mini-projects, and five learning phases start as `Planned`. No build-log entries or evidence links have been invented.

- `#/factoryos` — project overview, conceptual architecture, sprint, mini-lab and 30-day roadmap.
- `#/factoryos/log` — chronological build log; initially an honest empty state.
- Home, Projects and Learning link into the plan. Existing portfolio pages, resume files and project content are preserved.
- `factoryos-data.js` stores the plan, statuses, evidence and journal entries. `factoryos.js` provides reusable views; `style.css` extends the existing theme.

### Record verified progress

Edit `factoryos-data.js` in source control. Milestone and mini-project `status` accepts `Planned`, `In Progress`, `Completed`, or `Blocked`. Add actual `commit`, `demo`, and `screenshot` URLs when available; mini-project repository URLs use `github`. Keep missing links `null`. Describe remaining work in `notes` when blocked or incomplete. Milestones support `problemsSolved` as an array of real outcomes.

Each roadmap phase has `completedDates` (unique ISO dates such as `2026-10-30` belonging to that phase), `notes`, and resource links. Progress is derived from completed statuses and explicitly recorded dates; it never advances automatically with the calendar. Public progress changes require committing the data update; there is no browser-only admin interface.

`buildLog` is an array of actual entries with `date`, `title`, `technologies` (array), `explanation`, `bugsAndSolutions` (array), `retrospective`, `commit` and `screenshot`. Leave it empty until real work is documented. Do not add fictional reflections, manual coding claims or verification results.

### Preview and deployment review

No build tool is required. Run `python3 -m http.server 8765` and visit `http://localhost:8765/#/factoryos`. JavaScript syntax can be checked with `node --check factoryos-data.js`, `node --check factoryos.js`, and `node --check site.js`.

The existing GitHub Pages configuration was inspected on October 29, 2026: it deploys from `main` at `/ (root)` and retains the custom domain in `CNAME`. **Pushing to main publishes the site.** Review these changes before deploying; do not push to main until the owner approves. Include both new JavaScript files when deploying. No hosting configuration changes are needed.
