import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Store from '../Store/Store';
import  fetchData from '../actions/ActionGame';

class Game extends Component {
  componentDidMount() {
    this.props.getData();
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

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchData()),
});

Game.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
