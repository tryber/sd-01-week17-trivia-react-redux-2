import { REQUESTTOKEN, RECEIVETOKENSUCESS, RECEIVETOKENFALIURE } from '../actions/ActionGame';


const initialState = {
  isFetching: false,
  data: [],
  error: '',
};

const ReducerGame = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTTOKEN:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVETOKENSUCESS:
      return {
        ...state,
        isFetching: 'andy',
        data: action.data,
      };
    case RECEIVETOKENFALIURE:
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


