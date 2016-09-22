#!/usr/bin/env bash

echo -e "Deploying to GitHub Pages...\n"

if "$CI"; then
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis"

  cd dist
  git init .
  git commit -am "Deploy build #$TRAVIS_BUILD_NUMBER"
  git push -f "https://${GH_TOKEN}@github.com/springload/springload.github.io" master
else
  cd dist
  git init .
  git commit -am "Deploy locally to GitHub pages"
  git push -f git@github.com:springload/springload.github.io.git master
fi

echo -e "Finished deploy to GitHub Pages...\n"
