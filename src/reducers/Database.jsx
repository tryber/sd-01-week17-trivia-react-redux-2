import {
  REQUEST_DATA,
  RECEIVE_DATA_SUCCESS,
  RECEIVE_DATA_FAILURE,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES_SUCCESS,
  RECEIVE_CATEGORIES_FAILURE,
} from '../actions/Database';


const initialState = {
  isFetching: false,
  data: null,
  errorData: false,
  categories: null,
  errorCategories: false,
};

const ReducerData = (state, action) => {
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
        errorData: true,
      };
    default:
      return null;
  }
};

const ReducerCategories = (state, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: action.categories,
      };
    case RECEIVE_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorCategories: true,
      };
    default:
      return null;
  }
};

const Database = (state = initialState, action) => {
  console.log(state);
  const data = ReducerData(state, action);
  const categories = ReducerCategories(state, action);
  if (data) return data;
  else if (categories) return categories;
  return state;
};

export default Database;
