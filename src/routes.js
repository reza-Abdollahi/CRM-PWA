import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LoginPage from './components/auth/LoginPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/login" component={LoginPage} />
  </Switch>
);
