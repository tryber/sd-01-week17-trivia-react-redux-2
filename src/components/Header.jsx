import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/Header.css';

class Header extends Component {
  render() {
    const { name, token, score } = this.props;
    return (
      <div className="header-container">
        <div className="center-bar">
          <img src={token} alt="Game Player" className="player-image" />
          <h1 data-testid="header-player-name">Jogador: {name}</h1>
          <h2 data-testid="header-score">Score: {score}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  UserData: { name, token },
  GameData: { score },
}) => ({ name, token, score });

Header.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
