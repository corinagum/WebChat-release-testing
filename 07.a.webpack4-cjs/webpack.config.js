const { resolve } = require('path');

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
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jsx?|mjs)$/,
        include: [
          resolve(__dirname, 'src'),
          // TODO: Use RegExp and add escape RegExp.
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
    minimize: true
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
