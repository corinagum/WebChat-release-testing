const {
  WebChat: { createDirectLineAppServiceExtension }
} = window;

const { fetchDirectLineAppServiceExtensionToken } = window.createFetchTokens();

window.WebChatReleaseTesting.customizations = {
  ...window.WebChatReleaseTesting.customizations,
  patchProps: async props => {
    const token = await fetchDirectLineAppServiceExtensionToken();

    const directLine = await createDirectLineAppServiceExtension({
      domain: 'https://hawo-mockbot4-token-app.blueriver-ce85e8f0.westus.azurecontainerapps.io/api/token/directlinease',
      token
    });

    return {
      ...props,
      directLine
    };
  }
};
