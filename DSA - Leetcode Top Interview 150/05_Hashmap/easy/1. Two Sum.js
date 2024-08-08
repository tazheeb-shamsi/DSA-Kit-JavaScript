// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @topics Array, Hash Table
 * @description
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * @examples
    Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
 */
var twoSumIndices = function (nums, target) {
  const indices = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (indices.hasOwnProperty(diff)) {
      return [indices[diff], i];
    }
    indices[nums[i]] = i;
  }
  return null;
};
console.log(indicesWithSum([1, 2, 3, 4, 5], 9)); // Output: [3,4]
