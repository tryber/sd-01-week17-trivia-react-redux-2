import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CurrentQuestion from '../components/CurrentQuestion';

import { changePoints, changeHit, clearAll } from '../actions/GameData';
import { whatLevel, getRandomInt } from '../services/SupportFunctions';

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
    this.randomAnswers = this.randomAnswers.bind(this);
    this.timeOut = this.timeOut.bind(this);
    this.feedbackPage = this.feedbackPage.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    const { index } = this.state;
    if (data) {
      this.randomAnswers(data, index);
    }
    this.intervalId = setInterval(this.timer, 1000);
    this.props.clearScores();
  }

  componentDidUpdate(prevProps, prevState) {
    const { answersOrder, index } = this.state;
    if (prevState.index !== index) {
      answersOrder.forEach((answers) => {
        document.getElementById(answers).style.backgroundColor = 'grey';
        document.getElementById(answers).disabled = false;
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getTimeOut() {
    this.setState({ isPaused: true });
  }

  randomAnswers(data, index) {
    const currentQuestion = data[index];
    const answers = [...currentQuestion.incorrect_answers];
    answers.splice(getRandomInt(0, answers.length + 1), 0, currentQuestion.correct_answer);
    this.setState({
      answersOrder: answers,
    });
  }

  wrongAnswers(eachAnswer, currentQuestion) {
    const { answersOrder } = this.state;
    const wrongAnswers = [...currentQuestion.incorrect_answers];
    return (
      <div key={eachAnswer}>
        <button
          data-testid={`wrong-answer-${wrongAnswers.indexOf(eachAnswer)}`}
          onClick={() => this.handleClick(false, answersOrder, currentQuestion)}
          key={`answer${eachAnswer}`}
          id={eachAnswer}
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
          data-testid="correct-answer"
          onClick={() => this.handleClick(true, answersOrder, currentQuestion)}
          key={`answer${eachAnswer}`}
          id={eachAnswer}
        >
          {eachAnswer}
        </button>
      </div>);
  }

  currentAnswers() {
    const { data } = this.props;
    const { index, answersOrder } = this.state;
    if (data) {
      const currentQuestion = data[index];
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
    return null;
  }

  handleClick(bool, answers, currentQuestion) {
    const { difficulty } = currentQuestion;
    const { index } = this.state;
    answers.forEach((eachAnswer) => {
      if (eachAnswer === currentQuestion.correct_answer) {
        document.getElementById(eachAnswer).style.backgroundColor = 'green';
      } else {
        document.getElementById(eachAnswer).style.backgroundColor = 'red';
      }
      document.getElementById(eachAnswer).disabled = true;
      if (index < 4) {
        document.getElementById('next-question').style.display = 'block';
      } else {
        document.getElementById('feedback').style.display = 'block';
      }
    });
    this.getTimeOut();
    if (bool) {
      const { currentCount } = this.state;
      const level = whatLevel(difficulty);
      const points = 10 + (currentCount * level);
      this.props.submitScores(changePoints, points);
      this.props.submitScores(changeHit, 1);
    }
  }

  nextQuestion(e) {
    const { data } = this.props;
    if (data) {
      this.setState((state) => ({
        index: state.index + 1,
        answersOrder: this.randomAnswers(data, state.index + 1),
        currentCount: 30,
        isPaused: false,
      }));
    }
    e.target.style.display = 'none';
  }

  feedbackPage() {
    this.props.history.push('/feedback');
  }

  timeOut() {
    const { data } = this.props;
    const { index, answersOrder } = this.state;
    if (data) {
      const currentQuestion = data[index];
      answersOrder.forEach((eachAnswer) => {
        if (eachAnswer === currentQuestion.correct_answer) {
          document.getElementById(eachAnswer).style.backgroundColor = 'green';
        } else {
          document.getElementById(eachAnswer).style.backgroundColor = 'red';
        }
        document.getElementById(eachAnswer).disabled = true;
        if (index < 4) {
          document.getElementById('next-question').style.display = 'block';
        } else {
          document.getElementById('feedback').style.display = 'block';
        }
      });
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
  render() {
    const { currentCount, index } = this.state;
    const { data } = this.props;
    return (
      <div>
        <Header />
        {data && <CurrentQuestion currentQuestion={data[index]} />}
        {this.currentAnswers()}
        {currentCount === 0 && this.timeOut()}
        <div className="timer"><p data-testid="timer">{currentCount}</p></div>
        {index < 4 ?
          <button
            onClick={(e) => this.nextQuestion(e)}
            style={{ display: 'none' }}
            id="next-question"
            type="button" data-testid="btn-next"
          >
            Próxima
          </button>
          :
          <button
            onClick={this.feedbackPage}
            style={{ display: 'none' }}
            id="feedback"
            type="button" data-testid="btn-next"
          >
            Feedback
          </button>
        }
      </div>
    );
  }
}

const mapStateToProps = ({
  Database: { data },
}) => ({ data });

const mapDispatchToProps = (dispatch) => ({
  submitScores: (callActions, value) => dispatch(callActions(value)),
  clearScores: () => dispatch(clearAll()),
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
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  clearScores: PropTypes.func.isRequired,
};

Game.defaultProps = {
  data: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
