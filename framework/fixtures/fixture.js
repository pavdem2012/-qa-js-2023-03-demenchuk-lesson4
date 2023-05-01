
import userCredentials from './userCredentials.json';
const uniqueUsername = `testUser_${new Date().getTime()}`;
export const generateCorrectRequestData = () => {

    const password = userCredentials.password;
    return {
        userName: uniqueUsername,
        password: password,
    };
};
export const generateBadPassRequestData = () => {

    const password = userCredentials.invalidPassword;
    return {
        userName: uniqueUsername,
        password: password,
    };
};
export const generateNullBodyRequestData = () => {

    const password = userCredentials.invalidPassword;
    return {
        userName: null,
        password: null,
    };
};