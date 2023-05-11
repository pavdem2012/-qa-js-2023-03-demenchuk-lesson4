import config from "../framework/config/config.js";
import {Severity, Status} from 'jest-allure/dist/Reporter';

import {
    generateBadPassRequestData,
    generateCorrectRequestData,
    generateNullBodyRequestData
} from "../framework/fixtures/fixture.js"
import {
    wtBearerResp, 
    bearerGetResp, 
    bearerDelResp
} from "../framework/services/userService";
import {
    getBooks,
    getBook,
    postBook,
    updateBook,
    deleteBook
} from "../framework/services/bookService";
//import 'jest-extended';
import expect from "expect";

//import { reporters } from "../jest.config.js";

let ISBN1;
let ISBN0;
let UUID;
let token;
let responce;
let validRequestData = generateCorrectRequestData();


//Тест для проверки все ли работает
// test('should return correct data from API', async () => {
//     console.log(config.baseUrl1)
//     const response = await axios.get(config.TYPICODE_BASE_URL+'/todos/1');
//     console.log(response);
//     expect(response.data.userId).toEqual(1);
//     expect(response.data.id).toEqual(1);
//     expect(response.data.title).toEqual('delectus aut autem');
//     expect(response.data.completed).toEqual(false);
// });

beforeEach(() =>{
    reporter.addEnvironment('URL: ',`${config.BOOKSTORE_BASE_URL}`)
})
/**
 * Тесты на создание пользователя и получения информации о нем
 */

