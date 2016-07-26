springload.github.io [![Dependency Status](https://david-dm.org/springload/springload.github.io.svg?style=flat-square)](https://david-dm.org/springload/springload.github.io) [![devDependency Status](https://david-dm.org/springload/springload.github.io/dev-status.svg?style=flat-square)](https://david-dm.org/springload/springload.github.io#info=devDependencies)
=====================

> TODO

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

This project uses [`npm shrinkwrap`](https://docs.npmjs.com/cli/shrinkwrap) in order to pin all of the dependency tree for installation. The file that is used when installing the project is **`npm-shrinkwrap.json`**. To update it,

1. First make sure you are using the right Node and npm versions with `node --version` and `npm --version` (should match the versions in the project's) `package.json`.
2. Then install or upgrade dependencies by using `npm install --save <package>` or `npm install --save-dev <package>`. Manual installs will not be picked up by `shrinkwrap`.
3. When you've confirmed the project still works with the new dependencies, run **`npm run shrinkwrap`** in order to regenerate the `npm-shrinkwrap.json` file
4. Commit this file, and push.

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
