/**
 * @param {string} s
 * @return {string}
 * @topics Two Pointers,String
 * @example
    Example 1:
    Input: s = "the sky is blue"
    Output: "blue is sky the"

    Example 2:
    Input: s = "  hello world  "
    Output: "world hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.

    Example 3:
    Input: s = "a good   example"
    Output: "example good a"

    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string
 */
var reverseWords = function (s) {
  // Split the string by spaces and filter out empty strings
  const words = s.split(" ").filter((word) => word !== "");
  // Reverse the array of words
  const reversedWords = words.reverse();
  // Join the reversed array into a string with single spaces between words
  return reversedWords.join(" ");
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords(" a good   example"));