describe('API tests create user', () => {
    /**
     * Проверка "Создание пользователя c ошибкой, пароль не подходит"
     */

    test('error message when sending  no valid password', async () => {
        reporter.epic('Создание пользователя POST/Account/v1/User')
                .feature('возврат 400 статус-кода при отправке не правильного пароля')
                .description('возврат 400 статус-кода при отправке не правильного пароля')
                .startStep(`register as ${JSON.stringify(generateBadPassRequestData())}`)
        responce = await wtBearerResp({requestData: generateBadPassRequestData(), path:config.USER_ACC_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the responce')
                .startStep('Checking the returned status code')
        expect(responce.status).toBe(400);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(responce.statusText).toBe('Bad Request')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned responce body code')
        expect(responce.data.code).toBe('1300');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned responce body message')
        expect(responce.data.message).toBe('Passwords must have at least one non alphanumeric character, one digit (\'0\'-\'9\'), one uppercase (\'A\'-\'Z\'), one lowercase (\'a\'-\'z\'), one special character and Password must be eight characters or longer.');
        reporter.endStep(Status.Passed)
                .endStep(Status.Passed)


    });
    /**
     * Проверка "Создание пользователя успешно"
     */
    test('should create a new user', async () => {
        reporter.epic('Создание пользователя POST/Account/v1/User')
                .feature('возврат 201 статус-кода и валидного тела ответа при отправке валидного запроса')
                .description('возврат 201 статус-кода и валидного тела ответа при отправке валидного запроса')
                .severity(Severity.Normal)
        reporter.startStep(`register as ${JSON.stringify(generateCorrectRequestData())}`)
        responce = await wtBearerResp({requestData:validRequestData,  path:config.USER_ACC_PATH});
        UUID = responce.data.userID;
        reporter.endStep(Status.Passed)
                .startStep('Checking the responce')
                .startStep('Checking the returned status code')
        expect(responce.status).toEqual(201);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(responce.statusText).toBe('Created')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned userID toBeDefined')
        expect(responce.data.userID).toBeDefined();
        reporter.endStep(Status.Passed)
                .startStep(`Checking the returned username toEqual ${validRequestData.userName}`)
        expect(responce.data.username).toEqual(validRequestData.userName);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned books toBeDefined')
        expect(responce.data.books).toBeDefined();
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned books toBeArray')
        expect(Array.isArray(responce.data.books)).toBe(true);
        reporter.endStep(Status.Passed)
                .endStep(Status.Passed)
    });
    /**
     * Проверка "Создание пользователя c ошибкой, логин уже используется"
     */

    test('should return error message when sending existing userName', async () => {
        reporter.epic('Создание пользователя POST/Account/v1/User')
                .feature('возврат 406 статус-кода и валидного тела ответа при отправке повторного валидного запроса')
                .description('возврат 406 статус-кода и валидного тела ответа при отправке повторного валидного запроса')
                .startStep(`register as ${JSON.stringify(generateCorrectRequestData())}`)
        responce = await wtBearerResp({requestData:validRequestData,  path:config.USER_ACC_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the responce')
                .startStep('Checking the returned status code')
        expect(responce.status).toBe(406);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(responce.statusText).toBe('Not Acceptable')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned responce body code')
        expect(responce.data.code).toBe('1204');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned responce body message')
        expect(responce.data.message).toBe('User exists!');
        reporter.endStep(Status.Passed)
                .endStep(Status.Passed)
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
        reporter.epic('Генерация токена POST/Account/v1/GenerateToken')
                .feature('возврат 400 статус-кода и валидного тела ответа при отправке пустых полей в теле запроса')
                .description('возврат 400 статус-кода и валидного тела ответа при отправке  пустых полей в теле запроса')
                .startStep('send a request')
        responce = await wtBearerResp({requestData: generateNullBodyRequestData(), path:config.GEN_ACC_TOKEN_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the responce')
                .startStep('Checking the returned status code')
        expect(responce.status).toBe(400);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(responce.statusText).toBe('Bad Request')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned responce body code')
        expect(responce.data.code).toBe('1200');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned responce body message')
        expect(responce.data.message).toBe('UserName and Password required.');
        reporter.endStep(Status.Passed)
                .endStep(Status.Passed)
    });
    /**
     * Проверка "Генерация токена успешно"
     */
    test('Should generate token for valid user', async () => {
        reporter.epic('Генерация токена POST/Account/v1/GenerateToken')
                .feature('возврат 200 статус-кода и валидного тела ответа при отправке валидного запроса')
                .description('возврат 200 статус-кода и валидного тела ответа при отправке валидного запроса')
                .startStep('send a request')
        responce = await wtBearerResp({requestData:validRequestData, path:config.GEN_ACC_TOKEN_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the responce')
                .startStep('Checking the returned status code')
        expect(responce.status).toBe(200);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(responce.statusText).toBe('OK')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned data status')
        expect(responce.data.status).toBe('Success');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned data token toBeTruthy')
        expect(responce.data.token).toBeTruthy();
        reporter.endStep(Status.Passed)
                .endStep(Status.Passed)
        token = responce.data.token;
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
         responce = await  getBooks({ token:token });
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
        responce = await postBook({ token:token,isbn:ISBN0,uuid:UUID });
        expect(responce.status).toBe(201)
        expect(responce.statusText).toBe('Created')
        expect(responce.data.books[0].isbn).toEqual(ISBN0);
    });
    /**
     * Проверка "Создание книги" - получение 400 статус-кода при повторном добавлении книги
     */
    /*Ошибка в документации - ожидаемый statusText = Error*/
    test ('should can post book with 400 status code',async ()=>{
        responce = await postBook({ token:token,isbn:ISBN0,uuid:UUID });
        expect(responce.status).toBe(400)
        expect(responce.statusText).toBe('Bad Request')
        expect(responce.data.code).toBe('1210');
        expect(responce.data.message).toBe('ISBN already present in the User\'s Collection!');
    });

    /**
     * Проверка "Создание книги" - получение 401 статус-кода для неавторизованного пользователя при добавлении книги
     */
    test ('should can post book with 401 status code',async ()=>{
        responce = await postBook({ isbn:ISBN0,uuid:UUID });
        expect(responce.status).toBe(401)
        expect(responce.statusText).toBe('Unauthorized')
        expect(responce.data.code).toBe('1200');
        expect(responce.data.message).toBe('User not authorized!');
    });

    /**
     * Проверка обновления книги
     */
    test ('should can put book', async () =>{
        responce = await updateBook({ token:token, isbna:ISBN1, isbn:ISBN0, uuid:UUID });
        expect(responce.status).toBe(200)
        expect(responce.statusText).toBe('OK')
        expect(responce.data.userId).toEqual(UUID);
        expect(responce.data.username).toEqual(validRequestData.userName);
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
     * Проверка "обновления книги" - получение 400 статус-кода при повторном добавлении книги
     */
    /*Ошибка в документации - ожидаемый statusText = Error*/
    test ('should can put book with 400 status code',async ()=>{
        responce = await updateBook({ token:token, isbna:ISBN1, isbn:ISBN1, uuid:UUID });
        expect(responce.status).toBe(400)
        expect(responce.statusText).toBe('Bad Request')
        expect(responce.data.code).toBe('1206');
        expect(responce.data.message).toBe('ISBN supplied is not available in User\'s Collection!');
    });

    /**
     * Проверка " обновления книги" - получение 401 статус-кода для неавторизованного пользователя при добавлении книги
     */
    test ('should can put book with 401 status code',async ()=>{
        responce = await updateBook({ isbna:ISBN1, isbn:ISBN0, uuid:UUID });
        expect(responce.status).toBe(401)
        expect(responce.statusText).toBe('Unauthorized')
        expect(responce.data.code).toBe('1200');
        expect(responce.data.message).toBe('User not authorized!');
    });
    /**
     * Проверка Получения информации о книге
     */
    /*Поправлено*/
    test('shoud can get book by isbn', async ()=>{
        responce = await  getBook({ token:token,isbn:ISBN1 });
        expect(responce.status).toBe(200);
        expect(responce.statusText).toBe('OK');
        expect(responce.data.isbn).toBe(ISBN1);
    })

    /**
     * Проверка Получения информации о книге - получение 400 статус-кода при отсутствии книги
     */
    /*Ошибка в документации - ожидаемый statusText = Not Found*/
    test('shoud can get book by isbn  with 400 status code', async ()=>{

        responce = await  getBook({ isbn:ISBN0 });
        expect(responce.status).toBe(400);
        expect(responce.statusText).toBe('Bad Request');
        expect(responce.data.code).toBe('1205');
        expect(responce.data.message).toBe('ISBN supplied is not available in Books Collection!');
    })
    /**
     * Проверка удаления книги
     */
    /*Ошибка в документации - ожидаемый statusText = Success*/
    test ('should can delete book', async () =>{
        responce = await  deleteBook({ token:token, isbna:ISBN1,uuid:UUID });
        expect(responce.status).toBe(204);
        expect(responce.statusText).toBe('No Content')
    })
    /**
     * Проверка удаления книги  - получение 400 статус-кода для неверного запроса
     */
    /*Ошибка в документации - ожидаемый statusText = Error*/
    test ('should can delete book with 400 status code', async () =>{
        responce = await  deleteBook({ token:token, isbna:ISBN0,uuid:UUID });
        expect(responce.status).toBe(400)
        expect(responce.statusText).toBe('Bad Request')
        expect(responce.data.code).toBe('1206');
        expect(responce.data.message).toBe('ISBN supplied is not available in User\'s Collection!');
    })
    /**
     * Проверка удаления книги  - получение 401 статус-кода для неавторизованного пользователя
     */
    test ('should can delete book with 401 status code', async () =>{
        responce = await  deleteBook({ isbna:ISBN1,uuid:UUID });
        expect(responce.status).toBe(401)
        expect(responce.statusText).toBe('Unauthorized')
        expect(responce.data.code).toBe('1200');
        expect(responce.data.message).toBe('User not authorized!');
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
        responce = await wtBearerResp({requestData:validRequestData, path:config.AUTORIZED_USER,token:token });
        expect(responce.status).toEqual(200);

        expect(responce.statusText).toBe('OK')
        expect(responce.data).toEqual(true);

    });
    /**
     * Получение информации о пользователе
     */
    /* Предполагаю что данная функция в сваггер запрограммирована неверно {UUID} передается как строка, а не как значениe*/
    test('should get a info about user by UUID', async () => {
        responce = await bearerGetResp({path:config.USER_ACC_PATH + `/${UUID}`,token:token });
        expect(responce.status).toBe(200);
        expect(responce.statusText).toBe('OK')
        expect(responce.data.userId).toEqual(UUID);
        expect(responce.data.username).toEqual(validRequestData.userName);
        expect(responce.data.books).toBeDefined();
    });


    /**
     * Очистка пользовательских данных
     */
    /* Предполагаю что данная функция в сваггер запрограммирована неверно {UUID} передается как строка, а не как значениe*/
    test('clearing user data', async () => {
        responce = await bearerDelResp({path:config.USER_ACC_PATH + `/${UUID}`,token:token });
        expect(responce.status).toBe(204);
        expect(responce.statusText).toBe('No Content')
    });
    /**
     * Проверка удален ли пользователь
     */
    test('delete check user by UUID', async () => {
        responce = await bearerGetResp({path:config.USER_ACC_PATH + `/${UUID}`,token:token });
        expect(responce.status).toBe(401);
        expect(responce.statusText).toBe('Unauthorized')
        expect(responce.data.code).toBe('1207');
        expect(responce.data.message).toBe('User not found!');
    });
});



