#! /bin/bash

yarn build
cp now.json build/
cd build
now
now alias