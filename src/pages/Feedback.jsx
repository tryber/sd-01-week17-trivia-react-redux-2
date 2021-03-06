import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '../style/Feedback.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.verifyScore = this.verifyScore.bind(this);
    this.updateRankingStorage = this.updateRankingStorage.bind(this);
  }

  componentDidMount() {
    const { name, email, score, hit } = this.props;
    const player = {
      name,
      assertions: hit,
      score,
      gravatarEmail: email,
    };
    localStorage.setItem('player', JSON.stringify(player));
  }

  verifyScore() {
    if (this.props.hit >= 3) return 'Mandou bem!';
    return 'Poderia ser melhor...';
  }

  updateRankingStorage() {
    const { score, name, token } = this.props;
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    const playerData = { name, score, picture: token };
    ranking.push(playerData);
    localStorage.setItem('ranking', JSON.stringify(ranking));
  }

  render() {
    const { score, hit, name } = this.props;
    return (
      <div className="feedback-content">
        <Header settings />
        <h3 data-testid="feedback-text">{this.verifyScore()}</h3>
        <div>
          <p data-testid="feedback-total-question">Você acertou {hit} questões!</p>
          <p data-testid="feedback-total-score">Um total de {score} pontos</p>
        </div>
        <Link to="/ranking">
          <button type="button">
            Ver Ranking
          </button>
        </Link>
        <Link to="/">
          <button type="button">
            Jogar Novamente
          </button>
        </Link>
        {name && this.updateRankingStorage()}
      </div>
    );
  }
}

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  hit: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  UserData: { name, email, token },
  GameData: { score, hit },
}) => ({ name, score, hit, email, token });

export default connect(mapStateToProps)(Feedback);
