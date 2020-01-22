import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'md5-hash';

import { changeName, changeEmail, changeToken } from '../actions/ActionHome';

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
      <div className="App">
        <h1>Home</h1>
        <Link to="/settings">
          <button data-testeid="config-button" type="button">Settings</button>
        </Link>
        <label htmlFor="player-name">
          <input
            data-testeid="input-player-name"
            type="text" id="player-name"
            placeholder="Tap Your Name"
            onChange={(e) => this.handleChange(e, changeName)}
          />
        </label>
        <label htmlFor="player-email">
          <input
            data-testeid="input-gravatar-email"
            type="email"
            id="player-email"
            placeholder="Tap Your Email"
            onChange={(e) => this.handleChange(e, changeEmail)}
          />
        </label>
        <Link to="/game">
          <button type="button" onClick={() => this.handleClick()}>Play</button>
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
