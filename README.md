# Personal Site

A minimal personal website built with [Astro](https://astro.build). White background, Helvetica name, one column, no JavaScript shipped. The whole built site is ~20KB.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Add a blog post (the whole point)

Create a markdown file in `src/content/blog/`:

```
src/content/blog/my-new-post.md
```

```markdown
---
title: "My new post"
subtitle: "An optional one-line subtitle"
date: 2026-06-15
---

Write markdown here.
```

That's it. The filename becomes the URL (`/blog/my-new-post/`), and the post
appears on the homepage automatically, newest first. Add `draft: true` to the
frontmatter to hide a post while you write it.

## Edit your resume / projects

Everything on the homepage lives in one file: `src/pages/index.astro`.
It's plain HTML inside — edit the Experience, Education, and Projects
sections directly. Your name, email, and footer links are in
`src/pages/index.astro` and `src/layouts/Base.astro`.

## Deploy to Netlify

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Netlify reads `netlify.toml` and detects Astro automatically
   (build command `npm run build`, publish directory `dist`). Click deploy.
4. Update `site` in `astro.config.mjs` to your final URL.

From then on, every `git push` rebuilds and deploys the site.

## Structure

```
src/
  content/blog/        ← drop .md files here to publish
  pages/index.astro    ← homepage (resume, projects, post list)
  pages/blog/[...slug].astro  ← template for every post page
  layouts/Base.astro   ← shared <head> + footer
  styles/global.css    ← the only stylesheet (~100 lines)
  content.config.ts    ← blog frontmatter schema
```
