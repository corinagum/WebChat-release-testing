window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: async props => ({
    ...props,
    styleOptions: {
      speechRecognitionContinuous: true
    }
  })
};
