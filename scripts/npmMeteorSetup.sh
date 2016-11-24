#!/usr/bin/env bash

npm install --save
npm install -g --save forever react react-dom react-addons-pure-render-mixin classnames

meteor npm install

meteor add react-meteor-data
meteor add accounts-ui accounts-password
meteor add practicalmeteor:mocha
meteor add themeteorchef:bert
meteor add email
meteor add meteorhacks:ssr
meteor add fourseven:scss
meteor add fortawesome:fontawesome

meteor remove insecure
meteor remove autopublish
