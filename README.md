# Amrit Krishna Prabhu — portfolio

A standalone recreation of the owner's Base44 portfolio, using the five-page design visible in the editor. Static HTML, CSS and JavaScript: no Base44 subscription, database, account service, build step, or secret keys required.

## Publish on GitHub Pages

Upload `index.html`, `style.css`, `site.js`, `.nojekyll`, `404.html` and the `assets` folder to the repository root. In repository Settings → Pages, publish `main` → `/ (root)` using Deploy from a branch. Keep the repository public for free GitHub Pages hosting.

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
