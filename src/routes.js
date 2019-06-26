import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/setting/SettingPage';
import NotFound from './components/common/NotFound';
import SecuredRoute from './components/common/SecuredRoute';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <SecuredRoute path="/setting" component={AboutPage} />
    <Route component={NotFound} />
  </Switch>
);
