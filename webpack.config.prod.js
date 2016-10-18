const path = require('path');
const defaultConfig = require('./webpack.common');
const webpack = require('webpack');

defaultConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({ minimize: true })
);

const prodConfig = Object.assign({}, defaultConfig);

module.exports = prodConfig;
