window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    locale: 'ja-JP',
    overrideLocalizedStrings: (strings, language) => ({
      ...strings,
      TEXT_INPUT_PLACEHOLDER: `Write something in ${language}`
    })
  })
};
