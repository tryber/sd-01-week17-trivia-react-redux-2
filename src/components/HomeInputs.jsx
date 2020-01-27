import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeEmail, changeName } from '../actions/UserData';

function HomeInputs({ submitPlayerInformation, handleChanges }) {
  return (
    <div className="home-container">
      <input
        data-testid="input-gravatar-email"
        type="email"
        id="player-email"
        placeholder="Gravatar's Email"
        className="home-input"
        onChange={(e) => {
          submitPlayerInformation(changeEmail, e.target.value);
          handleChanges(e, 'email');
        }}
      />
      <label htmlFor="player-email" className="home-label">
        Gravatar&#39;s Email
      </label>
      <input
        data-testid="input-player-name"
        type="text"
        id="player-name"
        placeholder="Player's Name"
        className="home-input"
        onChange={(e) => {
          submitPlayerInformation(changeName, e.target.value)
          handleChanges(e, 'name')
        }}
      />
      <label htmlFor="player-name" className="home-label">
        Player&#39;s Name
      </label>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  submitPlayerInformation: (callActions, value) => dispatch(callActions(value)),
});

HomeInputs.propTypes = {
  submitPlayerInformation: PropTypes.func.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(HomeInputs);
