import React, { Component }  from 'react';

export default class CurrentQuestion extends Component {
  render() {
    const { currentQuestion } = this.props;
    return (
      <div>
        <h2 data-testid="question-category">{currentQuestion.category}</h2>
        <p data-testid="question-text">{currentQuestion.question}</p>
      </div>
    );
  }
}
