import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const init = async (): Promise<void> => {
  const { WebChat } = window as unknown as { WebChat: any };

  if (!WebChat.loadCustomization && !WebChat.renderCheatSheet) {
    setTimeout(init, 100);

    return;
  }

  await WebChat.loadCustomization();
  await WebChat.renderCheatSheet();

  ReactDOM.render(<App />, document.getElementsByTagName('main')[0]);
};

init();
