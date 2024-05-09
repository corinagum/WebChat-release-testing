const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jsx?|mjs)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'js/bundle.js',
    path: resolve(__dirname, './public/static/')
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx'] // Default of Webpack 5 plus JSX
  },
  target: 'web'
};
