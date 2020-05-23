set -x

ng build --prod --output-hashing none
npm run scully -- --scanRoutes --showGuessError --removeStaticDist

rm -r -v docs/*

cp -R dist/static/ docs

find docs -type f -name "index.html" -exec sed -i '' -e 's:<base href="/">:<base href="/exocortex/">:' {} \;
find docs -type f -name "404.html" -exec sed -i '' -e 's:<base href="/">:<base href="/exocortex/">:' {} \;
find docs -type f -name "*.css" -exec  sed -i '' -e 's:/assets/:/exocortex/assets/:g' {} \;
find docs -type f -name "main-*.js" -exec  sed -i '' -e 's:/assets/scully-routes.json:/exocortex/assets/scully-routes.json:g' {} \;

