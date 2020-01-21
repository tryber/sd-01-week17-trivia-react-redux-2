import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeName, changeEmail } from '../actions/ActionHome';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e, callActions) {
    this.props.SubmitPlayerInformation(callActions, e.target.value);
  }
  render() {
    return (
      <div className="App">
        <h1>Home</h1>
        <Link to={"/settings"}>
          <button data-testeid="config-button" type="button">Settings</button>
        </Link>
        <label htmlFor="player-name">
          <input data-testeid="input-player-name" type="text" id="player-name" placeholder="Tap Your Name" onChange={(e) => this.handleOnChange(e, changeName)} />
        </label>
        <label htmlFor="player-email">
          <input data-testeid="input-gravatar-email" type="email" id="player-email" placeholder="Tap Your Email" onChange={(e) => this.handleOnChange(e, changeEmail)} />
        </label>
        <Link to="/game">
          <button type="button">Play</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({
  ReducerHome: { name, email, token }
}) => ({ name, email, token });

const mapDispatchToProps = (dispatch) => ({
  SubmitPlayerInformation: (callActions, value) => dispatch(callActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);