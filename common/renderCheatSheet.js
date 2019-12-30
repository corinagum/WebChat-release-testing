const VERSION_TABLE_TEMPLATE = `
## Versions

This version table is generated from \`<meta>\` tags.

| Name | Version |
| - | - |
{CONTENT}
`

function buildVersionTable() {
  return VERSION_TABLE_TEMPLATE.replace('{CONTENT}', [].map.call(
    document.querySelectorAll('head meta[name^="bot"]'),
    meta => {
      return `| \`${meta.name}\` | \`${meta.content}\` |`;
    }
  ).join('\n'));
}

(async () => {
  const container = document.createElement('div');
  const content = document.createElement('div');
  const res = await fetch('README.md');
  const markdown = await res.text();
  const footerText = buildVersionTable();

  content.className = 'markdown';
  content.innerHTML = window.markdownit().render(markdown + '\n\n' + footerText);

  container.appendChild(content);
  container.id = 'cheat-sheet';

  document.body.appendChild(container);
})().catch(err => console.error(err));
