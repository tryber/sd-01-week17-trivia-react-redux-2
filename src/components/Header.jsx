import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/Header.css';

const settingButton = () => (
  <Link to="/Settings">
    <button type="button" className="settings-button">
      <img src="../img/settings-icon.png" alt="settings icon" className="settings-icon" />
    </button>
  </Link>
);

const Header = ({ name, image, scorePoints, settings }) => (
  <div className="header-container">
    <div>
      <img src={image} alt="Game Player" className="player-image" />
      Jogador: {name}
    </div>
    <div>
      Pontos: {scorePoints}
      {settings && settingButton()}
    </div>
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  scorePoints: PropTypes.number.isRequired,
  settings: PropTypes.bool,
};

Header.defaultProps = {
  settings: false,
};

const mapStateToProps = ({
  ReducerHome: { name, image },
  ReducerGame: { scorePoints },
}) => ({ name, image, scorePoints });

export default connect(mapStateToProps)(Header);
