import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/setting/SettingPage';
import SecuredRoute from './components/common/SecuredRoute';

const Routes = ({location}) => {
  return (
    <Switch>
      <SecuredRoute exact path="/" component={HomePage} />
      <SecuredRoute path="/setting" component={AboutPage} />
      <Redirect to={{
        pathname: '/not-found',
        search: `${location.pathname}`
      }} />
    </Switch>
  );
};

Routes.propTypes = {
  location: PropTypes.object
};

export default withRouter(Routes);
