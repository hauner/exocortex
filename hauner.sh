#!/bin/sh

set -x

ng build --prod --output-hashing none
npm run scully -- --scanRoutes --showGuessError --removeStaticDist

rm -r -v docs-hauner/*

cp -R dist/static/ docs-hauner
