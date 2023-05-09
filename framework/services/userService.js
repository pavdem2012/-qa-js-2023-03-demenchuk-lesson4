import config, {HEADERS} from "../config/config.js";
import axios from "axios";
import {token} from "../../specs/api.test";
let url = config.BOOKSTORE_BASE_URL;
let responce;




export const wtBearerResp = async ({ requestData , path }) => {
    responce = await axios.post(url + path, requestData, {
        headers: {...HEADERS},
        validateStatus: false
    });
    return responce;
};
export const bearerGetResp = async ({path,token}) => {
    responce = await axios.get(url + path, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
        });
    return responce;
};

export const bearerDelResp = async ({path,token}) => {
    responce = await axios.delete(url + path, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return responce;
};