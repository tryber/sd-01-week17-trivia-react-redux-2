import { combineReducers } from 'redux';
import ReducerHome from './ReducerHome';
import ReducerGame from './ReducerGame';
import ReducerSettings from './ReducerSettings';

const RootReducer = combineReducers({
  ReducerHome,
  ReducerGame,
  ReducerSettings,
});

export default RootReducer;
