import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { processCreateMeetup } from '../../actions/createMeetupActions';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import style from './MeetupForm.css';

class MeetupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      description: '',
      location: '',
      happeningOn: '',
      time: ''
    };
  }

  handleFieldInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      topic, description, location, happeningOn, time
    } = this.state;
    const { createMeetupRequest } = this.props;
    const meetupObject = {
      topic,
      description,
      location,
      happeningOn: `${happeningOn}T${time}`
    };
    await createMeetupRequest(meetupObject);
    const { status, message, history } = this.props;
    if (status === 201) {
      toast(`${message}`, {
        type: 'success',
        onClose: history.push('/meetups')
      });
    } else if (status === 400) {
      toast(message, {
        type: 'error'
      });
    } else if (status === 401) {
      toast(message, {
        type: 'error'
      });
    } else {
      toast('Something very strange is happening', {
        type: 'error'
      });
    }
  }

  render() {
    const { isLoading } = this.props;
    const spinner = isLoading ? <Spinner /> : null;
    const { time } = this.state;
    return (
      <div className={style.MeetupFormContainer}>
        <div className={style.MeetupForm}>
          <h2>Create Meetup</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className={style.Input}>
              <input
                type='text'
                id='topic'
                placeholder='Topic'
                onChange={this.handleFieldInput}
                required
              />
            </div>
            <div className={style.Input}>
              <input
                type='text'
                id='description'
                placeholder='Description'
                onChange={this.handleFieldInput}
                required
              />
            </div>
            <div className={style.Input}>
              <input
                type='text'
                id='location'
                placeholder='Location'
                onChange={this.handleFieldInput}
                required
              />
            </div>
            <div className={style.Input}>
              <input
                type='date'
                id='happeningOn'
                placeholder='Date'
                onChange={this.handleFieldInput}
                required
              />
            </div>
            <div className={style.Input}>
              <input
                type='time'
                id='time'
                onChange={this.handleFieldInput}
                value={time || '13:00'}
                required
              />
            </div>
            <div className={style.Button}>
              <Button>
                  Create
                {' '}
                {spinner}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.createMeetup.isLoading,
  message: state.createMeetup.message,
  status: state.createMeetup.status
});

const mapDispatchToProps = dispatch => ({
  createMeetupRequest: meetupObject => dispatch(processCreateMeetup(meetupObject))
});

const MeetupFormComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(MeetupForm));

export { MeetupForm, MeetupFormComponent };
