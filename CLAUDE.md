# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal website for Xing Mei, built with [Eleventy](https://www.11ty.dev/) (11ty) — a static site generator. Content is written in Markdown, rendered through a Nunjucks layout, and deployed to GitHub Pages via a GitHub Actions workflow on every push to `master`.

## Commands

```bash
npm install       # Install dependencies
npm start         # Dev server with live reload (http://localhost:8080)
npm run build     # Build static site to _site/
```

## Architecture

- **Content**: Markdown files (`index.md`, `notes/index.md`, `research/index.md`) with YAML frontmatter specifying `layout` and `title`.
- **Layout**: Single shared layout at `_includes/layouts/base.njk` — a minimal HTML shell that injects `{{ title }}` and `{{ content | safe }}`.
- **Styles**: `bundle.css` at the root is passed through to `_site/` as-is (configured in `.eleventy.js`). Currently sets `font-family: monospace`.
- **Assets**: Binary files under `research/assets/` (images, PDFs, ZIPs) are also passed through unchanged.
- **Output**: Eleventy builds everything to `_site/`, which is what GitHub Actions deploys to the `gh-pages` branch.

## Deployment

Pushing to `master` triggers `.github/workflows/eleventy_build.yml`, which runs `npm ci && npm run build` and deploys `_site/` to GitHub Pages using `peaceiris/actions-gh-pages`.

The `.nojekyll` file at the root prevents GitHub from running Jekyll on the output.
