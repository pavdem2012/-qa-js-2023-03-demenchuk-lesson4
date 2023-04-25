
import userCredentials from './userCredentials.json';
export const generateRequestData = () => {
    const uniqueUsername = `testUser_${new Date().getTime()}`;
    const password = userCredentials.password;
    return {
        userName: uniqueUsername,
        password: password,
    };
};