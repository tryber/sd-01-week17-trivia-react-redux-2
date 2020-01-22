import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Store from '../Store/Store';
import DatabaseAPI from '../services/RequestAPI';

class Game extends Component {
  componentDidMount() {
    DatabaseAPI().then((resolve) => console.log(resolve));
  }

  render() {
    console.log(Store.getState());
    const { name, token } = this.props;
    return (
      <div className="App">
        <h1>Olar {name}</h1>
        <img src={token} alt="profile icon" />
        <h2>Score: 0</h2>
      </div>
    );
  }
}

const mapStateToProps = ({
  ReducerHome: { name, token },
}) => ({ name, token });

Game.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};


export default connect(mapStateToProps)(Game);
