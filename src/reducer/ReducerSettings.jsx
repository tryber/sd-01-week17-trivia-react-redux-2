import { CHANGE_CATEGORY, CHANGE_TYPE, CHANGE_DIFFICULTY } from '../actions/ActionSettings';

const INITIAL_SETTINGS_STATE = {
  category: 'any',
  type: 'any',
  difficulty: 'any',
};

const ReducerSettings = (state = INITIAL_SETTINGS_STATE, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.questionCategory,
    };
    case CHANGE_TYPE:
      return {
        ...state,
        type: action.questionType,
    };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.questionDifficulty,
    };
    default:
      return state;
  }
};

export default ReducerSettings;
