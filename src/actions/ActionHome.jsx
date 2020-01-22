import { APIData } from '../services/RequestAPI';

export const CHANGENAME = 'CHANGENAME';
export const CHANGEEMAIL = 'CHANGEEMAIL';
export const CHANGETOKEN = 'CHANGETOKEN';

export const changeName = (name) => ({
  type: CHANGENAME,
  name,
});

export const changeEmail = (email) => ({
  type: CHANGEEMAIL,
  email,
});

export const changeToken = (token) => ({
  type: CHANGETOKEN,
  token,
});


// export const REQUESTTOKEN = 'REQUESTTOKEN';
// export const RECEIVETOKENSUCESS = 'RECEIVETOKENSUCESS';
// export const RECEIVETOKENFALIURE = 'RECEIVETOKENFALIURE';

// const requestToken = () => ({
//   type: REQUESTTOKEN,
// });

// const receiveTokenSucess = (data) => ({
//   type: RECEIVETOKENSUCESS,
//   data,
// });

// const receiveTokenFailure = (error) => ({
//   type: RECEIVETOKENFALIURE,
//   error,
// });

// function fetchData() {
//   return (dispatch) => {
//     dispatch(requestToken());
//     return APIData()
//       .then(
//         (data) => dispatch(receiveTokenSucess(data)),
//         (error) => dispatch(receiveTokenFailure(error.message)),
//       );
//   };
// }

// export default fetchData;
