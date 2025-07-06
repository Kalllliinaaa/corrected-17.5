const { isPalindrome, addNumbers } = require('./functions');
describe('Тестирование функции isPalindrome', () => {
    test('должна возвращать true для палиндрома "довод"', () => {
        expect(isPalindrome('довод')).toBe(true);
    });
});

describe('Тестирование функции addNumbers', () => {
    test('должна возвращать 5 для входных значений 2 и 3', () => {
        expect(addNumbers(2, 3)).toBe(5);
    });
});