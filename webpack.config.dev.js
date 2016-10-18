const path = require('path');
const webpack = require('webpack');
const defaultConfig = require('./webpack.common');

const devConfig = Object.assign({}, defaultConfig);

devConfig.entry['app'].unshift('react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true');

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = devConfig;
