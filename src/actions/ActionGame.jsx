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

const receiveDataFailure = (error) => ({
  type: RECEIVE_DATA_FAILURE,
  error,
});

function fetchData() {
  return (dispatch) => {
    dispatch(requestData());

    return TokenAPI()
      .then(
        (data) => dispatch(receiveDataSuccess(data.results)),
        (error) => dispatch(receiveDataFailure(error.message)),
      );
  };
}

export default fetchData;
