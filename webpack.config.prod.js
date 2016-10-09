const path = require('path');
const defaultConfig = require('./webpack.common');
const webpack = require('webpack');

defaultConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({ minimize: true })
);

const prodConfig = Object.assign({}, defaultConfig, {
  entry: {
    app: [
      path.join(__dirname, 'src', 'app', 'client-entry.js') 
    ] 
  }
});

module.exports = prodConfig;
