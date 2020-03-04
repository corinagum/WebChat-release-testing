(() => {
  const parts = document.location.search.replace(/^\?/, '').split('&');
  const search = parts.reduce((search, part) => {
    const [key, value] = part.split('=');

    search[key] = value;

    return search;
  }, {});

  window.WebChat.customizationName = search.customization;
})();

async function loadCustomization() {
  const { customizationName } = window.WebChat;

  if (!customizationName) {
    return;
  }

  await loadScript(`../common/customizations/${customizationName}.js`);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.addEventListener('error', ({ error }) => reject(error));
    script.addEventListener('load', () => resolve());
    script.setAttribute('async', 'async');
    script.setAttribute('src', src);

    document.head.appendChild(script);
  });
}

window.WebChat || (window.WebChat = {});
window.WebChat.customizations = { patchProps: props => props };
window.WebChat.loadCustomization = loadCustomization;
