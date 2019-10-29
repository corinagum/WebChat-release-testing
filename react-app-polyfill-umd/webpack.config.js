const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'react-app-polyfill.ie11.production.min.js',
    library: 'ReactAppPolyfill',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist')
  }
};
