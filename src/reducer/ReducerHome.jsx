import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_TOKEN } from '../actions/ActionHome';

const initialState = {
  name: '',
  email: '',
  token: '',
};

const ReducerHome = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case CHANGE_EMAIL:
      return { ...state, email: action.email };
    case CHANGE_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default ReducerHome;
