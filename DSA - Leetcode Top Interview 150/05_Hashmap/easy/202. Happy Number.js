// 202. Happy Number

/**
 * @param {number} n
 * @return {boolean}
 * @topics Hash Table, Math, Two Pointers
 * @description
    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:
    1. Starting with any positive integer, replace the number by the sum of the squares of its digits.
    2. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    3. Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.
 * @examples
    Example 1:
        Input: n = 19
        Output: true
    Explanation:
        1^2 + 9^2 = 82
        8^2 + 2^2 = 68
        6^2 + 8^2 = 100
        1^2 + 0^2 + 0^2 = 1

    Example 2:
        Input: n = 2
        Output: false
 */
var isHappy = function (n) {
  const getSumOfSquares = (num) => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  const seenNumbers = new Set();
  while (n !== 1 && !seenNumbers.has(n)) {
    seenNumbers.add(n);
    n = getSumOfSquares(n);
  }
  return n === 1;
};
