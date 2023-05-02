import config, {headers} from "../config/config.js";
import axios from "axios";
import {ISBN1,ISBN0, UUID} from "../../specs/api.test";
let url = config.baseUrl + config.booksOpsPath;
let requestData;
let response;

export const bookGetResp = async ({token}) => {
    response = await axios.get(url, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
};


export const bookGetRespISBN = async ({token}) => {
    url = new URL(url);
    url.searchParams.set("ISBN", ISBN1)
    response = await axios.get(url, {
        headers: { ...headers, Authorization: `Bearer ${token}` },
        validateStatus: false
    });
    return response.data;
};

export const bookPostResp = async ({token}) => {
    requestData = {
        "userId": `${UUID}`,
        "collectionOfIsbns": [
            {
                "isbn": `${ISBN0}`
            }
        ]
    };
    response = await axios.post(url, requestData,{
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
};
export const  bookPutResp = async ({token}) =>{
    requestData = {
        "userId": `${UUID}`,
        "isbn": `${ISBN1}`
    }
    response = await axios.put(url+ `/${ISBN0}`, requestData,{
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
};
export const booksDelResp = async ({token}) =>{
    requestData = {
        "isbn": `${ISBN1}`,
        "userId": `${UUID}`
    }
    response = await axios.delete(url, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
        , data: requestData});
    return response;
}

