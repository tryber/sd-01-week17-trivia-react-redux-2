import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import settingsIcon from '../img/settings-icon.png';
import '../style/Header.css';

const settingButton = () => (
  <Link to="/Settings">
    <input
      type="image"
      src={settingsIcon}
      className="settings-icon"
      data-testid="config-button"
      alt="settings button"
    />
  </Link>
);

const Header = ({ name, token, score, settings }) => (
  <div className="header-container">
    <div className="center-bar">
      <img src={token} alt="Game Player" className="player-image" />
      <p data-testid="header-player-name">Jogador: {name}</p>
    </div>
    <div className="center-bar">
      <p data-testid="header-score">Pontos: {score}</p>
      {settings && settingButton()}
    </div>
  </div>
);

const mapStateToProps = ({
  UserData: { name, token },
  GameData: { score },
}) => ({ name, token, score });

Header.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  settings: PropTypes.bool,
};

Header.defaultProps = {
  settings: false,
};

export default connect(mapStateToProps)(Header);
