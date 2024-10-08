// 290. Word Pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * @topics HashTable, String
 * @description
 * Given a pattern and a string s, find if s follows the same pattern.
    Here follow means a full match, such that there is a bijection between a letter in pattern
    and a non-empty word in s.
 * @examples
    Example 1:
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true

    Example 2:
    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false

    Example 3:
    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false
 * @constraints
    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.
 */

var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (words.length !== pattern.length) return false;

  const charToWord = new Map();
  const WordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWord.has(char) && charToWord.get(char) !== word) return false;
    charToWord.set(char, word);

    if (WordToChar.has(word) && WordToChar.get(word) !== char) return false;
    WordToChar.set(word, char);
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
