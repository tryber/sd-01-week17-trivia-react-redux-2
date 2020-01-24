import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'md5-hash';

import { changeName, changeEmail, changeToken } from '../actions/UserData';
import { fetchData, fetchCategories } from '../actions/Database';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return (
      <div className="App">
        <h1>Home</h1>
        <Link to="/settings">
          <button data-testeid="config-button" type="button">Settings</button>
        </Link>
        <input
          data-testeid="input-player-name"
          type="text" id="player-name"
          placeholder="tap your name"
          onChange={(e) => this.handleChange(changeName, e)}
        />
        <input
          data-testeid="input-gravatar-email"
          type="email" id="player-email"
          placeholder="Tap Your Email"
          onChange={(e) => this.handleChange(changeEmail, e)}
        />
        <Link to="/game">
          <button type="button" onClick={() => this.handleClick()}>Play</button>
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
