/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @topics Two Pointers, String, Dynamic Programming
 * @description
    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.(i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 * @examples
    Example 1:
    Input: s = "abc", t = "ahbgdc"
    Output: true

    Example 2:
    Input: s = "axc", t = "ahbgdc"
    Output: false
 */

var isSubsequence = function (s, t) {
  let sIndex = 0,
    tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === s.length;
};


console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("aaaaaa", "bbaaaa")); // false
