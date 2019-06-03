import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-skeleton-loader';
import BaseLayout from '../BaseContainer/BaseContainer';
import MeetupDetailCard from '../../components/MeetupDetailCard/MeetupDetailCard';
import RsvpButtons from '../../components/RsvpButtons/RsvpButtons';
import { QuestionInputComponent } from '../../components/QuestionInput/QuestionInput';
import QuestionList from '../../components/QuestionList/QuestionList';
import { getMeetupDetailsRequest } from '../../actions/getMeetupDetailsActions';
import { getMeetupQuestionsRequest } from '../../actions/getMeetupQuestionsActions';
import style from './MeetupPage.css';

class MeetupPage extends Component {
  async componentDidMount() {
    const {
      computedMatch: { params },
      getMeetupDetails,
      getMeetupQuestions
    } = this.props;
    await getMeetupDetails(params.meetupId);
    await getMeetupQuestions(params.meetupId);
  }

  render() {
    const {
      computedMatch: { params: { meetupId } },
      meetupDetails,
      meetupQuestions,
      isLoadingMeetupQuestions
    } = this.props;
    return (
      <BaseLayout>
        <div className={style.MeetupPage}>
          <MeetupDetailCard {...meetupDetails} />
          <RsvpButtons />
          <QuestionInputComponent meetupId={meetupId} />
          {(!isLoadingMeetupQuestions && <QuestionList questions={meetupQuestions} />) || (
          <Skeleton width='100%' height='90px' />
          )}
        </div>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({
  status: state.meetupDetails.status,
  message: state.meetupDetails.message,
  meetupDetails: state.meetupDetails.data,
  isLoadingMeetupQuestions: state.meetupQuestions.isLoading,
  meetupQuestions: state.meetupQuestions.data
});

const mapDispatchToProps = dispatch => ({
  getMeetupDetails: meetupId => dispatch(getMeetupDetailsRequest(meetupId)),
  getMeetupQuestions: meetupId => dispatch(getMeetupQuestionsRequest(meetupId))
});

const MeetupPageComponent = connect(mapStateToProps, mapDispatchToProps)(MeetupPage);

export { MeetupPage, MeetupPageComponent };
