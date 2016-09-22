[springload.github.io](https://springload.github.io/) [![Build Status](https://travis-ci.org/springload/springload.github.io.svg?branch=master)](https://travis-ci.org/springload/springload.github.io) [![Dependency Status](https://david-dm.org/springload/springload.github.io.svg?style=flat-square)](https://david-dm.org/springload/springload.github.io) [![devDependency Status](https://david-dm.org/springload/springload.github.io/dev-status.svg?style=flat-square)](https://david-dm.org/springload/springload.github.io#info=devDependencies)
=====================

> Springload’s hub for open source

## Important links

| Documentation: see [#documentation](#documentation) :book:|
|---------------------|
|[Production site](https://springload.github.io/)|
|[GA production tracking](https://analytics.google.com/analytics/web/?pli=1&authuser=1#report/defaultid/a79835767w120310427p125881929/)|

## Installation

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/springload/frontend-starter-kit/blob/master/docs/useful-tooling.md#nvm).

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:springload/springload.github.io.git
cd springload.github.io
```

To install our dependencies:

```sh
nvm install
# Then, install all project dependencies.
pip install wrangler
npm install
```

## Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Start the server and the development tools.
npm run start
# Builds frontend assets.
npm run build
```

### Adding and upgrading dependencies

This project is [shrinkwrapped](https://docs.npmjs.com/cli/shrinkwrap). Its dependencies are locked down in `npm-shrinkwrap.json` file. To update them,

1. Use `npm run lint:versions` to confirm you are using the right node version.
2. Use `npm install <package>` with `--save` or `--save-dev` options to change the dependencies.
3. Check the project still works with the new dependencies / new versions.
4. Run **`npm run shrinkwrap`** to regenerate `npm-shrinkwrap.json`.
5. Commit this file, and push.

## Deploying a new version

### To production

```sh
npm run deploy
```

### Deployment configuration (one-off)

Continuous integration & delivery is done with [Travis](https://travis-ci.org/springload/springload.github.io).

This site is hosted on [GitHub Pages](https://pages.github.com/). The live site is the repository's `master` branch.

```sh
# Create deploy/production branch
# Create master branch
gem install travis
travis encrypt GH_TOKEN=<GitHub personal access token> --add
```

## Documentation

### Browser support

**Supported browser / device versions:**

| Browser | Device/OS | Version |
|---------|-----------|---------|
| Mobile Safari | iOS Phone | latest |
| Mobile Safari | iOS Tablet | latest |
| Chrome | Android | latest |
| IE | Desktop | 11 |
| Chrome | Desktop | latest |
| MS Edge | Desktop | latest |
| Firefox | Desktop | latest |
| Safari | OSX | latest |

### Favicons

To generate new favicons,

1. Go to https://realfavicongenerator.net/
2. Upload your favicon source file as an SVG or PNG with a resolution of at least 512x512.
3. Configure the favicon generation. Use specific images for each platform if relevant.
4. Grab the result files, [use ImageOptim to losslessly optimize their size](https://imageoptim.com/) them.
5. Grab the result HTML tags, add it to the [`core/templates/core/includes/favicons.html`](core/templates/core/includes/favicons.html) file.
6. Make sure the files are served by the server as expected.
