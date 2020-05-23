# build

## dev

    ng build
    npm run scully -- --scanRoutes --showGuessError --removeStaticDist
    npm run scully:serve

## publish test

    ./exocortex.sh
    
## publish site

    ./hauner.sh
    
    
## submodule

    git submodule add https://github.com/hauner/hauner.github.io.git docs-hauner
    git submodule update --remote --rebase
    
    git pull
    git submodule update --init --recursive

    git pull --recurse-submodules
    git submodule update --remote --rebase
