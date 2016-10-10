const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src', 'app', 'client-entry.js')
    ] 
  },

  output: {
    path: path.join(__dirname, 'build'), 
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel' 
      },

      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loader: 'ejs-compiled-loader' 
      },
    ] 
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'templates', 'index.ejs')  
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
