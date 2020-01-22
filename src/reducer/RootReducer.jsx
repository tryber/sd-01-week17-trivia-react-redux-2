import { combineReducers } from 'redux';
import ReducerHome from './ReducerHome';
import ReducerGame from './ReducerGame';

const RootReducer = combineReducers({
  ReducerHome,
  ReducerGame,
});

export default RootReducer;
