import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  LandingPage, SignUp, SignIn, Meetups
} from '../containers';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import style from './index.css';


const Layout = () => (
  <div className={style.app}>
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/meetups' component={Meetups} exact />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default Layout;
