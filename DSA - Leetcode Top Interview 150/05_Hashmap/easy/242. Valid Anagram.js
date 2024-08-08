// 242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @topics  Hash Table, String, Sorting
 * @description
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.

 * @examples
    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const a = s.split("").sort().join("");
  const b = t.split("").sort().join("");
  return a === b ? true : false;
};
