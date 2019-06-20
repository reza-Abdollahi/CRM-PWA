import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

function SecuredRoute({ isAuthenticated, component: Component, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Route {...rest} render={props =>
        isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      }
    />
  );
}

SecuredRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user && state.user.isLoggedIn
  };
}

export default connect(mapStateToProps)(SecuredRoute);
