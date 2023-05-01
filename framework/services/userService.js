import config, {headers} from "../config/config.js";
import axios from "axios";
import * as url from "url";



export const wtBearerResp = async ({ requestData , path }) => {
    const response = await axios.post(config.baseUrl + path, requestData, {
        headers: {...config.header},
        validateStatus: false
    });
    return response;
};
export const bearerGetResp = async ({path , token}) => {
    const response = await axios.get(config.baseUrl + path, {
        headers: {...config.header, Authorization: `Bearer ${token}`},
        validateStatus: false
        });
    return response;
};

export const bearerDelResp = async ({path , token}) => {
    const response = await axios.delete(config.baseUrl + path, {
        headers: {...config.header, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return response;
};