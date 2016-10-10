import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../app/routes';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const server = express();

server.set('views', path.join(__dirname, '..', 'templates'));
server.set('view engine', 'ejs');

server.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev'));

server.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message); 
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search); 
    } else if (props) {
      const content = renderToString(<RoutingContext {...props} />);
      res.render('index', {content}) 
    } else {
      res.sendStatus(404); 
    }
  });
});

module.exports = server;
