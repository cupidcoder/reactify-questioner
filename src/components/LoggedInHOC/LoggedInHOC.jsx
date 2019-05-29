import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import isTokenValid from '../../utils';

const LoggedInHOC = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      if (token && isTokenValid(token)) {
        return <Redirect to='/meetups' />;
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
