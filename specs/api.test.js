import config from "../framework/config/config.js";
import {
    generateBadPassRequestData,
    generateCorrectRequestData,
    generateNullBodyRequestData
} from "../framework/fixtures/fixture.js"
import {wtBearerResp, bearerGetResp, bearerDelResp} from "../framework/services/userService";
import {bookGetResp, bookGetRespISBN, bookPostResp, bookPutResp, booksDelResp} from "../framework/services/bookService";


let path = '';
export let ISBN1 = '';
export let ISBN0 = '';
export let UUID;
let token = '';
let requestData = generateCorrectRequestData();
let badRequestData;
//Тест для проверки все ли работает
// test('should return correct data from API', async () => {
//     console.log(config.baseUrl1)
//     const response = await axios.get(config.baseUrl1+'/todos/1');
//     console.log(response);
//     expect(response.data.userId).toEqual(1);
//     expect(response.data.id).toEqual(1);
//     expect(response.data.title).toEqual('delectus aut autem');
//     expect(response.data.completed).toEqual(false);
// });


/**
 * Тесты на создание пользователя и получения информации о нем
 */

describe('API tests create user', () => {
    /**
     * Проверка "Создание пользователя c ошибкой, пароль не подходит"
     */

    test('error message when sending empty password', async () => {
        badRequestData = generateBadPassRequestData();
        path = config.userAccPath;
        let response = await wtBearerResp({requestData: badRequestData,path});
        expect(response.status).toEqual(400);
        expect(response.statusText).toBe('Bad Request')
        expect(response.data.code).toBe('1300');
        expect(response.data.message).toBe('Passwords must have at least one non alphanumeric character, one digit (\'0\'-\'9\'), one uppercase (\'A\'-\'Z\'), one lowercase (\'a\'-\'z\'), one special character and Password must be eight characters or longer.');
    });
    /**
     * Проверка "Создание пользователя успешно"
     */
    test('should create a new user', async () => {
        path = config.userAccPath;
        let response = await wtBearerResp({requestData,path});
        UUID = response.data.userID;
        expect(response.status).toEqual(201);
        expect(response.statusText).toBe('Created')
        expect(response.data.userID).toBeDefined();
        expect(response.data.username).toEqual(badRequestData.userName);
        expect(response.data.books).toBeDefined();
        expect(Array.isArray(response.data.books)).toBe(true);
    });
    /**
     * Проверка "Создание пользователя c ошибкой, логин уже используется"
     */

    test('should return error message when sending existing userName', async () => {
        let response = await wtBearerResp({requestData,path});
        expect(response.status).toBe(406);
        expect(response.statusText).toBe('Not Acceptable')
        expect(response.data.code).toBe('1204');
        expect(response.data.message).toBe('User exists!');
    });
});

/**
 * Тесты на получения токена
 */

describe('API tests generate token', () => {

    /**
     * Проверка "Генерация токена c ошибкой"
     */
    test('returns an error message when body are not provided', async () => {
        badRequestData = generateNullBodyRequestData();
        path = config.genAccTokenPath;
        let response = await wtBearerResp({requestData: badRequestData, path});
        expect(response.status).toBe(400);
        expect(response.statusText).toBe('Bad Request')
        expect(response.data.code).toBe('1200');
        expect(response.data.message).toBe('UserName and Password required.');

    });
    /**
     * Проверка "Генерация токена успешно"
     */
    test('Should generate token for valid user', async () => {
        path = config.genAccTokenPath;
        let response = await wtBearerResp({requestData, path});
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK')
        expect(response.data.status).toBe('Success');
        expect(response.data.token).toBeTruthy();
        token = response.data.token;
    });

});
    /**
     * Тесты на операции с книгами
     */
