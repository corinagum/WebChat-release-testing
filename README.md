# Web Chat release testing

## What is?

Formalized directions for testing Web Chat for pre- and post-release.

## Steps

1. Navigate to [VSTS Web Chat daily builds](https://fuselabs.visualstudio.com/BotFramework-WebChat/_build?definitionId=498)
1. Queue a new daily build (upper right corner)
1. Once the build finishes, click the Artifacts button (upper right corner)
1. Download the cdn_files and tgzfiles
1. Extract into the root folder:
   - `webchat.js`
   - `webchat-es5.js`
   - latest tarbell
1. Add both `.js` files to `renderWebChat`
1. Add `webchat.js` to ReactWebChat
1. Move to npmwebchat directory
1. Delete Web Chat and directlinespeech dependencies from `package.json`
1. `npm i botframework-directlinespeech-sdk....tgz`
1. `npm i botframework-webchat...core....tgz`
1. `npm i botframework-webchat...component....tgz`
1. `npm i botframework-webchat...tgz` (no suffix)

## What browsers do I need to test?

- Chrome
- Edge
- Firefox
- Internet Explorer (`renderWebChat es5.js` only)
- Safari (Mac and iOS)

## Everything is built, what bot commands do I need to test?

- 'Hello world'
- Adaptive Cards
- Speech: 'Input hint expecting'
  - Should re-open mic
  - Speech from bot will be interrupted via keyboard input
  - Speech from bot will be interrupted if mic button is pressed

## Hosting page scenarios

We assume the hosting page has 4 ways to load Web Chat

- Without React
  - Pure JavaScript: use `renderWebChat()`
- With React
  - Babel
    - Use `renderWebChat()`
    - Use JSX `<ReactWebChat>`
  - `create-react-app`: use JSX `<ReactWebChat>`

On the React route, we assume the hosting page might call React Hooks. We need to verify Web Chat will not violate any rules of hooks. Thus, we do not have a scenario which use React without Babel. Because without Babel, we cannot verify React Hooks.
