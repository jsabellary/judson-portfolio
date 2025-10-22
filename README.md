
# Judson Bellary — Angular Portfolio

A minimal, modern Angular (v17) portfolio to showcase software engineering work.
Built with **standalone components**, **router**, and simple responsive styles.

## Quick start

1. Ensure Node.js (>=18.13) and npm are installed.
2. Open this folder in VS Code or Visual Studio 2022 (with Node.js features).
3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the dev server:

   ```bash
   npm start
   ```

   Your browser should open at http://localhost:4200/

## Structure

- `src/app/home.component.*` — landing page with skills & contact.
- `src/app/projects.component.*` — cards linking to live demos.
- `src/app/experience.component.*` — role-by-role highlights.
- `src/assets/projects.json` — your projects (edit freely).
- `src/assets/experience.json` — your roles (edit freely).
- `src/styles/global.scss` — theme & layout styles.

## Editing content

- Update your phone/email/location in `home.component.html` and footer in `app.component.html`.
- Add or change projects in `src/assets/projects.json`.
- Add or change roles in `src/assets/experience.json`.

## Deploy

- Static hosting (e.g., GitHub Pages, Azure Static Web Apps, S3/CloudFront):

  ```bash
  npm run build
  # Deploy the /dist/judson-portfolio folder
  ```

## Notes

- Uses Angular 17 standalone API (no NgModules).
- Keep pages minimal; this is intentionally lightweight and fast.
- Feel free to add Angular Material, charts, or Tailwind later.
