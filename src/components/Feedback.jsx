import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feedback extends Component() {
  constructor(props) {
    super(props);
    this.verifyScore = this.verifyScore.bind(this);
  }

  verifyScore() {
    if (this.props.numberOfHits >= 3) {
      return 'Mandou bem!'
    }
    return 'Podia ser melhor...'
  }

  render() {
    const { scorePoints, numberOfHits } = this.props;
    return (
      <div>
        {/* <Header /> */}
        <h3 data-testid="feedback-text">{scorePoints && numberOfHits && verifyScore()}</h3>
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
      </div>
    );
  }
}

const mapStateToProps = ({game: { score, numberOfHits }}) => ({ score, numberOfHits});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
