import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-skeleton-loader';
import BaseContainer from '../BaseContainer/BaseContainer';
import MeetupCard from '../../components/MeetupCard/MeetupCard';
import { processGetMeetups } from '../../actions/getMeetupActions';
import style from './Meetups.css';

class Meetups extends Component {
  async componentDidMount() {
    const { getMeetupsRequest } = this.props;
    await getMeetupsRequest();
  }

  render() {
    const { isLoading, data } = this.props;
    let meetupCards;
    if (isLoading) {
      meetupCards = (
        <Skeleton
          count={1}
          width='50%'
          height='4rem'
          widthRandomness={0}
          borderRadius={0}
        />
      );
    } else if (data && data.length === 0) {
      meetupCards = <h3>No meetups available at the moment</h3>;
    } else {
      meetupCards = data.map(meetup => (
        <MeetupCard
          key={meetup.id}
          id={meetup.id}
          name={meetup.topic}
          description={meetup.description}
          location={meetup.location}
        />
      ));
    }
    return (
      <BaseContainer>
        <div className={style.Meetups}>
          {meetupCards}
        </div>
      </BaseContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.getMeetups.isLoading,
  status: state.getMeetups.status,
  message: state.getMeetups.message,
  data: state.getMeetups.data
});

const mapDispatchToProps = dispatch => ({
  getMeetupsRequest: () => dispatch(processGetMeetups())
});

const MeetupsComponent = connect(mapStateToProps, mapDispatchToProps)(Meetups);

export { Meetups, MeetupsComponent };
