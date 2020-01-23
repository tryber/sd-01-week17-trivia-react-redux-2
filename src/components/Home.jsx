import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'md5-hash';

import { changeName, changeEmail, changeToken } from '../actions/ActionHome';
import settingsIcon from '../img/settings-icon.png';
import '../style/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e, callActions) {
    this.props.SubmitPlayerInformation(callActions, e.target.value);
  }

  handleClick() {
    const { email } = this.props;
    const hash = md5(email.toLowerCase());
    const src = `https://www.gravatar.com/avatar/${hash}`;
    this.props.SubmitPlayerInformation(changeToken, src);
  }

  render() {
    return (
      <div className="App home-content">
        <div className="home-header">
          <h1>Home</h1>
          <Link to="/settings">
            <input
              type="image"
              src={settingsIcon}
              className="settings-big-icon"
              data-testid="config-button"
              alt="settings button"
            />
          </Link>
        </div>
        <div className="home-container">
          <input
            data-testid="input-gravatar-email"
            type="email"
            id="player-email"
            placeholder="Email do Gravatar"
            className="home-input"
            onChange={(e) => this.handleChange(e, changeEmail)}
          />
          <label htmlFor="player-email" className="home-label">
            Email do Gravatar
          </label>
          <input
            data-testid="input-player-name"
            type="text"
            id="player-name"
            placeholder="Nome do Jogador"
            className="home-input"
            onChange={(e) => this.handleChange(e, changeName)}
          />
          <label htmlFor="player-name" className="home-label">
            Nome do Jogador
          </label>
        </div>
        <Link to="/game">
          <button type="button" className="play-game" onClick={() => this.handleClick()}>Play</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({
  ReducerHome: { email },
}) => ({ email });

const mapDispatchToProps = (dispatch) => ({
  SubmitPlayerInformation: (callActions, value) => dispatch(callActions(value)),
});

Home.propTypes = {
  email: PropTypes.string.isRequired,
  SubmitPlayerInformation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
