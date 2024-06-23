/**
 * @param {string} s
 * @return {number}
 * @topics string
 *
 * @example1
    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

 * @example2
    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

*  @example3
    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.
*/

var lengthOfLastWord = function (s) {
  s = s.trim();
  const words = s.split(" ");
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello tazheeb!"));
