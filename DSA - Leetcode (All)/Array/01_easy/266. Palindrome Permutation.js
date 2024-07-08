/**
 * @param {string}
 * @return {boolean}
 * @topics
 * @description
    Given a string, determine if a permutation of the string could form a palindrome.
 * @examples
    Example 1:
    Input: "code"
    Output: false

    Example 2:
    Input: "aab"
    Output: true

    Example 3:
    Input: "carerac"
    Output: true
 */

function canFormPalindrome(str) {
  for (const c of str) {
    ++count[c.charCodeAt() - "a".charCodeAt()];
  }
  return count.filter((c) => c % 2 === 1).length < 2;
}

console.log(canFormPalindrome("code")); // Output: false
console.log(canFormPalindrome("aab")); // Output: true
console.log(canFormPalindrome("carerac")); // Output: true
