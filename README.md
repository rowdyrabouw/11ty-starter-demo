# 11ty Starter

Based on Chris Collins' [jamstack-web-starter
](https://github.com/scottishstoater/jamstack-web-starter)

<em>Eleventy · Tailwind CSS · HTML · CSS · Javascript</em>

## Contents

- [Project overview](#project-overview)
- [Getting started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Working locally](#working-locally)
  - [Creating a production build](#creating-a-production-build)
  - [Creating a release](#creating-a-release)
- [Deployment](#deployment)
- [Credits](#credits)

---

## Project Overview

- The project uses [Eleventy](https://11ty.io) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/)
- PostCSS set up to handle:
  - TailwindCSS
  - Autoprefixer
  - cssnano
- PurgeCSS to remove unused CSS (set up for TailwindCSS by default) in production
- HTML minified in production
- CSS minified in production
- Parcel used to compile scripts
- Scripts optimised for production
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

## Getting Started

### Install dependencies

```
npm install
```

### Working locally

Start watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify HTML, compress JS and minify CSS.

```
npm run build
```

### Creating a release

Update version in package.json and generates CHANGELOG.md

_Works best when using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)._

```
npm run release
```

#### Credits

- [Eleventy](https://11ty.io)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [cssnano](https://github.com/cssnano/cssnano)
- [Parcel](https://github.com/parcel-bundler/parcel)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)
- [standard-version](https://github.com/conventional-changelog/standard-version)
