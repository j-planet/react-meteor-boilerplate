#!/usr/bin/env bash

usage ()
{
echo 'Usage: Runs Meteor with MongoDB on the local host (port 27017).'
echo '       parameter 1: name of the MongoDB database'
echo '       parameter 2: port on which to run Meteor'
exit
}


if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    usage
else
    PORT=$2 MONGO_URL=mongodb://localhost/$1 ROOT_URL=http://localhost node ./forever_deploy/bundle/main.js
fi

