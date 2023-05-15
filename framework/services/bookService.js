import config, {HEADERS} from "../config/config.js";
import axios from "axios";
let url = config.BOOKSTORE_BASE_URL + config.BOOKS_OPS_PATH;
let requestData;
let response;

export const getBook = async ({token,isbn}) => {
    url = `${url.slice(0, -1)}?ISBN=${isbn}`;
    response = await axios.get(url, {
        headers: { ...HEADERS, Authorization: `Bearer ${token}` },
        validateStatus: false
    });
    return response;
};
export const getBooks = async ({token}) => {
    response = await axios.get(url, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
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
    response = await axios.post(url, requestData,{
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });

    return response;
};
export const  updateBook = async ({token, isbna, isbn, uuid}) =>{
    requestData = {
        "userId": `${uuid}`,
        "isbn": `${isbna}`
    }
    response = await axios.put(url+ `/${isbn}`, requestData,{
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
    });
    return response;
};
export const deleteBook = async ({token, isbna, uuid}) =>{
    url = `${url.slice(0, -1)}`;
    requestData = {
        "isbn": `${isbna}`,
        "userId": `${uuid}`
    }
    response = await axios.delete(url, {
        headers: {...HEADERS, Authorization: `Bearer ${token}`},
        validateStatus: false
        , data: requestData});
    return response;
}

