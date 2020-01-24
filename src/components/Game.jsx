import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';

import { changePoints, changeHit } from '../actions/GameData';


class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      answersOrder: [],
      currentCount: 30,
      isPaused: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.getTimeOut = this.getTimeOut.bind(this);
  }

  whatLevel(difficulty) {
    switch (difficulty) {
      case 'hard':
        return 3;
      case 'medium':
        return 2;
      case 'easy':
        return 1;
      default:
        return 0;
    }
  }

  handleClick(bool, answers, currentQuestion) {
    const { correct_answer, difficulty } = currentQuestion;
    answers.forEach(eachAnswer => {
      if (eachAnswer === correct_answer) {
        document.getElementById(eachAnswer).style.backgroundColor = "green";
      } else {
        document.getElementById(eachAnswer).style.backgroundColor = "red";
      }
      document.getElementById(eachAnswer).disabled = true;
    })
    this.getTimeOut();
    if (bool) {
      const { currentCount } = this.state;
      const level = this.whatLevel(difficulty);
      const points = 10 + (currentCount * level);
      this.props.submitScores(changePoints, points);
      this.props.submitScores(changeHit, 1);
    }

  }

  currentAnswers(currentQuestion) {
    const { correct_answer, incorrect_answers } = currentQuestion;
    const wrongAnswers = [...incorrect_answers];
    const { answersOrder } = this.state;
    return (
      <div>
        {answersOrder.map((eachAnswer, index) => {
          if (eachAnswer === correct_answer) return (
            <div key={index}>
              <button testid="correct-awnser"
                onClick={() => this.handleClick(true, answersOrder, currentQuestion)}
                key={`answer${index}`}
                id={`${eachAnswer}`}
              >
                {eachAnswer}
              </button>
            </div>);
          return (
            <div key={index}>
              <button testid={`wrong-answer-${wrongAnswers.indexOf(eachAnswer)}`}
                onClick={() => this.handleClick(false, answersOrder, currentQuestion)}
                key={`answer${index}`}
                id={`${eachAnswer}`}
              >
                {eachAnswer}
              </button>
            </div>);
        })}
      </div>
    );
  }

  currentQuestion(currentQuestion) {
    return (
      <div>
        <h2 data-testid="question-category">{currentQuestion.category}</h2>
        <p data-testid="question-text">{currentQuestion.question}</p>
      </div>
    );
  }

  getTimeOut() {
    this.setState({ isPaused: true });
  }

  timer() {
    if (!this.state.isPaused) {
      this.setState({
        currentCount: this.state.currentCount - 1,
      });
    }
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }

  componentDidMount() {
    const { data } = this.props;
    const { index } = this.state;
    if (data) {
      const currentQuestion = data[index];
      const { correct_answer, incorrect_answers } = currentQuestion;
      const answers = [...incorrect_answers];
      answers.splice(Math.floor(Math.random() * answers.length), 0, correct_answer);
      this.setState({
        answersOrder: answers,
      })
    }
    this.intervalId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { data } = this.props;
    const { index, currentCount } = this.state;
    if (data) {
      const currentQuestion = data[index];
      return (
        <div>
          <Header />
          {this.currentQuestion(currentQuestion)}
          {this.currentAnswers(currentQuestion)}
          <div className="timer">
            <p data-testid="timer">{currentCount}</p>
          </div>
          <div className="next-button">
            <button type="button">Next Question</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        Loading...
      </div>
    );
  }
}

const mapStateToProps = ({
  UserData: { name, token },
  Database: { errorData, data, errorCategories },
}) => ({ name, token, errorData, data, errorCategories });


const mapDispatchToProps = (dispatch) => ({
  submitScores: (callActions, value) => dispatch(callActions(value)),
});

Game.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  errorData: PropTypes.bool,
  errorCategories: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string.isRequired),
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
  submitScores: PropTypes.func.isRequired,
};

Game.defaultProps = {
  errorData: false,
  errorCategories: false,
  data: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
