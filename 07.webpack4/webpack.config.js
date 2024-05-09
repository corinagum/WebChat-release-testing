const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jsx?|mjs)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  output: {
    filename: 'js/bundle.js',
    path: resolve(__dirname, './public/static/')
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'] // Default of Webpack 4 plus JSX
  },
  target: 'web'
};
