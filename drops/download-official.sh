#!/bin/bash

rm webchat*.js
curl -L $(npm view --json botframework-webchat@latest | jq -r .dist.tarball) | tar --strip-components=2 --wildcards 'package/dist/webchat*.js' -xvz
