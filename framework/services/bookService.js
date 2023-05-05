import config, {headers} from "../config/config.js";
import axios from "axios";
//import {ISBN1,ISBN0, UUID} from "../../specs/api.test";
let url = config.baseUrl + config.booksOpsPath;
let requestData;
let responce;

export const bookOpsResp = async ({token,method,uuid,isbn,isbna}) => {
    if(method === 'get'){
    responce = await axios[method](url, {
        headers: {...headers, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return responce;
    }if(method === 'post'){
        requestData = {
            "userId": `${uuid}`,
            "collectionOfIsbns": [
                {
                    "isbn": `${isbn}`
                }
            ]
        };
        responce = await axios[method](url, requestData,{
            headers: {...headers, Authorization: `Bearer ${token}`},
            validateStatus: false
        });
    return responce;
    }if(method === 'put'){
        requestData = {
            "userId": `${uuid}`,
            "isbn": `${isbna}`
        }
        responce = await axios[method](url+ `/${isbn}`, requestData,{
            headers: {...headers, Authorization: `Bearer ${token}`},
            validateStatus: false
        });
    return responce;
    }if(method === 'delete'){
        requestData = {
            "isbn": `${isbna}`,
            "userId": `${uuid}`
        }
        responce = await axios[method](url, {
            headers: {...headers, Authorization: `Bearer ${token}`},
            validateStatus: false
            , data: requestData});
        return responce;
    }
};



export const bookGetRespISBN = async ({token,isbn}) => {
    url = `${url.slice(0, -1)}?ISBN=${isbn}`;
    responce = await axios.get(url, {
        headers: { ...headers, Authorization: `Bearer ${token}` },
        validateStatus: false
    });
    return responce;
};
// export const bookGetResp = async ({token}) => {
//     responce = await axios.get(url, {
//         headers: {...headers, Authorization: `Bearer ${token}`},
//         validateStatus: false
//     });
//     return responce;
// };
// export const bookPostResp = async ({token}) => {
//     requestData = {
//         "userId": `${UUID}`,
//         "collectionOfIsbns": [
//             {
//                 "isbn": `${ISBN0}`
//             }
//         ]
//     };
//     responce = await axios.post(url, requestData,{
//         headers: {...headers, Authorization: `Bearer ${token}`},
//         validateStatus: false
//     });
//
//     return responce;
// };
// export const  bookPutResp = async ({token}) =>{
//     requestData = {
//         "userId": `${UUID}`,
//         "isbn": `${ISBN1}`
//     }
//     responce = await axios.put(url+ `/${ISBN0}`, requestData,{
//         headers: {...headers, Authorization: `Bearer ${token}`},
//         validateStatus: false
//     });
//     return responce;
// };
// export const booksDelResp = async ({token}) =>{
//     requestData = {
//         "isbn": `${ISBN1}`,
//         "userId": `${UUID}`
//     }
//     responce = await axios.delete(url, {
//         headers: {...headers, Authorization: `Bearer ${token}`},
//         validateStatus: false
//         , data: requestData});
//     return responce;
// }

