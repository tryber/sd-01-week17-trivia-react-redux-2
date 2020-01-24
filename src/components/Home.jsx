import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'md5-hash';

import { changeName, changeEmail, changeToken } from '../actions/UserData';
import { fetchData, fetchCategories } from '../actions/Database';
import settingsIcon from '../img/settings-icon.png';
import '../style/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.generateInputs = this.generateInputs.bind(this);
  }

  componentDidMount() {
    const { category, type, difficulty } = this.props;
    this.props.fetchingSomething(fetchData(category, type, difficulty));
    this.props.fetchingSomething(fetchCategories());
  }

  handleChange(callActions, e) {
    this.props.submitPlayerInformation(callActions, e.target.value);
  }

  handleClick() {
    const { email } = this.props;
    const hash = md5(email.toLowerCase());
    const src = `https://www.gravatar.com/avatar/${hash}`;
    this.props.submitPlayerInformation(changeToken, src);
  }

  generateInputs() {
    return (
      <div className="home-container">
        <input
          data-testid="input-gravatar-email"
          type="email"
          id="player-email"
          placeholder="Email do Gravatar"
          className="home-input"
          onChange={(e) => this.handleChange(changeEmail, e)}
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
          onChange={(e) => this.handleChange(changeName, e)}
        />
        <label htmlFor="player-name" className="home-label">
          Nome do Jogador
        </label>
      </div>
    );
  }

  render() {
    return (
      <div className="App home-content">
        <div className="home-header">
          <h1 className="home-title">Home</h1>
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
        {this.generateInputs()}
        <Link to="/game">
          <button type="button" className="play-game" onClick={() => this.handleClick()}>
            Play
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({
  UserData: { email },
  DataFilter: { category, type, difficulty },
}) => ({ email, category, type, difficulty });

const mapDispatchToProps = (dispatch) => ({
  submitPlayerInformation: (callActions, value) => dispatch(callActions(value)),
  fetchingSomething: (fetchingSomething) => dispatch(fetchingSomething),
});

Home.propTypes = {
  email: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  submitPlayerInformation: PropTypes.func.isRequired,
  fetchingSomething: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
