import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggedInHOC from '../components/LoggedInHOC/LoggedInHOC';
import AuthorizationHOC from '../components/AuthorizationHOC/AuthorizationHOC';
import {
  LandingPage, SignUp, SignIn, MeetupsComponent, MeetupPageComponent, CreateMeetup, Profile
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
        <AuthorizationHOC path='/meetups' component={MeetupsComponent} exact />
        <AuthorizationHOC path='/meetups/page/:meetupId' component={MeetupPageComponent} exact />
        <AuthorizationHOC path='/meetups/create' component={CreateMeetup} exact />
        <Route path='/user/profile' component={Profile} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default Layout;
