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
