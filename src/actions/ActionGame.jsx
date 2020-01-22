import { DatabaseAPI } from '../services/RequestAPI';

export const REQUESTTOKEN = 'REQUESTTOKEN';
export const RECEIVETOKENSUCESS = 'RECEIVETOKENSUCESS';
export const RECEIVETOKENFALIURE = 'RECEIVETOKENFALIURE';

const requestToken = () => ({
  type: REQUESTTOKEN,
});

const receiveTokenSucess = (data) => ({
  type: RECEIVETOKENSUCESS,
  data,
});

const receiveTokenFailure = (error) => ({
  type: RECEIVETOKENFALIURE,
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
