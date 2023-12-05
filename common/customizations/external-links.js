window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    styleOptions: {
      ...props.styleOptions,
      adaptiveCardsParserMaxVersion: "1.2"
    }
  })
};
