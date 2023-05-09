import config, {HEADERS} from "../config/config.js";
import axios from "axios";
let url = config.BOOKSTORE_BASE_URL + config.BOOKS_OPS_PATH;
let requestData;
let responce;

export const getBook = async ({token,isbn}) => {
    url = `${url.slice(0, -1)}?ISBN=${isbn}`;
    responce = await axios.get(url, {
        headers: { ...HEADERS, Authorization: `Bearer ${token}` },
        validateStatus: false
    });
    return responce;
};
export const getBooks = async ({token}) => {
    responce = await axios.get(url, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return responce;
};
export const postBook = async ({token,isbn,uuid}) => {
    requestData = {
        "userId": `${uuid}`,
        "collectionOfIsbns": [
            {
                "isbn": `${isbn}`
            }
        ]
    };
    responce = await axios.post(url, requestData,{
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return responce;
};
export const  updateBook = async ({token, isbna, isbn, uuid}) =>{
    requestData = {
        "userId": `${uuid}`,
        "isbn": `${isbna}`
    }
    responce = await axios.put(url+ `/${isbn}`, requestData,{
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return responce;
};
export const deleteBook = async ({token, isbna, uuid}) =>{
    requestData = {
        "isbn": `${isbna}`,
        "userId": `${uuid}`
    }
    responce = await axios.delete(url, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
        , data: requestData});
    return responce;
}

