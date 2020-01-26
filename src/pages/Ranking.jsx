import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Ranking.css';

function Ranking() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  const playersScore = ranking.map((player) => player.score);
  const scoreRank = playersScore.sort((a, b) => b - a);
  const playersRank = scoreRank.map((score) => ranking.find((player) => player.score === score));
  const leaderboard = playersRank.map((player, position) => (
    <div className="ranking-player" key={`${position}- ${player}`}>
      <img data-testid={`profile-picture-${position}`} src={player.picture} alt="Game Player" />
      <h4 data-testid={`${player.name}-${position}`}>{player.name}</h4>-
      <p>{player.score} Points</p>
    </div>
  ));

  return (
    <div className="ranking-content">
      <h1 className="title">Ranking</h1>
      {leaderboard}
      <Link to="/home">
        <button type="button">Play Again</button>
      </Link>
    </div>
  );
}

export default Ranking;
