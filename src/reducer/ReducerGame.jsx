import { REQUEST_TOKEN, RECEIVE_TOKEN_SUCCESS, RECEIVE_TOKEN_FALIURE } from '../actions/ActionGame';


const initialState = {
  isFetching: false,
  data: [],
  error: '',
};

const ReducerGame = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case RECEIVE_TOKEN_FALIURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default ReducerGame;
