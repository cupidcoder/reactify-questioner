import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import isTokenValid from '../../utils/isTokenValid';

const LoggedInHOC = ({
  component: Component, token, setAdmin, ...rest
}) => (
  <Route
    {...rest}
    render={() => {
      if (token && isTokenValid(token)) {
        window.localStorage.setItem('token', token);
        window.location.href = '/meetups';
      }
      return <Component />;
    }}
  />
);

const mapStateToProps = (state) => {
  if (state.auth.data) {
    return { token: state.auth.data.token };
  }
  return { token: undefined };
};

export default connect(mapStateToProps)(LoggedInHOC);
