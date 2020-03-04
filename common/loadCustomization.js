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

async function loadScript(src) {
  const res = await fetch(src);

  if (!res.ok) {
    throw new Error(`Server returned ${res.status} while fetching JavaScript file.`);
  }

  const code = await res.text();

  eval(Babel.transform(code, { presets: ['es2015', 'stage-3'] }).code);
}

window.WebChat || (window.WebChat = {});
window.WebChat.customizations = { patchProps: props => props };
window.WebChat.loadCustomization = loadCustomization;
