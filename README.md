# Mohamed Abdalrhman Elyas Ahmed — Civil Engineer Portfolio

Bilingual (English / Arabic) personal engineering portfolio, published with GitHub Pages.

## Structure
- `index.html` (home), `projects.html`, `organizations.html`, `jobs.html` (My Jobs, built from `EXP`) — thin shells; all content and logic in `assets/app.js`, styles in `assets/site.css`.
- Add `?preview` to any page URL to see template cards and logo placeholders.

## How to update
- **Text, experience, projects, documents:** edit the data blocks at the top of `assets/app.js`
  (`CONFIG`, `PROJECTS`, `ORGS`, `DOCS`, `P` gallery list, `EXP`, `EDU`).
- **Organization logo:** add the official file to `assets/logos/` (only with permission) and set `logo` in `ORGS`. Link projects to organizations with `ownerId` / `contractorId`. Every change pushed to `main` goes live on the same URL.
- **New gallery photo:** add `img/full/NN.jpg` (original) and `img/thumb/NN.jpg` (≤720px), then add `[NN,"category","English caption","التعليق العربي"]` to `P`.
- **Portrait:** add `img/portrait.jpg` and set `CONFIG.photo`.
- **CV:** replace `cv.pdf`.
- After changing `assets/app.js` or `assets/site.css`, bump the `?v=` number in the three HTML files so visitors get the new version immediately.
