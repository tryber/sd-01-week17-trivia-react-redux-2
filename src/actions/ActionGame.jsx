import TokenAPI from '../services/RequestAPI';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
export const RECEIVE_DATA_FAILURE = 'RECEIVE_DATA_FAILURE';

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

function fetchData() {
  return (dispatch) => {
    dispatch(requestData());

    return TokenAPI()
      .then(
        (data) => dispatch(receiveDataSuccess(data.results)),
        () => dispatch(receiveDataFailure()),
      );
  };
}

export default fetchData;
