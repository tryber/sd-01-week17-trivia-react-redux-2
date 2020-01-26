import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  currentQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string.isRequired),
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};
