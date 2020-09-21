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
- Webpack used to bundle scripts
- Scripts optimised for production
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

## Getting Started

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify HTML, compress JS, inline and minify CSS.

```
npm run build
```

#### Credits

- [Eleventy](https://11ty.io)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [cssnano](https://github.com/cssnano/cssnano)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)
- [standard-version](https://github.com/conventional-changelog/standard-version)
