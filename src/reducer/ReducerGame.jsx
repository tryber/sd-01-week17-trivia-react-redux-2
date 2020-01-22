import {
  REQUEST_DATA,
  RECEIVE_DATA_SUCCESS,
  RECEIVE_DATA_FAILURE,
} from '../actions/ActionGame';


const initialState = {
  isFetching: false,
  data: '',
  error: '',
};

const ReducerGame = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case RECEIVE_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default ReducerGame;
