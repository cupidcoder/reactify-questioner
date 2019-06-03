import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { postQuestionRequest } from '../../actions/postQuestionActions';
import { getMeetupQuestionsRequest } from '../../actions/getMeetupQuestionsActions';
import style from './QuestionInput.css';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';

class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    };
  }

  refreshQuestionsList = async () => {
    const { meetupId, refreshQuestions } = this.props;
    await refreshQuestions(meetupId);
    this.setState({ question: '' });
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { question } = this.state;
    const { meetupId, postQuestion } = this.props;
    const questionObject = {
      meetupID: meetupId,
      body: question
    };
    await postQuestion(questionObject);
    const { status, message } = this.props;
    if (status === 201) {
      toast(message, {
        type: 'success',
        onClose: this.refreshQuestionsList
      });
    } else {
      toast(message, {
        type: 'error',
      });
    }
  }

  render() {
    const { question } = this.state;
    const { isLoading } = this.props;
    const spinner = isLoading ? <Spinner /> : null;
    return (
      <div className={style.QuestionInput}>
        <form onSubmit={this.handleFormSubmit}>
          <div className={style.InputGroup}>
            <textarea
              className={style.Input}
              placeholder='Ask your question'
              id='question'
              onChange={this.handleInputChange}
              value={question}
              required
            />
            <Button>
              Post
              {' '}
              {spinner}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.postQuestion.isLoading,
  status: state.postQuestion.status,
  message: state.postQuestion.message
});

const mapDispatchToProps = dispatch => ({
  postQuestion: questionObject => dispatch(postQuestionRequest(questionObject)),
  refreshQuestions: meetupId => dispatch(getMeetupQuestionsRequest(meetupId))
});

const QuestionInputComponent = connect(mapStateToProps, mapDispatchToProps)(QuestionInput);

export {
  QuestionInput,
  QuestionInputComponent
};
