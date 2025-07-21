const { resolve } = require('path');

const whitelistedPackages = [
  'botframework-webchat-fluent-theme', // Fluent skin pack requires transpilation.
  'htmlparser2',
  'iter-fest',
  'micromark-util-decode-numeric-character-reference',
  'micromark-util-sanitize-uri',
  'microsoft-cognitiveservices-speech-sdk',
  'mime',
  'valibot',

  // Also transpile Web Chat.
  'botframework-webchat-api',
  'botframework-webchat-component',
  'botframework-webchat-core',
  'botframework-webchat'
];

// TODO: Verify problematic build again (4.18.1-main.20241008.4880020).
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jsx?|mjs)$/,
        include: [
          resolve(__dirname, 'src'),
          ...whitelistedPackages.map(packageName => resolve(__dirname, 'node_modules', packageName))
        ],
        use: {
          loader: 'babel-loader',
          options: {
            // It was set to "commonjs" but never work on 4.18.0.
            presets: ['@babel/preset-react', ['@babel/preset-env', { modules: 'auto' }]]
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
