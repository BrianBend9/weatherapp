const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: (prod) ? 'eval' : 'source-map',

  entry: {
    app: [
      path.join(__dirname, 'src', 'app', 'client-entry.js'),
      path.join(__dirname, 'src', 'app', 'styles', 'main.scss')
    ] 
  },

  output: {
    path: path.join(__dirname, 'client'), 
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
      
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', [
          'css?sourceMap',
          'postcss',
          (prod) ? 'sass?sourceMap&outputStyle=compressed' : 'sass?sourceMap&outputStyle=expanded' 
        ]) 
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, 'src', 'app', 'images'),
        loaders: [
          'file?hash=sha512&digest=hex&name=images/[name]-[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ] 
      },

      {
        test: /\.json$/,
        loaders: ['json-loader'] 
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', 'json', '.scss'] 
  },

  postcss: function() {
    return [ autoprefixer({ browsers: ['last 3 versions'] }) ];
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
      } 
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin((prod) ? '[name].min.css' : '[name].css')
  ]
};
