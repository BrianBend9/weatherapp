import express from 'express';
import debug from 'debug';
import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import configureStore from '../app/store/configureStore';
import routes from '../app/routes';

const appRouting = express();

appRouting.set('view engine', 'ejs');
appRouting.set('views', path.join(__dirname, '..', 'templates'));

appRouting.get('*', (req, res, next) => {
  const store = configureStore();

  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message); 
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search); 
    } else if (props) {
      const initialState = JSON.stringify(store.getState()); 
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

export default appRouting;
