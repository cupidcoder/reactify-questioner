import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' component={LandingPage} exact />
    </Switch>
    <Footer />
  </Router>
);

export default Layout;
