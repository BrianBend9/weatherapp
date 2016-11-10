import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Search from './components/Search';
import DetailContainer from './containers/DetailContainer';
import OverviewContainer from './containers/OverviewContainer';

export default (
  <Route path='/' component={MainLayout} >
    <IndexRoute
      component={() =>
        <Search
          label='Enter a city or location.'
          containerClass='form__container--main'
          formBtnClass='btn btn-info form__searchBtn--main'
          formClass='formClass'
        />}
    />
    <Route path='/overview/:location' component={OverviewContainer} />
    <Route path='/detail/:day/:dayOfWeek' component={DetailContainer} />
  </Route>
);
