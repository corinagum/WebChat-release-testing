if (!window.React) {
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
} else {
  const PortraitAvatar = ({ fromUser }) => {
    return React.createElement('img', { src: `../common/assets/${fromUser ? 'user.jpg' : 'bot.jpg'}`, style: { borderRadius: 4 } });
  };

  window.WebChat.customizations = {
    ...window.WebChat.customizations,
    patchProps: props => ({
      ...props,
      avatarMiddleware: () => next => ({ activity, fromUser, ...otherArgs }) => {
        const { text = '' } = activity;

        if (~text.indexOf('1')) {
          return false;
        } else if (~text.indexOf('2')) {
          return React.createElement(PortraitAvatar, { fromUser });
        }

        return next({ activity, fromUser, ...otherArgs });
      },
      styleOptions: {
        botAvatarInitials: 'WC',
        userAvatarInitials: 'WW'
      }
    })
  };
}
