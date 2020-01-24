import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import QuestionCategory from '../components/QuestionCategory';
import QuestionType from '../components/QuestionType';
import QuestionDifficulty from '../components/QuestionDifficulty';
import '../style/Settings.css';

class Settings extends Component {
  render() {
    return (
      <div className="settings-container">
        <h1 className="title">Settings</h1>
        <div className="select">
          <QuestionCategory />
        </div>
        <div className="select">
          <QuestionDifficulty />
        </div>
        <div className="select">
          <QuestionType />
        </div>
        <Link to="/home">
          <button type="button" className="save-settings">Apply Settings</button>
        </Link>
      </div>
    );
  }
}

export default Settings;
