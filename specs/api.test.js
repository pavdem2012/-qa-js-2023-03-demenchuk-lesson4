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
import 'jest-extended';
import expect from "expect";

//import { reporters } from "../jest.config.js";

let ISBN1;
let ISBN0;
let UUID;
let token;
let response;
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
        response = await wtBearerResp({requestData: generateBadPassRequestData(), path:config.USER_ACC_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the response')
                .startStep('Checking the returned status code')
        expect(response.status).toBe(400);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(response.statusText).toBe('Bad Request')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned response body code')
        expect(response.data.code).toBe('1300');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned response body message')
        expect(response.data.message).toBe('Passwords must have at least one non alphanumeric character, one digit (\'0\'-\'9\'), one uppercase (\'A\'-\'Z\'), one lowercase (\'a\'-\'z\'), one special character and Password must be eight characters or longer.');
        reporter.endStep(Status.Passed)
                .endStep()


    });
    /**
     * Проверка "Создание пользователя успешно"
     */
    test('should create a new user', async () => {
        reporter.epic('Создание пользователя POST/Account/v1/User')
                .feature('возврат 201 статус-кода и валидного тела ответа при отправке валидного запроса')
                .description('возврат 201 статус-кода и валидного тела ответа при отправке валидного запроса')
                .severity(Severity.Blocker)
        reporter.startStep(`register as ${JSON.stringify(generateCorrectRequestData())}`)
        response = await wtBearerResp({requestData:validRequestData,  path:config.USER_ACC_PATH});
        UUID = response.data.userID;
        reporter.endStep(Status.Passed)
                .startStep('Checking the response')
                .startStep('Checking the returned status code')
        expect(response.status).toEqual(201);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(response.statusText).toBe('Created')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned userID toBeDefined')
        expect(response.data.userID).toBeDefined();
        reporter.endStep(Status.Passed)
                .startStep(`Checking the returned username toEqual ${validRequestData.userName}`)
        expect(response.data.username).toEqual(validRequestData.userName);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned books toBeDefined')
        expect(response.data.books).toBeDefined();
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned books toBeArray')
        expect(Array.isArray(response.data.books)).toBe(true);
        reporter.endStep(Status.Passed)
                .endStep()
    });
    /**
     * Проверка "Создание пользователя c ошибкой, логин уже используется"
     */

    test('should return error message when sending existing userName', async () => {
        reporter.epic('Создание пользователя POST/Account/v1/User')
                .feature('возврат 406 статус-кода и валидного тела ответа при отправке повторного валидного запроса')
                .description('возврат 406 статус-кода и валидного тела ответа при отправке повторного валидного запроса')
                .startStep(`register as ${JSON.stringify(generateCorrectRequestData())}`)
        response = await wtBearerResp({requestData:validRequestData,  path:config.USER_ACC_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the response')
                .startStep('Checking the returned status code')
        expect(response.status).toBe(406);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(response.statusText).toBe('Not Acceptable')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned response body code')
        expect(response.data.code).toBe('1204');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned response body message')
        expect(response.data.message).toBe('User exists!');
        reporter.endStep(Status.Passed)
                .endStep()
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
        response = await wtBearerResp({requestData: generateNullBodyRequestData(), path:config.GEN_ACC_TOKEN_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the response')
                .startStep('Checking the returned status code')
        expect(response.status).toBe(400);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(response.statusText).toBe('Bad Request')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned response body code')
        expect(response.data.code).toBe('1200');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned response body message')
        expect(response.data.message).toBe('UserName and Password required.');
        reporter.endStep(Status.Passed)
                .endStep()
    });
    /**
     * Проверка "Генерация токена успешно"
     */
    test('Should generate token for valid user', async () => {
        reporter.epic('Генерация токена POST/Account/v1/GenerateToken')
                .feature('возврат 200 статус-кода и валидного тела ответа при отправке валидного запроса')
                .description('возврат 200 статус-кода и валидного тела ответа при отправке валидного запроса')
                .startStep('send a request')
        response = await wtBearerResp({requestData:validRequestData, path:config.GEN_ACC_TOKEN_PATH});
        reporter.endStep(Status.Passed)
                .startStep('Checking the response')
                .startStep('Checking the returned status code')
        expect(response.status).toBe(200);
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned status text')
        expect(response.statusText).toBe('OK')
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned data status')
        expect(response.data.status).toBe('Success');
        reporter.endStep(Status.Passed)
                .startStep('Checking the returned data token toBeTruthy')
        expect(response.data.token).toBeTruthy();
        reporter.endStep(Status.Passed)
                .endStep()
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
         response = await  getBooks({ token:token });
        let books = response.data.books;
        ISBN1 = response.data.books[1].isbn;
        ISBN0 = response.data.books[0].isbn;
        expect(response.status).toBe(200)
        expect(response.statusText).toBe('OK')
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
        response = await postBook({ token:token,isbn:ISBN0,uuid:UUID });
        expect(response.status).toBe(201)
        expect(response.statusText).toBe('Created')
        expect(response.data.books[0].isbn).toEqual(ISBN0);
    });
    /**
     * Проверка "Создание книги" - получение 400 статус-кода при повторном добавлении книги
     */
    /*Ошибка в документации - ожидаемый statusText = Error*/
    test ('should can post book with 400 status code',async ()=>{
        response = await postBook({ token:token,isbn:ISBN0,uuid:UUID });
        expect(response.status).toBe(400)
        expect(response.statusText).toBe('Bad Request')
        expect(response.data.code).toBe('1210');
        expect(response.data.message).toBe('ISBN already present in the User\'s Collection!');
    });

    /**
     * Проверка "Создание книги" - получение 401 статус-кода для неавторизованного пользователя при добавлении книги
     */
    test ('should can post book with 401 status code',async ()=>{
        response = await postBook({ isbn:ISBN0,uuid:UUID });
        expect(response.status).toBe(401)
        expect(response.statusText).toBe('Unauthorized')
        expect(response.data.code).toBe('1200');
        expect(response.data.message).toBe('User not authorized!');
    });

    /**
     * Проверка обновления книги
     */
    test ('should can put book', async () =>{
        response = await updateBook({ token:token, isbna:ISBN1, isbn:ISBN0, uuid:UUID });
        expect(response.status).toBe(200)
        expect(response.statusText).toBe('OK')
        expect(response.data.userId).toEqual(UUID);
        expect(response.data.username).toEqual(validRequestData.userName);
        expect(response.data.books[0].isbn).toEqual(ISBN1);
        expect(response.data.books[0].title).toEqual(expect.any(String));
        expect(response.data.books[0].subTitle).toEqual(expect.any(String));
        expect(response.data.books[0].author).toEqual(expect.any(String));
        expect(response.data.books[0].publish_date).toMatch(
            /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d{3}Z$/
        );
        expect(response.data.books[0].publisher).toEqual(expect.any(String));
        expect(response.data.books[0].pages).toEqual(expect.any(Number));
        expect(response.data.books[0].description).toEqual(expect.any(String));
        expect(response.data.books[0].website).toEqual(expect.any(String));
    });

    /**
     * Проверка "обновления книги" - получение 400 статус-кода при повторном добавлении книги
     */
    /*Ошибка в документации - ожидаемый statusText = Error*/
    test ('should can put book with 400 status code',async ()=>{
        response = await updateBook({ token:token, isbna:ISBN1, isbn:ISBN1, uuid:UUID });
        expect(response.status).toBe(400)
        expect(response.statusText).toBe('Bad Request')
        expect(response.data.code).toBe('1206');
        expect(response.data.message).toBe('ISBN supplied is not available in User\'s Collection!');
    });

    /**
     * Проверка " обновления книги" - получение 401 статус-кода для неавторизованного пользователя при добавлении книги
     */
    test ('should can put book with 401 status code',async ()=>{
        response = await updateBook({ isbna:ISBN1, isbn:ISBN0, uuid:UUID });
        expect(response.status).toBe(401)
        expect(response.statusText).toBe('Unauthorized')
        expect(response.data.code).toBe('1200');
        expect(response.data.message).toBe('User not authorized!');
    });
    /**
     * Проверка Получения информации о книге
     */
    /*Поправлено*/
    test('shoud can get book by isbn', async ()=>{
        response = await  getBook({ token:token,isbn:ISBN1 });
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.data.isbn).toBe(ISBN1);
    })

    /**
     * Проверка Получения информации о книге - получение 400 статус-кода при отсутствии книги
     */
    /*Ошибка в документации - ожидаемый statusText = Not Found*/
    test('shoud can get book by isbn  with 400 status code', async ()=>{

        response = await  getBook({ isbn:ISBN0 });
        expect(response.status).toBe(400);
        expect(response.statusText).toBe('Bad Request');
        expect(response.data.code).toBe('1205');
        expect(response.data.message).toBe('ISBN supplied is not available in Books Collection!');
    })
    /**
     * Проверка удаления книги
     */
    /*Ошибка в документации - ожидаемый statusText = Success*/
    test ('should can delete book', async () =>{
        response = await  deleteBook({ token:token, isbna:ISBN1,uuid:UUID });
        expect(response.status).toBe(204);
        expect(response.statusText).toBe('No Content')
    })
    /**
     * Проверка удаления книги  - получение 400 статус-кода для неверного запроса
     */
    /*Ошибка в документации - ожидаемый statusText = Error*/
    test ('should can delete book with 400 status code', async () =>{
        response = await  deleteBook({ token:token, isbna:ISBN0,uuid:UUID });
        expect(response.status).toBe(400)
        expect(response.statusText).toBe('Bad Request')
        expect(response.data.code).toBe('1206');
        expect(response.data.message).toBe('ISBN supplied is not available in User\'s Collection!');
    })
    /**
     * Проверка удаления книги  - получение 401 статус-кода для неавторизованного пользователя
     */
    test ('should can delete book with 401 status code', async () =>{
        response = await  deleteBook({ isbna:ISBN1,uuid:UUID });
        expect(response.status).toBe(401)
        expect(response.statusText).toBe('Unauthorized')
        expect(response.data.code).toBe('1200');
        expect(response.data.message).toBe('User not authorized!');
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
        response = await wtBearerResp({requestData:validRequestData, path:config.AUTORIZED_USER,token:token });
        expect(response.status).toEqual(200);

        expect(response.statusText).toBe('OK')
        expect(response.data).toEqual(true);

    });
    /**
     * Получение информации о пользователе
     */
    /* Предполагаю что данная функция в сваггер запрограммирована неверно {UUID} передается как строка, а не как значениe*/
    test('should get a info about user by UUID', async () => {
        response = await bearerGetResp({path:config.USER_ACC_PATH + `/${UUID}`,token:token });
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK')
        expect(response.data.userId).toEqual(UUID);
        expect(response.data.username).toEqual(validRequestData.userName);
        expect(response.data.books).toBeDefined();
    });


    /**
     * Очистка пользовательских данных
     */
    /* Предполагаю что данная функция в сваггер запрограммирована неверно {UUID} передается как строка, а не как значениe*/
    test('clearing user data', async () => {
        response = await bearerDelResp({path:config.USER_ACC_PATH + `/${UUID}`,token:token });
        expect(response.status).toBe(204);
        expect(response.statusText).toBe('No Content')
    });
    /**
     * Проверка удален ли пользователь
     */
    test('delete check user by UUID', async () => {
        response = await bearerGetResp({path:config.USER_ACC_PATH + `/${UUID}`,token:token });
        expect(response.status).toBe(401);
        expect(response.statusText).toBe('Unauthorized')
        expect(response.data.code).toBe('1207');
        expect(response.data.message).toBe('User not found!');
    });
});



