import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeCategory, changeDifficulty, changeType } from '../actions/DataFilter';

import '../style/Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(callActions, e) {
    this.props.changeSettings(callActions, e.target.value);
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="settings-container">
        <h1 className="title">Configurações</h1>
        <div className="select">
          <select name="category" data-testid="question-category-dropdown"
            onChange={(e) => this.handleChange(changeCategory, e)}
          >
            <option key="key" value="any">Any Category</option>
            {categories && categories.trivia_categories
              .map(categoryObject =>
                <option key={categoryObject.name} value={categoryObject.id}>{categoryObject.name}</option>
              )}
          </select>
        </div>
        <div className="select">
          <select name="difficulty"
            data-testid="question-difficulty-dropdown"
            onChange={(e) => this.handleChange(changeDifficulty, e)}
          >
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="select">
          <select name="type"
            data-testid="question-type-dropdown"
            onChange={(e) => this.handleChange(changeType, e)}
          >
            <option value="any">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>
        <Link to="/home">
          <button type="button" className="save-settings">Aplicar Configurações</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({
  Database: { categories },
}) => ({ categories });

const mapDispatchToProps = (dispatch) => ({
  changeSettings: (callActions, value) => dispatch(callActions(value)),
});

Settings.propTypes = {
  categories: PropTypes.shape({
    trivia_categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }),
  changeSettings: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  categories: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
