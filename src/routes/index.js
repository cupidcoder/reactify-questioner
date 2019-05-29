import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggedInHOC from '../components/LoggedInHOC/LoggedInHOC';
import {
  LandingPage, SignUp, SignIn, Meetups, MeetupPage, CreateMeetup, Profile
} from '../containers';
import { HeaderComponent } from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import style from './index.css';


const Layout = () => (
  <div className={style.app}>
    <Router>
      <HeaderComponent />
      <Switch>
        <LoggedInHOC path='/' component={LandingPage} exact />
        <LoggedInHOC path='/signup' component={SignUp} />
        <LoggedInHOC path='/signin' component={SignIn} />
        <Route path='/meetups' component={Meetups} exact />
        <Route path='/meetups/page' component={MeetupPage} exact />
        <Route path='/meetups/create' component={CreateMeetup} exact />
        <Route path='/user/profile' component={Profile} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default Layout;
