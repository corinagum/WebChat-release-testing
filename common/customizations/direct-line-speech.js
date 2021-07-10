const {
  WebChat: { createDirectLineSpeechAdapters }
} = window;

const { fetchDirectLineSpeechCredentials } = window.createFetchTokens();

window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: async props => {
    const adapters = await createDirectLineSpeechAdapters({ fetchCredentials: fetchDirectLineSpeechCredentials });

    return {
      ...props,
      ...adapters
    };
  }
};
