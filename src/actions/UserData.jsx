export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_TOKEN = 'CHANGE_TOKEN';

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name,
});

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const changeToken = (token) => ({
  type: CHANGE_TOKEN,
  token,
});
