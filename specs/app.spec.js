import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

// /**
//  * Для проверки, что jest настроен правильно. Можно удалить
//  */
// test('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });
describe('nameIsValid unit tests coverage', () => {
    it('test loads without error', () => {
        expect(nameIsValid).toBeDefined();
        expect(typeof nameIsValid).toBe('function');
      });
    it ('correct operand input', () => {
        expect(nameIsValid('Ян')).toBe(true);        
    });
    it ('throw error when operand lenth < 2', () => {
        expect(nameIsValid('Я')).toBe(false);
    });
    it ('throw error when operand includes space character', () => {
        expect(nameIsValid('Я н')).toBe(false);
        expect(nameIsValid(' Я н ')).toBe(false);
        expect(nameIsValid(' Ян ')).toBe(false);
    });
    it ('should throw an error if the operand is not a string', () => {
        expect(nameIsValid(7)).toBe(false);
    });
});
describe('fullTrim unit tests coverage', () => {
    it('test loads without error', () => {
        expect(fullTrim).toBeDefined();
        expect(typeof fullTrim).toBe('function');
       });
    it ('correct operand including space characters', () => {
        expect(fullTrim('День космонавтики')).toBe('Денькосмонавтики');
        expect(fullTrim(' Денькосмонавтики ')).toBe('Денькосмонавтики'); 
        expect(fullTrim(' День космонавтики ')).toBe('Денькосмонавтики');         
    });
    it ('correct operand without space character', () => {
        expect(fullTrim('Денькосмонавтики')).toBe('Денькосмонавтики');        
    });
    it ('correct operand if input contaihs empty string, null or undefined', () => {
        expect(fullTrim('')).toEqual('');
        expect(fullTrim(null)).toEqual('');
        expect(fullTrim(undefined)).toEqual('');
    });
    it('should throw an error if the operand is not a string', () => {
        expect(() => fullTrim(123)).toThrow();
        expect(() => fullTrim({ key: 'value' })).toThrow();
    });
})