describe("API tests with books",()=>{
    /**
     * Проверка получения списка всех книг
     */
     test('should get a book list', async () =>{
        let responce = await  bookGetResp({token});
        let books = responce.data.books;
        ISBN1 = responce.data.books[1].isbn;
        ISBN0 = responce.data.books[0].isbn;
        expect(responce.status).toBe(200)
        expect(responce.statusText).toBe('OK')
        books.forEach(book => {
            expect(book.isbn).toEqual(expect.any(String));
            expect(book.title).toEqual(expect.any(String));
            expect(book.subTitle).toEqual(expect.any(String));
            expect(book.author).toEqual(expect.any(String));
            expect(book.publish_date).toMatch(
                /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d{3}Z$/
            );
            expect(book.publisher).toEqual(expect.any(String));
            expect(book.pages).toEqual(expect.any(Number));
            expect(book.description).toEqual(expect.any(String));
            expect(book.website).toEqual(expect.any(String));
        });
    })
    /**
     * Проверка "Создание книги" - на самом деле эта ручка добавляет книги в "избранное пользователя"
     */
    test ('should can post book',async ()=>{
        let responce = await bookPostResp({token});
        expect(responce.status).toBe(201)
        expect(responce.statusText).toBe('Created')
        expect(responce.data.books[0].isbn).toEqual(ISBN0);
    });

    /**
     * Проверка обновления книги
     */
    test ('should can put book', async () =>{
        let responce = await bookPutResp({token});
        expect(responce.status).toBe(200)
        expect(responce.statusText).toBe('OK')
        expect(responce.data.userId).toEqual(UUID);
        expect(responce.data.username).toEqual(requestData.userName);
        expect(responce.data.books[0].isbn).toEqual(ISBN1);
        expect(responce.data.books[0].title).toEqual(expect.any(String));
        expect(responce.data.books[0].subTitle).toEqual(expect.any(String));
        expect(responce.data.books[0].author).toEqual(expect.any(String));
        expect(responce.data.books[0].publish_date).toMatch(
            /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d{3}Z$/
        );
        expect(responce.data.books[0].publisher).toEqual(expect.any(String));
        expect(responce.data.books[0].pages).toEqual(expect.any(Number));
        expect(responce.data.books[0].description).toEqual(expect.any(String));
        expect(responce.data.books[0].website).toEqual(expect.any(String));
    });
    /**
     * Проверка Получения информации о книге
     */
    /*С этой ручкой необходима помощь - ни при каком раскладе она не отдает одну книгу - только список
    * могу конечно предложить костыль по вытягиванию нужной книги по ISBN? но это точно не метод*/
    test('shoud can get book by isbn', async ()=>{
        let responce = await  bookGetRespISBN({token});

        //console.log('shoud can get book by isbn: ',responce)
    })
    /**
     * Проверка удаления книги
     */
    test ('should can delete book', async () =>{
        let response = await  booksDelResp({token});
        expect(response.status).toBe(401);
        expect(response.statusText).toBe('Unauthorized')
        expect(response.data.code).toBe('1207');
        expect(response.data.message).toBe('User Id not correct!');
    })
})
    /**
     * Очистка тестового контура
     */
describe('API tests clearing user data', () => {
        /**
         * Проверка авторизован ли пользователь
         */
    test('is the user authorized', async () => {
        path = config.authorizedUser;
        let response = await wtBearerResp({requestData, path});
        expect(response.status).toEqual(200);
        expect(response.statusText).toBe('OK')
        expect(response.data).toEqual(true);

    });
    /**
     * Получение информации о пользователе
     */
    /* Предполагаю что данная функция в сваггер запрограммирована неверно {UUID} передается как строка, а не как значениe*/
    test('should get a info about user by UUID', async () => {
        path = config.userAccPath + `/${UUID}`;
        let response = await bearerGetResp({path, token});
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK')
        expect(response.data.userId).toEqual(UUID);
        expect(response.data.username).toEqual(requestData.userName);
        expect(response.data.books).toBeDefined();
    });


    /**
     * Очистка пользовательских данных
     */
    /* Предполагаю что данная функция в сваггер запрограммирована неверно {UUID} передается как строка, а не как значениe*/
    test('clearing user data', async () => {
        let response = await bearerDelResp({path, token});
        expect(response.status).toBe(204);
        expect(response.statusText).toBe('No Content')
    });
    /**
     * Проверка удален ли пользователь
     */
    test('delete check user by UUID', async () => {
        let response = await bearerGetResp({path, token});
        expect(response.status).toBe(401);
        expect(response.statusText).toBe('Unauthorized')
        expect(response.data.code).toBe('1207');
        expect(response.data.message).toBe('User not found!');
    });
});



