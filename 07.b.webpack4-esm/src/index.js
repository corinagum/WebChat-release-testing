import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const init = async () => {
  const { WebChat } = window;

  if (!WebChat.loadCustomization && !WebChat.renderCheatSheet) {
    setTimeout(init, 100);

    return;
  }

  await WebChat.loadCustomization();
  await WebChat.renderCheatSheet();

  ReactDOM.render(<App />, document.getElementsByTagName('main')[0]);
};

init();
