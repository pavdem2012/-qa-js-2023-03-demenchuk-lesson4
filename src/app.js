/**
 * Проверка имени пользователя
 * @param {string} name
 * @returns {boolean}
 */

export const nameIsValid = (name) => !!name && name.length >= 2 && !name.includes(' ');

/**
 * Удаление пробелов из строки
 *
 * @param {string} text
 * @returns {string}
 */

export const fullTrim = (text) => (text || '').replace(/\s/g, '');

/**
 * Подсчёт суммы заказа
 *
 * @param {[{quantity: number, name?: string, price: number}]} items
 * @param {number} discount
 * @example getTotal([{ price: 10, quantity: 10 }]) // 100
 * @example getTotal([{ price: 10, quantity: 1 }]) // 10
 * @example getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]) // 100
 * @example getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 }) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 10) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 100) // 0
 */
export const getTotal = (items = [], discount = 0) => {
    if (typeof discount !== 'number') {
        throw new Error('Скидка должна быть числом')
    }
    if (discount < 0) {
        throw new Error('Процент скидки не может быть отрицательным')
    }
    const total = items.reduce((acc, item, ) => {
        return acc + item.price * item.quantity;
    }, 0)
    return total - total * discount / 100;
}
/** Создаем объект, в котором ключ это ник, а значение это успеваемость. */
const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
}
/** Вызываем функцию getScore с выводом результата в консоль*/
console.log('Сумма всех баллов вариант 1: ',getScore(scores));
/** В данном случае мы объявляем функцию getScore, которая принимает аргумент scores - объект,
 * содержащий информацию об успеваемости студентов. Затем мы объявляем переменную totalScore,
 * которая будет использоваться для хранения суммы всех баллов.
 * Затем мы перебираем все ключи в объекте scores с помощью цикла for..in,
 * добавляя значение баллов каждого студента к переменной totalScore.
 * Затем, мы возвращаем итоговое значение totalScore. */

function getScore(scores) {
    let totalScore = 0;
    for (let key in scores) {
        totalScore += scores[key];
    }
    return totalScore;
}

/** Вызываем функцию getScore1 с выводом результата в консоль */
console.log('Сумма всех баллов вариант 2: ',getScore1(scores));

/** В данном случае мы объявляем функцию getScore1, которая принимает аргумент scores - объект,
 * содержащий информацию об успеваемости студентов. Мы используем метод Object.values для получения
 * всех значений объекта scores, затем вызываем метод reduce, передавая ему функцию обратного вызова,
 * которая складывает все баллы. В качестве начального значения для reduce мы используем 0,
 * чтобы сумма начиналась с нуля. */

function getScore1(scores) {
    return Object.values(scores).reduce((total, score) => total + score, 0);
}

/** Вызываем функцию getScore2 с выводом результата в консоль */
console.log('Сумма всех баллов вариант 3: ',getScore2(scores));
/** В данном случае мы объявляем функцию getScore2, которая принимает аргумент scores - объект, 
 * содержащий информацию об успеваемости студентов. Затем мы объявляем переменную totalScore,
 * которая будет использоваться для хранения суммы всех баллов. Затем мы перебираем все ключи
 * в объекте scores с помощью цикла for..in, добавляя значение баллов каждого студента к переменной totalScore.
 * Затем, мы возвращаем итоговое значение totalScore. */
function getScore2(scores) {
    let totalScore = 0;
    for (let key in scores) {
        totalScore += scores[key];
    }
    return totalScore;
}
