const { isPalindrome, addNumbers } = require('./functions');

describe('Тестирование функции isPalindrome', () => {

    // Базовые палиндромы
    test('должна возвращать true для палиндрома "довод"', () => {
        expect(isPalindrome('довод')).toBe(true);
    });

    test('должна возвращать true для палиндрома "шалаш"', () => {
        expect(isPalindrome('шалаш')).toBe(true);
    });

    test('должна возвращать true для палиндрома "level"', () => {
        expect(isPalindrome('level')).toBe(true);
    });

    // Палиндромы с учетом регистра
    test('должна возвращать true для палиндрома "Level"', () => {
        expect(isPalindrome('Level')).toBe(true);
    });

    // Палиндромы с пробелами и знаками препинания
    test('должна возвращать true для палиндрома "А роза упала на лапу Азора"', () => {
        expect(isPalindrome('А роза упала на лапу Азора')).toBe(true);
    });

    test('должна возвращать true для палиндрома "Madam, I\'m Adam"', () => {
        expect(isPalindrome("Madam, I'm Adam")).toBe(true);
    });

    // Не палиндромы
    test('должна возвращать false для "привет"', () => {
        expect(isPalindrome('привет')).toBe(false);
    });

    test('должна возвращать false для "world"', () => {
        expect(isPalindrome('world')).toBe(false);
    });

    // Пустая строка
    test('должна возвращать true для пустой строки', () => {
        expect(isPalindrome('')).toBe(true);
    });

    // Односимвольная строка
    test('должна возвращать true для односимвольной строки', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    // Цифровые палиндромы
    test('должна возвращать true для палиндрома "12321"', () => {
        expect(isPalindrome('12321')).toBe(true);
    });

    test('должна возвращать false для "12345"', () => {
        expect(isPalindrome('12345')).toBe(false);
    });

    // Смешанные буквенно-цифровые палиндромы
    test('должна возвращать true для "A121A"', () => {
        expect(isPalindrome('A121A')).toBe(true);
    });
});

describe('Тестирование функции addNumbers', () => {
    // Базовое сложение
    test('должна возвращать 5 для входных значений 2 и 3', () => {
        expect(addNumbers(2, 3)).toBe(5);
    });

    test('должна возвращать 0 для входных значений 0 и 0', () => {
        expect(addNumbers(0, 0)).toBe(0);
    });

    // Сложение отрицательных чисел
    test('должна возвращать -5 для входных значений -2 и -3', () => {
        expect(addNumbers(-2, -3)).toBe(-5);
    });

    // Сложение положительного и отрицательного числа
    test('должна возвращать 1 для входных значений 3 и -2', () => {
        expect(addNumbers(3, -2)).toBe(1);
    });

    test('должна возвращать -1 для входных значений -3 и 2', () => {
        expect(addNumbers(-3, 2)).toBe(-1);
    });

    // Сложение с нулем
    test('должна возвращать 5 для входных значений 5 и 0', () => {
        expect(addNumbers(5, 0)).toBe(5);
    });

    test('должна возвращать -5 для входных значений -5 и 0', () => {
        expect(addNumbers(-5, 0)).toBe(-5);
    });

    // Большие числа
    test('должна корректно складывать большие числа', () => {
        expect(addNumbers(1000000, 2000000)).toBe(3000000);
    });

    // Дробные числа (если функция должна поддерживать их)
    test('должна корректно складывать дробные числа (если применимо)', () => {
        expect(addNumbers(2.5, 3.5)).toBe(6); // или использовать toBeCloseTo, если важна точность
    });

    // Проверка типов (если необходимо)
    test('должна возвращать NaN, если один из аргументов не является числом (если применимо)', () => {
       expect(Number.isNaN(addNumbers("a", 2))).toBe(true);
    });
});
