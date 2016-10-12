const path = require('path');
const webpack = require('webpack');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: (prod) ? 'eval' : 'source-map',

  output: {
    path: path.join(__dirname, 'build'), 
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader' 
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel' 
      },
    ] 
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'] 
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
      } 
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
