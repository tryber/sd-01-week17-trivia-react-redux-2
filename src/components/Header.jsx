import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const settingButton = () => {
  return (
    <Link to="/Settings">
      <button type="button" className="settings-button">
        <img src="../img/settings-icon.png" alt="settings icon" className="settings-icon" />
      </button>
    </Link>
  );
}

const Header = ({ name, image, scorePoints, settings }) => {
  return (
    <div className="header-container">
      <div>
        <img src={image} alt="Game Player" className="player-image"/>
        Jogador: {name}
      </div>
      <div>
        Pontos: {scorePoints}
      {settings && settingButton()}
      </div>
    </div>
  );
}

const mapStateToProps = ({
  ReducerHome: { name, image },
  ReducerGame: { scorePoints },
}) => ({ name, image, scorePoints });

export default connect(mapStateToProps)(Header);
