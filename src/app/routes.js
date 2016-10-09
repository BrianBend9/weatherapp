import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Search from './components/Search';
import DetailContainer from './containers/DetailContainer';
import OverviewContainer from './containers/OverviewContainer';

export default (
  <Route path='/' component={MainLayout} >
    <IndexRoute component={Search} />
    <Route path='/overview/:location' component={OverviewContainer} />
    <Route path='/detail/:day' component={DetailContainer} />
  </Route>
);
