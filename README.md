# tobias-site

Personal website built with [Hugo](https://gohugo.io) + [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

---

## Local setup

### 1. Install Hugo (extended)

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
sudo snap install hugo
```

**Windows:**
```bash
winget install Hugo.Hugo.Extended
```

Verify: `hugo version` — make sure it says `extended`.

---

### 2. Clone this repo and add the theme

```bash
git clone https://github.com/YOUR_USERNAME/tobias-site.git
cd tobias-site

# Add PaperMod as a git submodule
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

---

### 3. Run locally

```bash
hugo server -D
```

Open [http://localhost:1313](http://localhost:1313) in your browser. Changes hot-reload automatically.

---

## Deployment

### Option A — GitHub Pages (free, quick)

1. Push this repo to GitHub as `YOUR_USERNAME/tobias-site` (or any name).
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/hugo.yml` builds and deploys automatically.
4. Your site is live at `https://YOUR_USERNAME.github.io/tobias-site/`.

> **Custom domain on GitHub Pages:** Go to Settings → Pages → Custom domain, enter your domain, then add a CNAME record at your DNS provider pointing to `YOUR_USERNAME.github.io`.

---

### Option B — Self-hosted (custom domain, VPS)

1. Build the site: `hugo --minify`
2. Copy the `public/` folder to your server (e.g. via `rsync` or `scp`).
3. Serve it with **Nginx** or **Caddy** (Caddy auto-handles HTTPS).

**Minimal Caddy config:**
```
tobias.dev {
    root * /var/www/tobias-site
    file_server
}
```

**Minimal Nginx config:**
```nginx
server {
    listen 80;
    server_name tobias.dev www.tobias.dev;
    root /var/www/tobias-site;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## Editing content

All content lives in `content/`. Each page is a Markdown file.

| File | Page |
|---|---|
| `content/_index.md` | Home |
| `content/about/index.md` | About |
| `content/projects/index.md` | Projects |
| `content/mediablog/index.md` | Mediablog |

Edit the `.md` files directly. Blockquotes (`> text`) render as the indented entry style you see on the site.

---

## Customisation

- **Colors / fonts / layout:** `assets/css/extended/custom.css`
- **Site config (title, social links, menu):** `hugo.toml`
- **Theme settings:** also in `hugo.toml` under `[params]`
