import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feedback extends Component() {
  constructor(props) {
    super(props);
    this.verifyScore = this.verifyScore.bind(this);
    this.updateRankingStorage = this.updateRankingStorage.bind(this);
  }

  verifyScore() {
    if (this.props.numberOfHits >= 3) {
      return 'Mandou bem!';
    }
    return 'Podia ser melhor...';
  }

  updateRankingStorage() {
    const { scorePoints, numberOfHits, name } = this.props;
    localStorage.setItem(`Ranking - ${name}`, [name, scorePoints, numberOfHits]);
  }

  render() {
    const { scorePoints, numberOfHits, name } = this.props;
    return (
      <div>
        {/* <Header /> */}
        <h3 data-testid="feedback-text">{scorePoints && numberOfHits && this.verifyScore()}</h3>
        <div>
          <p data-testid="feedback-total-question">Você acertou {numberOfHits} questões!</p>
          <p data-testid="feedback-total-scorePoints">Um total de {scorePoints} pontos</p>
        </div>
        <Link to="/Ranking">
          <button type="button">
            Ver Ranking
          </button>
        </Link>
        <Link to="/Home">
          <button type="button">
            Jogar Novamente
          </button>
        </Link>
        {name && scorePoints && numberOfHits && this.updateRankingStorage()}
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerHome: { name }, ReducerGame: { scorePoints, numberOfHits } }) => ({
  name, scorePoints, numberOfHits,
});

export default connect(mapStateToProps)(Feedback);
