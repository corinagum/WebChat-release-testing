import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const init = async (): Promise<void> => {
  const { WebChatReleaseTesting } = window as unknown as { WebChatReleaseTesting: any };

  if (!WebChatReleaseTesting || !WebChatReleaseTesting.loadCustomization || !WebChatReleaseTesting.renderCheatSheet) {
    setTimeout(init, 100);

    return;
  }

  await WebChatReleaseTesting.loadCustomization();
  await WebChatReleaseTesting.renderCheatSheet();

  ReactDOM.render(<App />, document.getElementsByTagName('main')[0]);
};

init();
