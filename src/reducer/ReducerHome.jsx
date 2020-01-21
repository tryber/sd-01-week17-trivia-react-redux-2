import { CHANGENAME, CHANGEEMAIL } from '../actions/ActionHome';

const initialState = {
  name: '',
  email: '',
  token: '',
}

const ReducerHome = (state = initialState, action) => {
  switch (action.type) {
    case CHANGENAME:
      return { ...state, name: action.name };
    case CHANGEEMAIL:
      return { ...state, email: action.email };
    default:
      return state;
  }
}

export default ReducerHome;
