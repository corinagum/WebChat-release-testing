## Steps to test

1. Web Chat is loaded
1. Check `<meta>` or version table below to see the version number should be `4.8.0` and not a pre-release
1. User can send a simple message
   - Bot will respond with a simple response
1. User can say a simple message using microphone
   - Bot will respond with a synthesized message
1. Bot can display an Adaptive Card
   - Type `card breakfast`
1. Bot can send Markdown and displayed correctly
   - Type `markdown`

## Additional steps

1. [Emulate airplane mode](index.html?customization=dljs-airplane-mode)
1. [Use invalid token](index.html?customization=dljs-bad-token)
1. Test [Direct Line Speech](index.html?customization=direct-line-speech) via CDN
1. Test [Direct Line App Service Extension](index.html?customization=direct-line-app-service-extension) via NPM
