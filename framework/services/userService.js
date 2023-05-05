import config, {headers} from "../config/config.js";
import axios from "axios";
import {token} from "../../specs/api.test";
let url = config.baseUrl;
let responce;




export const wtBearerResp = async ({ requestData , path }) => {
    responce = await axios.post(url + path, requestData, {
        headers: {...headers},
        validateStatus: false
    });
    return responce;
};
export const bearerGetResp = async ({path,token}) => {
    responce = await axios.get(url + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
        });
    return responce;
};

export const bearerDelResp = async ({path,token}) => {
    responce = await axios.delete(url + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return responce;
};