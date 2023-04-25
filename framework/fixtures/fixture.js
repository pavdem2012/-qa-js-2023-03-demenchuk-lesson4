//import config from "../framework/config/config.js";
//import userCredentials from "../userCredentials.json";



// let requestData = {
//     userName: config.uniqueUsername,
//     password: config.password,
// };
import userCredentials from "../config/config";

export const generateRequestData = () => {
    const uniqueUsername = userCredentials.uniqueUsername;
    const password = userCredentials.password;
    return {
        userName: uniqueUsername,
        password: password,
    };
};