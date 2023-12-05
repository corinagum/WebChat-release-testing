const {
  WebChat: { createDirectLineAppServiceExtension }
} = window;

const { fetchDirectLineAppServiceExtensionToken } = window.createFetchTokens();

window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: async props => {
    const token = await fetchDirectLineAppServiceExtensionToken();

    const directLine = await createDirectLineAppServiceExtension({
      domain: 'https://webchat-mockbot3.azurewebsites.net/.bot/v3/directline',
      token
    });

    return {
      ...props,
      directLine
    };
  }
};
