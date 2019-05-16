import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage, SecondPage } from '../containers';

const Layout = () => (
  <Router>
    <Switch>
      <Route path='/' component={LandingPage} exact />
      <Route path='/second' component={SecondPage} />
    </Switch>
  </Router>
);

export default Layout;
