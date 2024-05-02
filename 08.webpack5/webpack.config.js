const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.(?:jsx?|mjs|cjs)?$/,
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
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  target: 'web'
};
