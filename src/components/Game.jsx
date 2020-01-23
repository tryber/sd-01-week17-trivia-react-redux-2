import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import Store from '../Store/Store';
import fetchData from '../actions/ActionGame';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      guess: '',
    }
  }

  componentDidMount() {
    this.props.getData();
  }

  handleClick(event) {
    console.log(event.target.innerHTML)
  }

  renderAnswers(currentQuestion) {
    const { correct_answer, incorrect_answers } = currentQuestion;
    const wrongAnswers = [...incorrect_answers];
    const answers = [...incorrect_answers];
    answers.splice(Math.floor(Math.random() * answers.length), 0, correct_answer);
    return (
      <div>
        {answers.map((eachAnswer, index) => {
          if(eachAnswer === correct_answer) return (
            <div key={index}>
              <label testid="correct-awnser" htmlFor={`answer${index}`} onClick={(e) => this.handleClick(e)} key={`answer${index}`}>{eachAnswer}</label>
              <input key={`${index}answer`} type="radio" id={`answer${index}`} name="answers" />
            </div>);
            return (
              <div key={index}>
                <label testid={`wrong-answer-${wrongAnswers.indexOf(eachAnswer)}`} htmlFor={`answer${index}`} onClick={(e) => this.handleClick(e)} key={`answer${index}`}>{eachAnswer}</label>
                <input key={`${index}answer`} type="radio" id={`answer${index}`} name="answers" />
              </div>);
        })}
      </div>
    )
  }

  renderQuestion() {
    const { index } = this.state;
    const { data } = this.props;
    const currentQuestion = data[index]
    return (
      <div>
        <h1>{currentQuestion.question}</h1>
        {this.renderAnswers(currentQuestion)}
      </div>
    );
  }

  render() {
    console.log(Store.getState());
    const { name, token, error, data } = this.props;
    return (
      <div className="App">
        <h1>Olar {name}</h1>
        <img src={token} alt="profile icon" />
        <h2>Score: 0</h2>
        {error ? <Redirect to="/" /> : null}
        {data && this.renderQuestion()}
      </div>
    );
  }
}

const mapStateToProps = ({
  ReducerHome: { name, token },
  ReducerGame: { error, data },
}) => ({ name, token, error, data });

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchData()),
});

Game.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

Game.defaultProps = {
  error: false,
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
