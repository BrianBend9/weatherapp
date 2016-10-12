const path = require('path');
const webpack = require('webpack');
const defaultConfig = require('./webpack.common');

const devConfig = Object.assign({}, defaultConfig, {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, 'src', 'app', 'client-entry.js')
    ] 
  },
});

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = devConfig;
