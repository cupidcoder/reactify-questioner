import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SignUp from '../containers/SignUp/SignUp';

const Layout = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' component={LandingPage} exact />
      <Route path='/signup' component={SignUp} />
    </Switch>
    <Footer />
  </Router>
);

export default Layout;
