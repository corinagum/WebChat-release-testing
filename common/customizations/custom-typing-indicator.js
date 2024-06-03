window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    sendTypingIndicator: true,
    typingIndicatorMiddleware: () => () => ({ activeTyping }) => {
      activeTyping = Object.values(activeTyping);

      return (
        !!activeTyping.length &&
        `Currently typing: ${activeTyping
          .map(({ role }) => role)
          .sort()
          .join(', ')}`
      );
    }
  })
};
