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
- Images minified
- Parcel used to compile scripts
- Scripts optimised for production
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)
- Automatic Semantic Versioning with Standard Version

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

Minify HTML, CSS, images and compress JS

```
npm run build
```

### Creating a release

Update version in package.json and generates CHANGELOG.md

_Works best when using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)._

- All commit types (see .versionrc), except `feat`, will result in a **PATCH** in semantic versioning
- Commit type `feat` will result in a **MINOR** in semantic versioning
- Appending a `!` after the type, will result in a **MAJOR** in semantic versioning

```
npm run release
```

## Deployment

You can host the production output on any web server or service you like and upload it via any method, it'll work.

If you don't have an existing place to host your site you should have a look at [Netlify](https://www.netlify.com), I can't recommend it enough. To get started you can hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rowdyrabouw/11ty-starter)

## Credits

- [Eleventy](https://11ty.io)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [cssnano](https://github.com/cssnano/cssnano)
- [Parcel](https://github.com/parcel-bundler/parcel)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)
- [Standard Version](https://github.com/conventional-changelog/standard-version)
- [imagemin](https://github.com/imagemin/imagemin-cli)
