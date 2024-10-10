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

npm install ../drops/botframework-webchat-core-0.0.0-0.tgz
npm install ../drops/botframework-webchat-api-0.0.0-0.tgz
npm install ../drops/botframework-webchat-component-0.0.0-0.tgz
npm install ../drops/botframework-directlinespeech-sdk-0.0.0-0.tgz
npm install ../drops/botframework-webchat-fluent-theme-0.0.0-0.tgz
npm install ../drops/botframework-webchat-0.0.0-0.tgz
