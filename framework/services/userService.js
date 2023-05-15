import config, {HEADERS} from "../config/config.js";
import axios from "axios";
let url = config.BOOKSTORE_BASE_URL;
let response;




export const wtBearerResp = async ({ requestData , path }) => {
    response = await axios.post(url + path, requestData, {
        headers: {...HEADERS},
        validateStatus: false
    });
    return response;
};
export const bearerGetResp = async ({path,token}) => {
    response = await axios.get(url + path, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
        });
    return response;
};

export const bearerDelResp = async ({path,token}) => {
    response = await axios.delete(url + path, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return response;
};