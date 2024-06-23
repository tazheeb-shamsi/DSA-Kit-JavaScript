/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @topics Two Pointers, String, String Matching

 */

var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  // Use indexOf to find the first occurrence of needle in haystack
  return haystack.indexOf(needle);
};

// Example 1
let haystack1 = "sadbutsad";
let needle1 = "sad";
console.log(strStr(haystack1, needle1)); // Output: 0

// Example 2
let haystack2 = "leetcode";
let needle2 = "leeto";
console.log(strStr(haystack2, needle2)); // Output: -1
