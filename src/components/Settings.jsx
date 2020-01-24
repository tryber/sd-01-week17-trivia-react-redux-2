import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import QuestionCategory from './QuestionCategory';
import QuestionType from './QuestionType';
import QuestionDifficulty from './QuestionDifficulty';
import '../style/Settings.css';

class Settings extends Component {
  render() {
    return (
      <div className="settings-container">
        <h1 className="title">Configurações</h1>
        <QuestionCategory />
        <QuestionDifficulty />
        <QuestionType />
        <Link to="/home">
          <button type="button" className="save-settings">Aplicar Configurações</button>
        </Link>
      </div>
    );
  }
}

export default Settings;
