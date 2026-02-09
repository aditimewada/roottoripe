# RoottoriPe — Simple Food Website

This is a small static website scaffold you can customize with your photo, bio, and recipe links.

Files added:
- [index.html](index.html) — main page
- [styles.css](styles.css) — styles
- [script.js](script.js) — tiny interactions
- [assets/your-photo.svg](assets/your-photo.svg) — placeholder profile image

Quick start:

1. Open the site locally by double-clicking `index.html` in your browser.

OR serve it from a simple local server (recommended) from the project root:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

How to customize:
- Replace `assets/your-photo.svg` with your own photo file and keep the same path `assets/your-photo.svg` or update the `src` in `index.html`.
- Replace the intro text in `index.html` (the hero area) with your own bio.
- For each recipe card, replace the `href` with the link to your blog post or recipe page.

Want changes? Tell me your preferred color palette, fonts, or layout and I can update it.

Deploying to GitHub Pages
-------------------------

1. Create a GitHub repository (for example `roottoripe`) on GitHub.
2. Add the remote and push your local repo (replace `<YOUR-REPO-URL>` with the HTTPS or SSH URL GitHub gives you):

```bash
git remote add origin <YOUR-REPO-URL>
git branch -M main
git push -u origin main
```

3. The repository includes a GitHub Actions workflow that will automatically deploy the site to GitHub Pages whenever you push to `main`.

Alternative (push & create repo via `gh` CLI):

```bash
gh repo create YOUR_USERNAME/roottoripe --public --source=. --remote=origin --push
```

After the first successful run, your site will be available at `https://<YOUR_USERNAME>.github.io/<repo-name>/` (project pages) or `https://<org-or-username>.github.io/` for a repo named `USERNAME.github.io`.

