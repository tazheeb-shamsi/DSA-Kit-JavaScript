/**
 * @param {number[]} nums
 * @return {number}
 * @description
    Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    Return k after placing the final result in the first k slots of nums.

 * @example1
    Input: nums = [1,1,1,2,2,3]
    Output: 5, nums = [1,1,2,2,3,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

 * @example2
    Input: nums = [0,0,1,1,1,1,2,3,3]
    Output: 7, nums = [0,0,1,1,2,3,3,_,_]
    Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let j = 2; // Pointer for placing the next valid element

  for (let i = 2; i < nums.length; i++) {
    // Check if the current element is not the same as the element at j-2
    if (nums[i] !== nums[j - 2]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // [1,1,2,2,3]
