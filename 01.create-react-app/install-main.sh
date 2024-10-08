#!/usr/bin/env bash
rm -r ./node_modules
git restore package-lock.json
npm install botframework-webchat-core@main
npm install botframework-webchat-api@main
npm install botframework-webchat-component@main
npm install botframework-directlinespeech-sdk@main
npm install botframework-webchat-fluent-theme@main
npm install botframework-webchat@main
#npm run build
