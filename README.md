[springload.github.io](https://springload.github.io/) [![Dependency Status](https://david-dm.org/springload/springload.github.io.svg?style=flat-square)](https://david-dm.org/springload/springload.github.io) [![devDependency Status](https://david-dm.org/springload/springload.github.io/dev-status.svg?style=flat-square)](https://david-dm.org/springload/springload.github.io#info=devDependencies)
=====================

> Springload’s hub for open source

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
