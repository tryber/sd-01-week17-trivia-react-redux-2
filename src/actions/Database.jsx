import { DatabaseAPI, CategoriesAPI } from '../services/RequestAPI';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
export const RECEIVE_DATA_FAILURE = 'RECEIVE_DATA_FAILURE';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES_SUCCESS = 'RECEIVE_CATEGORIES_SUCCESS';
export const RECEIVE_CATEGORIES_FAILURE = 'RECEIVE_CATEGORIES_FAILURE';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveDataSuccess = (data) => ({
  type: RECEIVE_DATA_SUCCESS,
  data,
});

const receiveDataFailure = () => ({
  type: RECEIVE_DATA_FAILURE,
});

const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
});

const receiveCategoriesSucces = (categories) => ({
  type: RECEIVE_CATEGORIES_SUCCESS,
  categories,
});

const receiveCategoriesFailure = () => ({
  type: RECEIVE_CATEGORIES_FAILURE,
});

export function fetchData(category, type, difficulty) {
  return (dispatch) => {
    dispatch(requestData());

    return DatabaseAPI(category, type, difficulty)
      .then(
        (data) => dispatch(receiveDataSuccess(data.results)),
        () => dispatch(receiveDataFailure()),
      );
  };
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories());

    return CategoriesAPI()
      .then(
        (categories) => dispatch(receiveCategoriesSucces(categories)),
        () => dispatch(receiveCategoriesFailure()),
      );
  };
}
