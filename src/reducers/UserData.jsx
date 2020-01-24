import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_TOKEN } from '../actions/UserData';

const initialState = {
  name: '',
  email: '',
  token: '',
};

const UserData = (state = initialState, action) => {
  console.log(state)
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

export default UserData;
