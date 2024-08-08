// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 * @topics Array, Hash Table, String, Sorting
 * @description
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
 * @examples
    Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Example 2:
    Input: strs = [""]
    Output: [[""]]

    Example 3:
    Input: strs = ["a"]
    Output: [["a"]]
 */
var groupAnagrams = function (strs) {
  // Create a map to store lists of anagrams
  const anagrams = new Map();

  for (const str of strs) {
    // Sort the characters in the string to create a sortedStr
    const sortedStr = str.split("").sort().join("");
    // If the sortedStr is not in the map, add it with an empty array
    if (!anagrams.has(sortedStr)) {
      anagrams.set(sortedStr, []);
    }
    // Add the original string to the appropriate list
    anagrams.get(sortedStr).push(str);
  }
  // Convert the values of the map into an array of arrays
  return Array.from(anagrams.values());
};
