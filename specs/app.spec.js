import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe('nameIsValid unit tests coverage', () => {
    /**
     * Проверка, что функция nameIsValid была успешно загружена и является функцией
     */

    it('test loads without error', () => {
        reporter.epic('Unit Tests')
                .feature('nameIsValid')
                .description('Проверка, что функция nameIsValid была успешно загружена и является функцией')
        expect(nameIsValid).toBeDefined();
        expect(typeof nameIsValid).toBe('function');
    });
    /**
     * Проверка, что функция nameIsValid возвращает true для корректного ввода имени
     */

    it('correct operand input', () => {
        reporter.epic('Unit Tests')
                .feature('nameIsValid')
                .description('Проверка, что функция nameIsValid возвращает true для корректного ввода имени')
        expect(nameIsValid('Ян')).toBe(true);
    });

    /**
     * Проверка, что функция nameIsValid возвращает false для имени, длина которого меньше 2 символов
     */

    it('throw error when operand lenth < 2', () => {
        reporter.epic('Unit Tests')
                .feature('nameIsValid')
                .description('Проверка, что функция nameIsValid возвращает false для имени, длина которого меньше 2 символов')
        expect(nameIsValid('Я')).toBe(false);
    });
    /**
     * Проверка, что функция nameIsValid возвращает false для имени, содержащего пробелы
     */

    it('throw error when operand includes space character', () => {
        reporter.epic('Unit Tests')
                .feature('nameIsValid')
                .description('Проверка, что функция nameIsValid возвращает false для имени, содержащего пробелы')
        expect(nameIsValid('Я н')).toBe(false);
        expect(nameIsValid(' Я н ')).toBe(false);
        expect(nameIsValid(' Ян ')).toBe(false);
    });
    /**
     * Проверка, что функция nameIsValid возвращает false для типов данных, отличных от строк
     */

    it('should throw an error if the operand is not a string', () => {
        reporter.epic('Unit Tests')
                .feature('nameIsValid')
                .description('Проверка, что функция nameIsValid возвращает false для типов данных, отличных от строк')
        expect(nameIsValid(7)).toBe(false);
    });
});
describe('fullTrim unit tests coverage', () => {
    /**
     * Проверка, что функция fullTrim была успешно загружена и является функцией
     */

    it('test loads without error', () => {
        reporter.epic('Unit Tests')
                .feature('fullTrim')
                .description('Проверка, что функция fullTrim была успешно загружена и является функцией')
        expect(fullTrim).toBeDefined();
        expect(typeof fullTrim).toBe('function');
    });
    /**
     * Проверка , что функция fullTrim правильно работает с входными данными, содержащими пробелы.
     */

    it('correct operand including space characters', () => {
        reporter.epic('Unit Tests')
                .feature('fullTrim')
                .description('Проверка , что функция fullTrim правильно работает с входными данными, содержащими пробелы.')
        expect(fullTrim('День космонавтики')).toBe('Денькосмонавтики');
        expect(fullTrim(' Денькосмонавтики ')).toBe('Денькосмонавтики');
        expect(fullTrim(' День космонавтики ')).toBe('Денькосмонавтики');
    });
    /**
     * Проверка, что функция fullTrim правильно работает с входными данными, не содержащими пробелов.
     */

    it('correct operand without space character', () => {
        reporter.epic('Unit Tests')
                .feature('fullTrim')
                .description('Проверка, что функция fullTrim правильно работает с входными данными, не содержащими пробелов.')
        expect(fullTrim('Денькосмонавтики')).toBe('Денькосмонавтики');
    });
    /**
     * Проверка, что функция fullTrim правильно работает с пустыми строками, null и undefined.
     */

    it('correct operand if input contaihs empty string, null or undefined', () => {
        reporter.epic('Unit Tests')
                .feature('fullTrim')
                .description('Проверка, что функция fullTrim правильно работает с пустыми строками, null и undefined.')
        expect(fullTrim('')).toEqual('');
        expect(fullTrim(null)).toEqual('');
        expect(fullTrim(undefined)).toEqual('');
    });
    /**
     * Проверка, что функция fullTrim выбрасывает ошибку, если входной параметр не является строкой.
     */

    it('should throw an error if the operand is not a string', () => {
        reporter.epic('Unit Tests')
                .feature('fullTrim')
                .description('Проверка, что функция fullTrim выбрасывает ошибку, если входной параметр не является строкой.')
        expect(() => fullTrim(123)).toThrow();
        expect(() => fullTrim({ key: 'value' })).toThrow();
    });
});
describe('getTotal function unit tests coverage', () => {
    /**
     * Проверка, что функция getTotal была успешно загружена и является функцией
     */

    it('test loads without error', () => {
        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description('Проверка, что функция getTotal была успешно загружена и является функцией')
        expect(getTotal).toBeDefined();
        expect(typeof getTotal).toBe('function');
    });
    /**
     * Тестирование функции getTotal с разными входными параметрами и ожидаемыми результатами с помощью test.each
     */

    test.each`
    
    items                                           | discount | expected
    ${[{ price: 10, quantity: 10 }]}                | ${0}     | ${100}
    ${[{ price: 10, quantity: 1 }]}                 | ${0}     | ${10}
    ${[{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]} | ${0} | ${100}
    ${[{ price: 10, quantity: 0 }]}                 | ${0}     | ${0}
    ${[{ price: 10, quantity: 10 }]}                | ${10}    | ${90}
    ${[{ price: 10, quantity: 10 }]}                | ${100}   | ${0}    
  `
    (`returns $expected when given items =  $items and discount = $discount`, ({ items, discount, expected }) => {

        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description(`Проверка, что функция getTotal с items = ${JSON.stringify(items)} и discount = ${discount} отдает ожидаемый результат = ${expected}`)
        expect(getTotal(items, discount)).toBe(expected);
    });
    /**
     * Тестирование функции getTotal на обработку некорректных входных параметров
     */
    it('throws an error when discount is not a number', () => {
        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description('Проверка функции getTotal на обработку некорректных входных параметров (не число)')
        expect(() => getTotal([{ price: 10, quantity: 10 }], 'invalid discount')).toThrow('Скидка должна быть числом');
    });
    /**
     * Тестирование функции getTotal на обработку отрицательного значения для параметра discount
     */

    it('throws an error when discount is negative', () => {
        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description('Проверка функции getTotal  на обработку отрицательного значения для параметра discount')
        expect(() => getTotal([{ price: 10, quantity: 10 }], -10)).toThrow('Процент скидки не может быть отрицательным');
    });
    /**
     * Тестирование функции getTotal, когда скидка равна 100%
     */
    it('returns 0 when discount is  equal to 100', () => {
        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description('Проверка функции getTotal, когда скидка равна 100%')
        expect(getTotal([{ price: 10, quantity: 10 }], 100)).toBe(0);
    });
    /**
     * Тестирование функции getTotal, когда количество предметов равно 0
     */

    it('returns the total without discount when items have 0 quantity', () => {
        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description('Проверка функции getTotal, когда количество предметов равно 0')
        expect(getTotal([{ price: 10, quantity: 0 }])).toBe(0);
        expect(getTotal([{ price: 10, quantity: 0 }, { price: 5, quantity: 0 }])).toBe(0);
    });
    /**
     * Тестирование функции getTotal, когда скидка равна 0%
     */

    it('returns the total without discount when discount is 0', () => {
        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description('Проверка функции getTotal, когда количество скидка равна 0')

        expect(getTotal([{ price: 10, quantity: 10 }], 0)).toBe(100);
        expect(getTotal([{ price: 5, quantity: 5 }, { price: 10, quantity: 10 }], 0)).toBe(125);
    });
    /**
     * Тестирование функции getTotal, когда товаров больше 0 и скидка в диапазоне от 0 до 100.
     */

    it('returns the total with discount when items have quantity greater than 0 and discount is between 0 and 100', () => {
        reporter.epic('Unit Tests')
                .feature('getTotal')
                .description('Проверка функции getTotal, когда товаров больше 0 и скидка в диапазоне от 0 до 100.')

        expect(getTotal([{ price: 10, quantity: 10 }], 10)).toBe(90);
        expect(getTotal([{ price: 5, quantity: 5 }, { price: 10, quantity: 10 }], 25)).toBe(93.75);
    });
});