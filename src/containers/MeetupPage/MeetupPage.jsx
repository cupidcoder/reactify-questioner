import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseLayout from '../BaseContainer/BaseContainer';
import MeetupDetailCard from '../../components/MeetupDetailCard/MeetupDetailCard';
import RsvpButtons from '../../components/RsvpButtons/RsvpButtons';
import QuestionInput from '../../components/QuestionInput/QuestionInput';
import QuestionList from '../../components/QuestionList/QuestionList';
import { getMeetupDetailsRequest } from '../../actions/getMeetupDetailsActions';
import style from './MeetupPage.css';

class MeetupPage extends Component {
  async componentDidMount() {
    const { computedMatch: { params }, getMeetupDetails } = this.props;
    await getMeetupDetails(params.meetupId);
  }

  render() {
    const { meetupDetails } = this.props;
    return (
      <BaseLayout>
        <div className={style.MeetupPage}>
          <MeetupDetailCard {...meetupDetails} />
          <RsvpButtons />
          <QuestionInput />
          <QuestionList />
        </div>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({
  status: state.meetupDetails.status,
  message: state.meetupDetails.message,
  meetupDetails: state.meetupDetails.data
});

const mapDispatchToProps = dispatch => ({
  getMeetupDetails: meetupId => dispatch(getMeetupDetailsRequest(meetupId))
});

const MeetupPageComponent = connect(mapStateToProps, mapDispatchToProps)(MeetupPage);

export { MeetupPage, MeetupPageComponent };
