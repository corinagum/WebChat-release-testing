window.WebChat.customizations = {
  ...window.WebChat.customizations,
  createDirectLineMiddleware: () => next => options =>
    next({
      ...options,
      domain: 'https://localhost:0/v3/directline'
    }),
    patchProps: props => ({
      ...props,
      store: window.WebChat.createStore({}, ({ dispatch }) => {
        setImmediate(
          () =>
            dispatch({
              type: 'WEB_CHAT/SET_NOTIFICATION',
              payload: {
                id: 'airplane-mode',
                level: 'error',
                message: 'Direct Line channel: Emulating airplane mode.'
              }
            })
        );

        return next => action => next(action);
      })
    })
};
