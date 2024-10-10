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

npm install botframework-webchat-core@main
npm install botframework-webchat-api@main
npm install botframework-webchat-component@main
npm install botframework-directlinespeech-sdk@main
npm install botframework-webchat-fluent-theme@main
npm install botframework-webchat@main
