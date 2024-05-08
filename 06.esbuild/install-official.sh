#!/usr/bin/env bash
rm -r ./node_modules
git restore package-lock.json
npm install botframework-webchat-core@latest
npm install botframework-webchat-api@latest
npm install botframework-webchat-component@latest
npm install botframework-directlinespeech-sdk@latest
npm install botframework-webchat-fluent-theme@latest
npm install botframework-webchat@latest
#npm run build
