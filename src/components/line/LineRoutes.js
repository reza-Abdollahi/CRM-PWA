import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SelectLinePage from './SelectLinePage';
import LineDashboardPage from './LineDashboardPage';

const LineRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/select`} component={SelectLinePage} />
    <Route path={`${match.path}/:id?`} component={LineDashboardPage} />
  </Switch>
);

LineRoutes.propTypes = {
  match: PropTypes.object.isRequired,
};

export default LineRoutes;
