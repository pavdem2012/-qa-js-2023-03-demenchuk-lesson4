import config from "../config/config.js";
import axios from "axios";
import {ISBN1,ISBN0, UUID} from "../../specs/api.test";
let url;
let requestData;
let response;

export const bookGetResp = async ({path , token}) => {
    let url = config.baseUrl + path;
    response = await axios.get(url, {
        headers: {...config.header, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
};


export const bookGetRespISBN = async ({path , token}) => {
    url = new URL(config.baseUrl + path);
    url.searchParams.set("ISBN", ISBN1)
    response = await axios.get(url, {
        headers: { ...config.header, Authorization: `Bearer ${token}` },
        validateStatus: false
    });
    return response.data;
};

export const bookPostResp = async ({path , token}) => {
    url = config.baseUrl + path;
    requestData = {
        "userId": `${UUID}`,
        "collectionOfIsbns": [
            {
                "isbn": `${ISBN0}`
            }
        ]
    };
    response = await axios.post(url, requestData,{
        headers: {...config.header, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
};
export const  bookPutResp = async ({path,token}) =>{
    url = config.baseUrl + path + `/${ISBN0}`;
    requestData = {
        "userId": `${UUID}`,
        "isbn": `${ISBN1}`
    }
    response = await axios.put(url, requestData,{
        headers: {...config.header, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
};
export const booksDelResp = async ({path,token}) =>{
    url = config.baseUrl + path;
    requestData = {
        "isbn": `${ISBN1}`,
        "userId": `${UUID}`
    }
    response = await axios.delete(url, {
        headers: {...config.header, Authorization: `Bearer ${token}`},
        validateStatus: false
        , data: requestData});
    return response;
}

