const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: (prod) ? 'eval' : 'source-map',

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

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'] 
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'templates', 'index.ejs')  
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
      } 
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
