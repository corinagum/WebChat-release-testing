#!/bin/bash

rm botframework-*.tgz 2>/dev/null
rm webchat*.js 2>/dev/null

curl -LO $(npm view --json botframework-webchat-core@main | jq -r .dist.tarball)
curl -LO $(npm view --json botframework-webchat-api@main | jq -r .dist.tarball)
curl -LO $(npm view --json botframework-webchat-component@main | jq -r .dist.tarball)
curl -LO $(npm view --json botframework-directlinespeech-sdk@main | jq -r .dist.tarball)
curl -LO $(npm view --json botframework-webchat@main | jq -r .dist.tarball)
curl -LO $(npm view --json botframework-webchat-fluent-theme@main | jq -r .dist.tarball)

curl -L $(npm view --json botframework-webchat@main | jq -r .dist.tarball) | tar --strip-components=2 --wildcards 'package/dist/webchat*.js' -xvz
