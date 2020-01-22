import DatabaseAPI from '../services/RequestAPI';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_TOKEN_SUCCESS = 'RECEIVE_TOKEN_SUCESS';
export const RECEIVE_TOKEN_FALIURE = 'RECEIVE_TOKEN_FALIURE';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const receiveTokenSucess = (data) => ({
  type: RECEIVE_TOKEN_SUCCESS,
  data,
});

const receiveTokenFailure = (error) => ({
  type: RECEIVE_TOKEN_FALIURE,
  error,
});

function fetchData() {
  return (dispatch) => {
    dispatch(requestToken());
    return DatabaseAPI()
      .then(
        (data) => dispatch(receiveTokenSucess(data)),
        (error) => dispatch(receiveTokenFailure(error.message)),
      );
  };
}

export default fetchData;
