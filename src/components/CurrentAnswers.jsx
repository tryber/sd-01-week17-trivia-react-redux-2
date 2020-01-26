import React, { Component } from 'react';

export default class CurrentAnswers extends Component {
  constructor(props) {
    super(props);

    this.correctAnswer = this.correctAnswer.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.wrongAnswers = this.wrongAnswers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(answers, currentQuestion) {
    answers.forEach((eachAnswer) => {
      if (eachAnswer === currentQuestion.correct_answer) {
        document.getElementById(eachAnswer).style.backgroundColor = 'green';
      } else {
        document.getElementById(eachAnswer).style.backgroundColor = 'red';
      }
      document.getElementById(eachAnswer).disabled = true;
    });

  }

  correctAnswer(eachAnswer, currentQuestion, answersOrder) {
    return (
      <div key={eachAnswer}>
        <button
          data-testid="correct-answer"
          onClick={() => this.handleClick(answersOrder, currentQuestion)}
          key={`answer${eachAnswer}`}
          id={eachAnswer}
        >
          {eachAnswer}
        </button>
      </div>
    );
  }

  wrongAnswers(eachAnswer, currentQuestion, answersOrder) {
    const wrongAnswers = [...currentQuestion.incorrect_answers];
    return (
      <div key={eachAnswer}>
        <button
          data-testid={`wrong-answer-${wrongAnswers.indexOf(eachAnswer)}`}
          onClick={() => this.handleClick(answersOrder, currentQuestion)}
          key={`answer${eachAnswer}`}
          id={eachAnswer}
        >
          {eachAnswer}
        </button>
      </div>
    );
  }

  render() {
    const { currentQuestion, answersOrder } = this.props;
    return (
      <div>
        {answersOrder.map((eachAnswer) => {
          if (eachAnswer === currentQuestion.correct_answer) {
            return this.correctAnswer(eachAnswer, currentQuestion, answersOrder);
          }
          return this.wrongAnswers(eachAnswer, currentQuestion, answersOrder);
        })}
      </div>
    );
  }
}
