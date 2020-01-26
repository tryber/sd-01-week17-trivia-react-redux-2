import { CHANGE_SCORE, CHANGE_HIT, CLEAR_ALL } from '../actions/GameData';

const INITIAL_SETTINGS_STATE = {
  score: 0,
  hit: 0,
};

const GameData = (state = INITIAL_SETTINGS_STATE, action) => {
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
    case CLEAR_ALL:
      return {
        ...state,
        hit: 0,
        score: 0,
      };
    default:
      return state;
  }
};

export default GameData;
