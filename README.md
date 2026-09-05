# Pravven — pravven.com

Static site for Pravven and The Pravven Brief. No build step, no framework,
no database. Every file in this repo is served as-is, which means it works
identically on Vercel and on GitHub Pages.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Homepage — positioning, what the Brief is, CTAs |
| `brief.html` | **The current issue.** Always the latest one. |
| `archive.html` | List of issues |
| `about.html` | Mission and what's being built |
| `subscribe.html` | Email signup (Mailchimp) |
| `contact.html` | Feedback form / email |
| `studio.html` | Internal drafting tool. `noindex`, not linked from the site. |
| `issues/` | Past issues, once the current one is superseded |
| `site-config.js` | **The only file you edit to switch the forms on** |
| `styles.css` | All styling. Brand tokens are the `:root` block at the top. |

## Switching on the forms

Open `site-config.js` and fill in the blanks:

- **`mailchimpAction`** — in Mailchimp go to Audience → Signup forms →
  Embedded forms → Condensed. Copy the `<form action="...">` URL.
- **`mailchimpBotField`** — from that same generated HTML, the hidden
  anti-bot input's `name` (it looks like `b_1a2b3c4d5e6f7_a1b2c3d4e5`).
- **`contactFormAction`** — any no-backend endpoint (Formspree, Basin,
  Formsubmit). Leave blank to show an email link instead.
- **`contactEmail`** — where fallback links point.

Until a value is set, that page shows a working email link instead of a
form. Nothing on the site is ever a dead end.

## Publishing a new issue

1. `cp brief.html issues/YYYY-MM-DD.html` (the date of the issue being
   retired), and in that copy change the `<link>`/`<script>`/`<img>`/nav
   paths to `../` and remove the "Current" logic if you added any.
2. Write the new issue into `brief.html` — bump `Issue No.`, the date, the
   review counts, and the seven `<article class="article-card">` blocks.
3. Add a row to `archive.html`: move the `Current` tag to the new issue and
   point the retired one at `issues/YYYY-MM-DD.html`.
4. Update `sitemap.xml` `lastmod` dates.
5. Commit and push. Vercel redeploys automatically.

`studio.html` is the drafting tool: it pulls the four RSS feeds through the
Cloudflare Worker and drafts the summaries. It asks for an Anthropic API key
that stays in the browser tab. It is intentionally not linked from the public
navigation.

## Deployment

**Vercel (primary).** Import this repo, framework preset **Other**, root
directory `.`, no build command, output directory `.`. Then add `pravven.com`
and `www.pravven.com` under Project → Settings → Domains and follow the DNS
records Vercel gives you at the registrar.

**GitHub Pages (fallback).** Already live and untouched by this change — the
site works there identically because all links are relative.

## Sources

The Brief reviews: Insurance Journal, Risk & Insurance, Carrier Management,
Reinsurance News.
