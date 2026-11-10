# Jian Liu — Academic Website

A bilingual, responsive academic homepage built with Astro and Tailwind CSS, designed for deployment on GitHub Pages.

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (usually http://localhost:4321).

## Production build

```bash
npm run build
npm run preview
```

The static site is generated in `dist/`.

## GitHub Pages deployment

1. Create a **public** repository named exactly `YOUR_GITHUB_USERNAME.github.io`.
2. Push this project to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
4. The workflow in `.github/workflows/deploy.yml` will build and deploy the site on every push to `main`.

Because this is a user site repository (`username.github.io`), the site is served from the domain root and does not need an Astro `base` path.

## Custom domain (later)

When ready to bind a custom domain:

1. Add a `public/CNAME` file containing the chosen hostname.
2. Add a repository Actions variable named `SITE_URL` with the custom HTTPS URL (for example, `https://11505123.xyz`). The workflow passes this value into the Astro build.
3. Add the corresponding DNS records at the domain provider.
4. Add the same custom domain under **Settings → Pages** in GitHub.

Do not change DNS until the domain has been added and verified in GitHub Pages.

## Content checklist before public launch

- [ ] Confirm the preferred public name and GitHub profile URL.
- [ ] Add an approved profile photograph (optional).
- [ ] Confirm the exact publication citation, author list, DOI, and public article URL.
- [ ] Confirm which ongoing projects may be described publicly.
- [ ] Add a public academic email address and other verified profile links.
- [ ] Add the final PDF CV to `public/files/`.
- [ ] Review all dates, awards, and project descriptions.
