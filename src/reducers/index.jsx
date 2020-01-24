import { combineReducers } from 'redux';
import UserData from './UserData';
import Database from './Database';
import DataFilter from './DataFilter';
import GameData from './GameData';

const RootReducer = combineReducers({
  UserData,
  Database,
  DataFilter,
  GameData,
});

export default RootReducer;
