import React from 'react';
import '../style/Ranking.css';

function Ranking() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  const playersScore = ranking.map((player) => player.score);
  const scoreRank = playersScore.sort((a, b) => b - a);
  const playersRank = scoreRank.map((score) => ranking.find((player) => player.score === score));
  const leaderboard = playersRank.map((player) => (
    <div className="ranking-player">
      <img src={player.picture} alt="Game Player" />
      <h4>{player.name}</h4>-
      <p>{player.score} Points</p>
    </div>
  ));

  return (
    <div className="ranking-content">
      <h1 className="title">Ranking</h1>
      {leaderboard}
    </div>
  );
}

export default Ranking;
