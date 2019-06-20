import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import NotFound from './components/common/NotFound';
import SecuredRoute from './components/common/SecuredRoute';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <SecuredRoute path="/about" component={AboutPage} />
    <Route component={NotFound} />
  </Switch>
);
