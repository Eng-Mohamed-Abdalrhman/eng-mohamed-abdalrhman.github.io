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
- **CV:** replace `cv.pdf` (English) and `cv-ar.pdf` (Arabic); the Arabic site links to the Arabic CV.
- After changing `assets/app.js` or `assets/site.css`, bump the `?v=` number in the three HTML files so visitors get the new version immediately.

- Photos 58–93 added 2026-11-23 (villa interiors); none are linked to a specific project until confirmed — add `imgs:[..]` to a project in `PROJECTS` to show them on its card.

## Certificates (certifications.html)
- Original PDFs: `docs/certs/*.pdf` (one file per certificate, plus `bim-diploma-all-certificates.pdf` = the full original upload).
- Previews: `img/certs/<id>.jpg` (large, lightbox) and `img/certs/<id>-t.jpg` (card thumbnail), rendered from the PDFs without cropping.
- Data: `SCE`, `BIM` and `COURSES` at the top of `assets/app.js`. To add a certificate: put the PDF in `docs/certs/`, render the two JPGs, add a row to `COURSES`.
- Contact icons (WhatsApp / call / email) come from `reach()` in `assets/app.js` and use `CONFIG.whatsapp`, `CONFIG.phoneHref`, `CONFIG.email`.
- Certificates page groups (2026-11-27): 01 Accreditation & Registration (SCE, Sudanese Engineering Council) · 02 BIM Diploma + 9 courses + JELECOM (`OTHER.tech`) · 03 Management (`OTHER.mgmt`: Edraak, AREES) · 04 Additional (`OTHER.extra`: Zain). Never publish identity documents.
