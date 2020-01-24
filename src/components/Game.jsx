import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
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
    };

    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.getTimeOut = this.getTimeOut.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.wrongAnswers = this.wrongAnswers.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    const { index } = this.state;
    if (data) {
      const currentQuestion = data[index];
      const answers = [...currentQuestion.incorrect_answers];
      answers.splice(Math.floor(Math.random() * answers.length), 0, currentQuestion.correct_answer);
      this.setState({
        answersOrder: answers,
      });
    }
    this.intervalId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getTimeOut() {
    this.setState({ isPaused: true });
  }

  wrongAnswers(eachAnswer, currentQuestion) {
    const { answersOrder } = this.state;
    const wrongAnswers = [...currentQuestion.incorrect_answers];
    return (
      <div key={eachAnswer}>
        <button
          testid={`wrong-answer-${wrongAnswers.indexOf(eachAnswer)}`}
          onClick={() => this.handleClick(false, answersOrder, currentQuestion)}
          key={`answer${eachAnswer}`}
          id={`${eachAnswer}`}
        >
          {eachAnswer}
        </button>
      </div>);
  }

  correctAnswer(eachAnswer, currentQuestion) {
    const { answersOrder } = this.state;
    return (
      <div key={eachAnswer}>
        <button
          testid="correct-awnser"
          onClick={() => this.handleClick(true, answersOrder, currentQuestion)}
          key={`answer${eachAnswer}`}
          id={`${eachAnswer}`}
        >
          {eachAnswer}
        </button>
      </div>);
  }

  currentAnswers(currentQuestion) {
    const { answersOrder } = this.state;
    return (
      <div>
        {answersOrder.map((eachAnswer) => {
          if (eachAnswer === currentQuestion.correct_answer) {
            return this.correctAnswer(eachAnswer, currentQuestion);
          }
          return this.wrongAnswers(eachAnswer, currentQuestion);
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

  handleClick(bool, answers, currentQuestion) {
    const { difficulty } = currentQuestion;
    answers.forEach((eachAnswer) => {
      if (eachAnswer === currentQuestion.correct_answer) {
        document.getElementById(eachAnswer).style.backgroundColor = 'green';
      } else {
        document.getElementById(eachAnswer).style.backgroundColor = 'red';
      }
      document.getElementById(eachAnswer).disabled = true;
    });
    this.getTimeOut();
    if (bool) {
      const { currentCount } = this.state;
      const level = this.whatLevel(difficulty);
      const points = 10 + (currentCount * level);
      this.props.submitScores(changePoints, points);
      this.props.submitScores(changeHit, 1);
    }
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
  Database: { data },
}) => ({ data });


const mapDispatchToProps = (dispatch) => ({
  submitScores: (callActions, value) => dispatch(callActions(value)),
});

Game.propTypes = {
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
  data: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
