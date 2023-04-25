
import userCredentials from './userCredentials.json';
export const generateRequestData = (id) => {
    const uniqueUsername = `testUser_${id}`;
    const password = userCredentials.password;
    return {
        userName: uniqueUsername,
        password: password,
    };
};