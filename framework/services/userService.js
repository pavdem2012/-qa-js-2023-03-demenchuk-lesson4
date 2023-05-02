import config, {headers} from "../config/config.js";
import axios from "axios";
import {token} from "../../specs/api.test";
let url = config.baseUrl;
let responсe;




export const wtBearerResp = async ({ requestData , path }) => {
    responсe = await axios.post(url + path, requestData, {
        headers: {...headers},
        validateStatus: false
    });
    return responсe;
};
export const bearerGetResp = async ({path}) => {
    responсe = await axios.get(url + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
        });
    return responсe;
};

export const bearerDelResp = async ({path}) => {
    responсe = await axios.delete(url + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return responсe;
};