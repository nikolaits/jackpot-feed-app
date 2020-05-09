#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/nikolaits/jackpot-feed-app.git master:gh-pages

cd -