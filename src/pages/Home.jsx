import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'md5-hash';

import { fetchData, fetchCategories } from '../actions/Database';
import { changeToken } from '../actions/UserData';
import settingsIcon from '../img/settings-icon.png';
import HomeInputs from '../components/HomeInputs';
import '../style/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.getGravatarImage = this.getGravatarImage.bind(this);
  }

  componentDidMount() {
    const { category, type, difficulty, fetchingSomething } = this.props;
    fetchingSomething(fetchData(category, type, difficulty));
    fetchingSomething(fetchCategories());
  }

  getGravatarImage() {
    const { email, submitPlayerInformation } = this.props;
    const hash = md5(email.toLowerCase());
    const src = `https://www.gravatar.com/avatar/${hash}`;
    submitPlayerInformation(changeToken, src);
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
        <HomeInputs />
        <Link to="/game">
          <button type="button" className="play-game" onClick={() => this.getGravatarImage()}>
            Play Game
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
  category: PropTypes.string,
  difficulty: PropTypes.string,
  type: PropTypes.string,
  fetchingSomething: PropTypes.func.isRequired,
  submitPlayerInformation: PropTypes.func.isRequired,
};

Home.defaultProps = {
  category: 'any',
  difficulty: 'any',
  type: 'any',
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
