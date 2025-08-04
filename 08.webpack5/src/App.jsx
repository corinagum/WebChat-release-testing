import React, { useEffect, useState } from 'react';

import ReactWebChat, {
  createCognitiveServicesSpeechServicesPonyfillFactory,
  createDirectLine,
  createStore
} from 'botframework-webchat';

import { FluentThemeProvider } from 'botframework-webchat-fluent-theme';

import * as WebChat from 'botframework-webchat';
window.WebChat = WebChat;

function createFetchSpeechServicesCredentials() {
  let expireAfter = 0;
  let resultPromise;

  return () => {
    if (!resultPromise || Date.now() > expireAfter) {
      expireAfter = Date.now() + 5000;
      resultPromise = fetch('https://hawo-mockbot4-token-app.blueriver-ce85e8f0.westus.azurecontainerapps.io/api/token/speech/msi', { method: 'POST' })
        .then(res => res.json())
        .then(({ region, token }) => ({ authorizationToken: `Bearer ${token}`, region }))
        .catch(err => {
          expireAfter = 0;
          resultPromise = null;

          return Promise.reject(err);
        });
    }

    return resultPromise;
  };
}

const fetchSpeechServicesCredentials = createFetchSpeechServicesCredentials();

export default function App() {
  const [store] = useState(() => createStore());
  const [directLine, setDirectLine] = useState();
  const [webSpeechPonyfillFactory, setWebSpeechPonyfillFactory] = useState();

  useEffect(() => {
    window.webChatStore = store;
  }, [store]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://hawo-mockbot4-token-app.blueriver-ce85e8f0.westus.azurecontainerapps.io/api/token/directline', {
        method: 'POST'
      });

      const { token } = await res.json();
      const { createDirectLineMiddleware } = window.WebChatReleaseTesting.customizations;

      setDirectLine(
        (createDirectLineMiddleware ? createDirectLineMiddleware()(createDirectLine) : createDirectLine)({
          token
        })
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const ponyfillFactory = await createCognitiveServicesSpeechServicesPonyfillFactory({
        credentials: fetchSpeechServicesCredentials
      });

      setWebSpeechPonyfillFactory(() => ponyfillFactory);
    })();
  }, []);

  const [props, setProps] = useState();

  useEffect(() => {
    (async function () {
      if (directLine && store && webSpeechPonyfillFactory) {
        setProps(
          await window.WebChatReleaseTesting.customizations.patchProps({
            directLine,
            locale: 'en-US',
            store,
            webSpeechPonyfillFactory
          })
        );
      }
    })();
  }, [directLine, store, webSpeechPonyfillFactory]);

  return (
    !!props && (
      <div id="webchat">
        {window.WebChatReleaseTesting.customizations.theme === 'fluent' ? (
          <FluentThemeProvider>
            <ReactWebChat {...props} />
          </FluentThemeProvider>
        ) : window.WebChatReleaseTesting.customizations.theme === 'copilot' ? (
          <FluentThemeProvider variant="copilot">
            <ReactWebChat {...props} />
          </FluentThemeProvider>
        ) : (
          <ReactWebChat {...props} />
        )}
      </div>
    )
  );
}
