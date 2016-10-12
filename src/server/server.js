import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../app/routes';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import locationReducer from '../app/reducers/LocationReducer';
import forecastReducer from '../app/reducers/ForecastReducer';

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.dev.js');
const compiler = webpack(webpackConfig);

const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

server.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev'));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '..', 'templates'));

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

server.get('*', (req, res) => {
  const reducers = combineReducers({
    location: locationReducer,
  forecast: forecastReducer 
  }); 
  const store = createStore(reducers);

  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message); 
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search); 
    } else if (props) {
      const initialState = JSON.stringify({a: 1, b: 2}); 
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );
      res.render('index', {content, initialState});   
    } else {
      res.sendStatus(404); 
    }
  });
});

module.exports = server;
