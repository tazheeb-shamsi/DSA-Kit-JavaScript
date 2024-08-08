// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @topics Hash Table, String
 * @description
    Given two strings s and t, determine if they are isomorphic.
    Two strings s and t are isomorphic if the characters in s can be replaced to get t.
    All occurrences of a character must be replaced with another character while preserving
    the order of characters. No two characters may map to the same character, but a character
    may map to itself.
 * @examples
    Example 1:
    Input: s = "egg", t = "add"
    Output: true

    Example 2:
    Input: s = "foo", t = "bar"
    Output: false

    Example 3:
    Input: s = "paper", t = "title"
    Output: true
 * @constraints
    1 <= s.length <= 5 * 10^4
    t.length == s.length
    s and t consist of any valid ascii character.
 */
var isIsomorphic = function (s, t) {
  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapST.has(charS) && mapST.get(charS) !== charT) {
      return false;
    }
    mapST.set(charS, charT);

    if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
      return false;
    }
    mapTS.set(charT, charS);
  }
  return true;
};
