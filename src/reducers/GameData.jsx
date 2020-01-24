import { CHANGE_SCORE, CHANGE_HIT } from '../actions/GameData';

const INITIAL_SETTINGS_STATE = {
  score: 0,
  hit: 0,
};

const GameData = (state = INITIAL_SETTINGS_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: state.score + action.score,
      };
    case CHANGE_HIT:
      return {
        ...state,
        hit: state.hit + action.hit,
      };
    default:
      return state;
  }
};

export default GameData;
