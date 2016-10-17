import appRouting from './appRouting';
import apiRouting from './apiRouting';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev.js';

const compiler = webpack(webpackConfig);
const server = express();

server.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev'));

if (process.env.NODE_ENV !== 'production') {
  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true 
    }
  }));
  server.use(require('webpack-hot-middleware')(compiler));
} else {
  server.use(express.static('build'));
}

server.use('/api', apiRouting);

server.use('/', appRouting);

module.exports = server;
