function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === normalized.split('').reverse().join('');
}

function addNumbers(a, b) {
  return a + b;
}

module.exports = { isPalindrome, addNumbers };