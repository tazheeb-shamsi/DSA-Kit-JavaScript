// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 * @topics
 * @description
 * Given a string s, find the length of the longest substring  without repeating characters.
 * A substring is a contiguous non-empty sequence of characters within a string.
 * @examples
    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function (s) {
  let start = 0,
    maxLength = 0;
  const charSet = new Set();
  if (s.length === 0) return 0;

  for (let i = 0; i < s.length; i++) {
    if (charSet.has(s[i])) {
      while (charSet.has(s[i])) {
        charSet.delete(s[start]);
        start++;
      }
    }
    charSet.add(s[i]);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};
