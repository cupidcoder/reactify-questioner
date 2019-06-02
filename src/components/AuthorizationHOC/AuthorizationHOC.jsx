import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isTokenValid from '../../utils/isTokenValid';

const AuthorizationHOC = ({
  component: Component, token, history, ...rest
}) => (
  <Route
    render={() => {
      if (token && isTokenValid(token)) {
        window.localStorage.setItem('token', token);
        return <Component {...rest} />;
      }
      return history.push('/signin');
    }}
  />
);

const mapStateToProps = (state) => {
  if (state.auth.data) {
    return { token: state.auth.data.token };
  }
  return { token: undefined };
};

export default connect(mapStateToProps)(withRouter(AuthorizationHOC));
