import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/* eslint-disable react/jsx-props-no-spreading */
function SecuredRoute({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />)}
    />
  );
}

SecuredRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: (state.user && state.user.isLoggedIn) || false,
  };
}

export default connect(mapStateToProps)(SecuredRoute);
