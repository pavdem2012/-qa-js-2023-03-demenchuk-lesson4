import config, {headers} from "../config/config.js";
import axios from "axios";
let response;



export const wtBearerResp = async ({ requestData , path }) => {
    response = await axios.post(config.baseUrl + path, requestData, {
        headers: {...headers},
        validateStatus: false
    });
    return response;
};
export const bearerGetResp = async ({path , token}) => {
    response = await axios.get(config.baseUrl + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
        });
    return response;
};

export const bearerDelResp = async ({path , token}) => {
    response = await axios.delete(config.baseUrl + path, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return response;
};