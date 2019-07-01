import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import LineRoutes from './components/line/LineRoutes';
import SettingPage from './components/setting/SettingPage';
import SecuredRoute from './components/common/SecuredRoute';

const Routes = ({location}) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/line" />
      <SecuredRoute path="/line" component={LineRoutes} />
      <SecuredRoute path="/setting" component={SettingPage} />
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
