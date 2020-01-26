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

CurrentQuestion.propTypes = {
  currentQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};
