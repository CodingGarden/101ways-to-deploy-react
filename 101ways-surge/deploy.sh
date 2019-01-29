#! /bin/bash

yarn build
cd build
cp index.html 200.html
echo 101ways.surge.sh > CNAME
surge