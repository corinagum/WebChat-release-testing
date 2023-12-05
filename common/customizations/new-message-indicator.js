window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    overrideLocalizedStrings: strings => ({
      ...strings,
      TRANSCRIPT_NEW_MESSAGES: `Unread message from bot`
    })
  })
};
