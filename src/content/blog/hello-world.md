---
title: "Hello, world"
subtitle: "How this site works, and how to add a post in 30 seconds"
date: 2026-06-10
---

This entire post is one markdown file: `src/content/blog/hello-world.md`.

To publish a new post:

1. Create a new `.md` file in `src/content/blog/` — the filename becomes the URL.
2. Add three lines of frontmatter at the top (`title`, `subtitle`, `date`).
3. Write in plain markdown below it.
4. Commit and push. Netlify rebuilds the site automatically.

That's the whole workflow. Headings, **bold**, `code`, lists, images, and blockquotes all just work:

> Add `draft: true` to the frontmatter to keep a post unpublished while you write it.
