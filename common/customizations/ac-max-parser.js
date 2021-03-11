window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    adaptiveCardsParserMaxVersion: '1.2'
  })
};
