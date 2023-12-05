const parts = document.location.search.replace(/^\?/, '').split('&');
const search = parts.reduce((search, part) => {
  const [key, value] = part.split('=');

  search[key] = value;

  return search;
}, {});

window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    styleOptions: {
      ...props.styleOptions,
      sendBoxButtonAlignment: search.alignment,
      sendBoxTextWrap: true
    }
  })
};
