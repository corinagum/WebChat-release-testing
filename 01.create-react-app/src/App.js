import React, { useEffect, useState } from 'react';

import ReactWebChat, {
  createCognitiveServicesSpeechServicesPonyfillFactory,
  createDirectLine,
  createStore
} from 'botframework-webchat';

function createFetchSpeechServicesCredentials() {
  let expireAfter = 0;
  let lastResult = {};

  return async () => {
    if (Date.now() > expireAfter) {
      const speechServicesTokenRes = await fetch('https://webchat-mockbot.azurewebsites.net/speechservices/token', {
        method: 'POST'
      });

      lastResult = await speechServicesTokenRes.json();
      expireAfter = Date.now() + 300000;
    }

    return lastResult;
  };
}

const fetchSpeechServicesCredentials = createFetchSpeechServicesCredentials();

async function fetchSpeechServicesRegion() {
  return (await fetchSpeechServicesCredentials()).region;
}

async function fetchSpeechServicesToken() {
  return (await fetchSpeechServicesCredentials()).token;
}

export default function App() {
  const [store] = useState(() => createStore());
  const [directLine, setDirectLine] = useState();
  const [speechPonyfillFactory, setSpeechPonyfillFactory] = useState();

  useEffect(() => {
    window.webChatStore = store;
  }, [store]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', {
        method: 'POST'
      });

      const { token } = await res.json();

      setDirectLine(createDirectLine({ token }));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const ponyfillFactory = await createCognitiveServicesSpeechServicesPonyfillFactory({
        authorizationToken: fetchSpeechServicesToken,
        region: await fetchSpeechServicesRegion()
      });

      setSpeechPonyfillFactory(() => ponyfillFactory);
    })();
  }, []);

  return (
    !!directLine &&
    !!speechPonyfillFactory && (
      <div id="webchat">
        <ReactWebChat
          directLine={directLine}
          locale="en-US"
          store={store}
          webSpeechPonyfillFactory={speechPonyfillFactory}
        />
      </div>
    )
  );
}
