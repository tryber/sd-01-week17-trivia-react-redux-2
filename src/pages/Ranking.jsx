import React from 'react';
import '../style/Ranking.css';
import { Link } from 'react-router-dom';

function Ranking() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  const playersScore = ranking.map((player) => player.score);
  const scoreRank = playersScore.sort((a, b) => b - a);
  const playersRank = scoreRank.map((score) => ranking.find((player) => player.score === score));
  const leaderboard = playersRank.map((player, position) => (
    <div className="ranking-player">
      <img data-testid={`profile-picture-${position}`} src={player.picture} alt="Game Player" />
      <h4 data-testid={`${player.name}-${position}`}>{player.name}</h4>-
      <p>{player.score} Points</p>
    </div>
  ));

  return (
    <div className="ranking-content">
      <h1 className="title">Ranking</h1>
      {leaderboard}
      <Link to="/feedback">
        <button type="button">Return</button>
      </Link>
    </div>
  );
}

export default Ranking;
