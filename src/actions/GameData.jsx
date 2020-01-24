export const CHANGE_SCORE = 'CHANGE_SCORE';
export const CHANGE_HIT = 'CHANGE_HIT';

export const changePoints = (score) => ({
  type: CHANGE_SCORE,
  score,
});

export const changeHit = (hit) => ({
  type: CHANGE_HIT,
  hit,
});
