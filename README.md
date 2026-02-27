# Physical Design Interview Guide — Hugo Site

Two-repo setup: content is PRIVATE, theme/config is PUBLIC.

```
pd-content (PRIVATE repo)          physical-design-interview-guide.github.io (PUBLIC repo)
└── *.md posts                      ├── themes/nordic/
                                    ├── hugo.toml
                                    └── .github/workflows/hugo.yml
                                              │
                                              ▼ (GitHub Action pulls private repo at build)
                                         public/ → GitHub Pages → your live site
```

---

## ONE-TIME SETUP (do this once, never again)

### Step 1 — Create the PRIVATE content repo

1. Go to github.com (logged into `physical-design-interview-guide` account)
2. New repository → name: `pd-content` → set to **Private** → no README
3. On your computer, go into the `pd-content` folder from this zip:
```
cd pd-content
git init
git add .
git commit -m "Initial posts"
git branch -M main
git remote add origin https://github.com/physical-design-interview-guide/pd-content.git
git push -u origin main
```

### Step 2 — Create a Personal Access Token (lets public repo read private repo)

1. GitHub → click your profile photo (top right) → **Settings**
2. Scroll to bottom → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **Generate new token (classic)**
4. Note: `Hugo build token`
5. Expiration: **No expiration** (or 1 year)
6. Scopes: tick only **`repo`** (full repo access)
7. Click **Generate token** → COPY IT (shown only once)

### Step 3 — Add the token as a secret in the PUBLIC repo

1. Go to your PUBLIC repo: `physical-design-interview-guide.github.io`
2. **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
3. Name: `CONTENT_REPO_TOKEN`
4. Value: paste the token you just copied
5. Click **Add secret**

### Step 4 — Push the PUBLIC repo

In the `physical-design-hugo` folder:
```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/physical-design-interview-guide/physical-design-interview-guide.github.io.git
git push -u origin main
```

### Step 5 — Enable GitHub Pages

1. Public repo → **Settings** → **Pages**
2. Source → **GitHub Actions**
3. Wait ~2 minutes → your site is live at `https://physical-design-interview-guide.github.io`

---

## Adding a new post (day-to-day workflow)

**Option A — GitHub website (no terminal):**
1. Go to `github.com/physical-design-interview-guide/pd-content`
2. **Add file → Create new file**
3. Name it: `2026-02-27-my-new-question.md`
4. Content:
```markdown
---
title: "Your question here?"
date: 2026-02-27
draft: false
categories: ["CTS"]
---

Answer content here...
```
5. **Commit changes** → this triggers the public repo to rebuild automatically

**Option B — locally:**
```
cd pd-content
# create your .md file
git add .
git commit -m "Add new post"
git push
```

To trigger the public site rebuild after pushing to private repo, go to:
`public repo → Actions → Deploy Hugo site → Run workflow`

Or set up the webhook (see below) to auto-trigger.

---

## Auto-trigger public build when private repo updates (optional)

In the private repo `pd-content`, add this workflow:
`.github/workflows/trigger-build.yml`
```yaml
name: Trigger public site rebuild
on:
  push:
    branches: [main]
jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Hugo build
        run: |
          curl -X POST \
            -H "Authorization: token ${{ secrets.BUILD_TOKEN }}" \
            -H "Accept: application/vnd.github.v3+json" \
            https://api.github.com/repos/physical-design-interview-guide/physical-design-interview-guide.github.io/actions/workflows/hugo.yml/dispatches \
            -d '{"ref":"main"}'
```
Add the same `CONTENT_REPO_TOKEN` as a secret named `BUILD_TOKEN` in the private repo.
Then every push to `pd-content` auto-rebuilds the live site within ~2 minutes.

---

## File reference — what to edit for what

| What to change | File |
|---|---|
| Site URL, title, ad keys | `hugo.toml` |
| Nav menu items | `hugo.toml` → `[menu.main]` |
| Colors, fonts, spacing | `themes/nordic/static/css/style.css` |
| Header (logo, nav, dark toggle) | `themes/nordic/layouts/partials/header.html` |
| Left sidebar | `themes/nordic/layouts/partials/sidebar.html` |
| Footer | `themes/nordic/layouts/partials/footer.html` |
| Post page layout | `themes/nordic/layouts/_default/single.html` |
| Home/list page layout | `themes/nordic/layouts/_default/list.html` |
| Category pages | `themes/nordic/layouts/taxonomy/term.html` |
| Dark mode / sidebar JS | `themes/nordic/static/js/main.js` |
| Logo image | `themes/nordic/static/img/physical-design-interview-guide.jpg` |
| Posts (private) | `pd-content/*.md` |
