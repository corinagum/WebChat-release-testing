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

npm install botframework-webchat-core@latest
npm install botframework-webchat-api@latest
npm install botframework-webchat-component@latest
npm install botframework-directlinespeech-sdk@latest
npm install botframework-webchat-fluent-theme@latest
npm install botframework-webchat@latest
