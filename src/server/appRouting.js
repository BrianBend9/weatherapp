import axios from 'axios';
import express from 'express';
import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import configureStore from '../app/store/configureStore';
import routes from '../app/routes';
import { getCoordinatesPreload, getForecastPreload } from '../app/utils/apiHelpers';

const appRouting = express();

appRouting.set('view engine', 'ejs');
appRouting.set('views', path.join(__dirname, '..', 'templates'));

appRouting.get('*', (req, res, next) => {

  const location = req.params[0].match(/[^/]*$/i)[0];
  const history = createMemoryHistory(req.params.location);
  const store = configureStore();

  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message); 
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search); 
    } else if (props) {
        const css = (process.env.NODE_ENV !== 'production') ? 'app.css' : 'app.min.css';
        const initialState = JSON.stringify(store.getState()); 
    
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        );

        res.render('index', {content, initialState, css});   
    } else {
      res.sendStatus(404); 
    }
  });
});
export default appRouting;
