// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * @topics Array, Hash Table, Sliding Window
 * @description
 * Given an integer array nums and an integer k,
 * return true if there are two distinct indices i and j in the array such that
 * nums[i] == nums[j] and abs(i - j) <= k.
 * @examples
    Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

    Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true

    Example 3:
    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false
 * @constraints
    1 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9
    0 <= k <= 10^5
 */
var containsNearbyDuplicate = function (nums, k) {
  // Create a map to store the value and its most recent index
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // If the number is already in the map, check the index difference
    if (indexMap.has(num) && i - indexMap.get(num) <= k) {
      // i - indexMap.get(num) --> previousIndex in indexMap
      return true;
    }
    indexMap.set(num, i);
  }
  return false;
};
