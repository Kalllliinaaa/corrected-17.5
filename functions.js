function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9а-яё]/gi, ''); // Исправлено: Учитываем кириллицу
  return normalized === normalized.split('').reverse().join('');
}

function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a + b;
}

module.exports = { isPalindrome, addNumbers };
