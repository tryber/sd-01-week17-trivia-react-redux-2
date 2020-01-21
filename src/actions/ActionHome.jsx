export const CHANGENAME = 'CHANGENAME';
export const CHANGEEMAIL = 'CHANGEEMAIL';

export const changeName = (name) => ({
    type: CHANGENAME,
    name,
});

export const changeEmail = (email) => ({
    type: CHANGEEMAIL,
    email,
});
