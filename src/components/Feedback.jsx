import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.verifyScore = this.verifyScore.bind(this);
    this.updateRankingStorage = this.updateRankingStorage.bind(this);
  }

  verifyScore() {
    if (this.props.hit >= 3) return 'Mandou bem!';
    return 'Podia ser melhor...';
  }

  updateRankingStorage() {
    const { score, hit, name } = this.props;
    const rankData = [name, score, hit];
    localStorage.setItem(`Ranking - ${name}`, JSON.stringify(rankData));
  }

  render() {
    const { score, hit, name } = this.props;
    return (
      <div>
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
        <Link to="/home">
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
  score: PropTypes.number.isRequired,
  hit: PropTypes.number.isRequired,
};

const mapStateToProps = ({
  UserData: { name },
  GameData: { score, hit },
}) => ({
  name, score, hit,
});

export default connect(mapStateToProps)(Feedback);
