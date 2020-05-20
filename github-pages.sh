find docs -type f -name "index.html" -exec sed -i '' -e 's:<base href="/">:<base href="/test-blog/">:' {} \;
find docs -type f -name "404.html" -exec sed -i '' -e 's:<base href="/">:<base href="/test-blog/">:' {} \;
find docs -type f -name "*.css" -exec  sed -i '' -e 's:/assets/:/test-blog/assets/:g' {} \;
find docs -type f -name "main-*.js" -exec  sed -i '' -e 's:/assets/scully-routes.json:/test-blog/assets/scully-routes.json:g' {} \;
