# Physical Design Interview Guide — Hugo Site

Exact replica of your Blogger site, ported to Hugo + GitHub Pages.

---

## STEP 1 — Install Hugo and Git (one time only)

**Windows:**
```
winget install Hugo.Hugo.Extended
winget install Git.Git
```
Restart your terminal after installing.

**Mac:**
```
brew install hugo git
```

Verify: `hugo version` should print something like `hugo v0.12x...`

---

## STEP 2 — Add your logo image

Copy your logo image file into:
```
themes/nordic/static/img/physical-design-interview-question.jpg
```
(Download it from your Blogger site first)

---

## STEP 3 — Convert your Blogger posts

1. In Blogger Dashboard → Settings → scroll to bottom → **Back up content** → Download
   - This gives you a file like `blog-MM-DD-YYYY.xml` (NOT the theme XML)

2. Run the converter:
```bash
python3 blogger_to_hugo.py blog-MM-DD-YYYY.xml content/posts/
```

This creates one `.md` file per post in `content/posts/`.

---

## STEP 4 — Test locally

```bash
hugo server
```

Open http://localhost:1313 — your site runs locally.

---

## STEP 5 — Create GitHub repository

1. Go to github.com → Sign in → New repository
2. Name it exactly: `yourusername.github.io`
   (Replace `yourusername` with your actual GitHub username)
3. Set it to **Public**
4. Do NOT initialize with README

---

## STEP 6 — Update your site URL

Edit `hugo.toml` line 1:
```toml
baseURL = "https://yourusername.github.io/"
```
Replace `yourusername` with your GitHub username.

Also update `static/robots.txt` last line with your actual URL.

---

## STEP 7 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial Hugo site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

---

## STEP 8 — Enable GitHub Pages

1. Go to your repo on github.com
2. Settings → Pages → Source → **GitHub Actions**
3. Wait ~2 minutes
4. Your site is live at: `https://yourusername.github.io`

---

## Writing new posts (after setup)

**Option A — On GitHub.com (no terminal):**
1. Go to your repo → `content/posts/`
2. Click **Add file → Create new file**
3. Name it: `what-is-setup-time-violation.md`
4. Paste this template:

```markdown
---
title: "What is setup time violation?"
date: 2026-02-27
draft: false
categories: ["STA"]
description: "Explanation of setup time violation and how to fix it."
---

Setup time violation occurs when...

## How to fix setup time violation?

...
```

5. Click **Commit changes** → site rebuilds automatically in ~30 seconds

**Option B — Locally:**
```bash
hugo new posts/what-is-setup-time-violation.md
# Edit the file
git add .
git commit -m "Add setup time post"
git push
```

---

## Category names (must match exactly)

| Use in `categories:` | Shows in nav as |
|---|---|
| `General-Concepts` | General-Concepts |
| `Pre-PnR` | Pre-PnR |
| `Floorplan` | Floorplan |
| `Power-Plan` | Power-Plan |
| `Placement` | Placement |
| `CTS` | CTS |
| `Routing` | Routing |
| `ECO` | ECO |
| `STA` | STA |
| `Signal-Integrity` | SI |
| `Physical-Verification` | PV |

---

## Adding comments (optional)

In `themes/nordic/layouts/_default/single.html`, find the comments section and
replace the placeholder with your Giscus snippet from https://giscus.app
(free, uses GitHub Discussions, no account needed for readers).

---

## File structure reference

```
physical-design-hugo/
├── hugo.toml                          ← site config, menus, ad keys
├── blogger_to_hugo.py                 ← run once to import posts
├── content/
│   └── posts/                         ← your blog posts (.md files)
├── static/
│   └── robots.txt
├── themes/nordic/
│   ├── layouts/
│   │   ├── _default/
│   │   │   ├── baseof.html            ← main HTML shell
│   │   │   ├── list.html              ← homepage / category pages
│   │   │   └── single.html            ← individual post pages
│   │   ├── partials/
│   │   │   ├── header.html            ← logo, nav tabs, dark toggle
│   │   │   ├── sidebar.html           ← left sidebar + dynamic posts
│   │   │   └── footer.html            ← subscribe, popular posts
│   │   ├── taxonomy/
│   │   │   └── term.html              ← /categories/cts/ pages
│   │   └── index.json                 ← powers sidebar post list
│   └── static/
│       ├── css/style.css              ← all your styles + dark mode
│       ├── js/main.js                 ← theme toggle, menu, ads
│       └── img/                       ← put your logo here
└── .github/workflows/hugo.yml         ← auto-deploy on git push
```
