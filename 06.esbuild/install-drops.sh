#!/usr/bin/env bash

rm -r ./node_modules

git restore package-lock.json

cat package.json | jq -r '. | .dependencies = (.dependencies | delpaths([
  ["botframework-directlinespeech-sdk"],
  ["botframework-webchat-api"],
  ["botframework-webchat-component"],
  ["botframework-webchat-core"],
  ["botframework-webchat-fluent-theme"],
  ["botframework-webchat"]
]))' > package.json.tmp && mv package.json.tmp package.json

npm install `ls ../drops/botframework-webchat-core-*.tgz`
npm install `ls ../drops/botframework-webchat-api-*.tgz`
npm install `ls ../drops/botframework-webchat-component-*.tgz`
npm install `ls ../drops/botframework-directlinespeech-sdk-*.tgz`
npm install `ls ../drops/botframework-webchat-fluent-theme-*.tgz`
npm install `ls ../drops/botframework-webchat-*.tgz`
