#!/usr/bin/env bash

usage ()
{
echo 'Usage: Runs Meteor with MongoDB on the local host (port 27017).'
echo '       THE MONGODB DB NAME IS THE SAME AS THE DIRECTORY NAME.'
echo '       parameter 1: port on which to run Meteor. 80 by default.'
exit
}


if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    usage
else
    ln -s ~/.meteor/packages/meteor-tool/1.4.1_2/mt-os.linux.x86_64/dev_bundle/bin/node /usr/bin/node
    ln -s ~/.meteor/packages/meteor-tool/1.4.1_2/mt-os.linux.x86_64/dev_bundle/bin/npm /usr/bin/npm

    if [ $# -eq 0 ]; then
	PORT=80
    else
	PORT=$1
    fi

    buildDir=forever_deploy
    appName=${PWD##*/}

    echo '================== Building to' ./${buildDir} '=================='
    rm -rf ./${buildDir}
    meteor build --directory ./${buildDir}

    echo '================== Installing packages =================='
    cd ./${buildDir}/bundle/programs/server
    npm install
    cd ../../../..

    echo '================== Stopping All Forever Instances =================='
    forever stopall
    sleep 5

    echo '================== Starting Forever =================='
    PORT=${PORT} MONGO_URL=mongodb://localhost/${appName} ROOT_URL=http://localhost forever start ./${buildDir}/bundle/main.js

    forever list
fi

