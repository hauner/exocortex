# build

## dev

    ng build
    npm run scully -- --scanRoutes --showGuessError --removeStaticDist
    npm run scully:serve

## prod

    ng build --prod --output-hashing none
    npm run scully -- --scanRoutes --showGuessError --removeStaticDist
    
    
## submodule

    git submodule add https://github.com/hauner/hauner.github.io.git docs-hauner
    git submodule update --remote --rebase
    
    git pull
    git submodule update --init --recursive
    git pull --recurse-submodules
    git submodule update --remote --rebase


    cp -R dist/static/ docs-hauner

## prepare links for github pages test

    build

    cd docs
    rm -f *

    cd ..
    cp -R dist/static/* docs
    
    find docs -type f -name "index.html" -exec sed -i '' -e 's:<base href="/">:<base href="/exocortex/">:' {} \;    
    find docs -type f -name "404.html" -exec sed -i '' -e 's:<base href="/">:<base href="/exocortex/">:' {} \;    
    find docs -type f -name "*.css" -exec  sed -i '' -e 's:/assets/:/exocortex/assets/:g' {} \;
    find docs -type f -name "main-*.js" -exec  sed -i '' -e 's:/assets/scully-routes.json:/exocortex/assets/scully-routes.json:g' {} \;
