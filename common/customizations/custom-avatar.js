window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    styleOptions: {
      botAvatarInitials: 'WC',
      userAvatarInitials: 'WW'
    }
  })
};
