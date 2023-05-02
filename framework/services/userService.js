import config, {headers} from "../config/config.js";
import axios from "axios";
import {token} from "../../specs/api.test";
let url = config.baseUrl;
let response;




export const wtBearerResp = async ({ requestData , path }) => {
    response = await axios.post(url + path, requestData, {
        headers: {...headers},
        validateStatus: false
    });
    return response;
};
export const bearerGetResp = async ({path}) => {
    response = await axios.get(url + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
        });
    return response;
};

export const bearerDelResp = async ({path}) => {
    response = await axios.delete(url + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return response;
};