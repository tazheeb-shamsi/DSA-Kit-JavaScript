/**
 * @param {string} s
 * @return {number}
 * @topics Hash Table,Math,String
 * @description
 * Roman numerals are represented by seven different symbols:
   I, V, X, L, C, D and M.
      @Symbol       @Value
      I             1
      V             5
      X             10
      L             50
      C             100
      D             500
      M             1000

* @example1
  Input: s = "III"
  Output: 3
  Explanation: III = 3.

* @example2
  Input: s = "LVIII"
  Output: 58
  Explanation: L = 50, V= 5, III = 3.

* @example3
  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

var romanToInt = function (s) {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romanToIntMap[s[i]];
    let next = romanToIntMap[s[i + 1]];

    if (next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
};
