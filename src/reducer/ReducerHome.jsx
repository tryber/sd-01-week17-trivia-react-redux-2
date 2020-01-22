import { CHANGENAME, CHANGEEMAIL, CHANGETOKEN } from '../actions/ActionHome';

const initialState = {
  name: '',
  email: '',
  token: '',
};

const ReducerHome = (state = initialState, action) => {
  switch (action.type) {
    case CHANGENAME:
      return { ...state, name: action.name };
    case CHANGEEMAIL:
      return { ...state, email: action.email };
    case CHANGETOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default ReducerHome;
