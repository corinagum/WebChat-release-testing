window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    // locale: 'sr-Cyrl',
    // locale: 'ms-MY',
    locale: 'vi-VN',
    overrideLocalizedStrings: (strings, language) => ({
      ...strings,
      TEXT_INPUT_PLACEHOLDER: `Write something in ${language}`
    })
  })
};
