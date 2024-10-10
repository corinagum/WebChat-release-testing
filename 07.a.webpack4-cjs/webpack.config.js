const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const whitelistedPackages = [
  'botframework-webchat-fluent-theme',
  'htmlparser2',
  'iter-fest',
  'micromark-util-decode-numeric-character-reference',
  'micromark-util-sanitize-uri',
  'microsoft-cognitiveservices-speech-sdk',
  'mime',
  'valibot'
];

module.exports = {
  amd: { jQuery: true },
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [
          resolve(__dirname, 'src'),
          ...whitelistedPackages.map(packageName => resolve(__dirname, 'node_modules', packageName))
        ],
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
