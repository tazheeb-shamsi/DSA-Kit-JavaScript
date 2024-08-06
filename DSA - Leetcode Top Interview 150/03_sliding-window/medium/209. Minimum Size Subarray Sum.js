// 209. Minimum Size Subarray Sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * @topics
 * @description
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a
 * subarray  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 * @examples
 *  Example 1:
    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.

    Example 2:
    Input: target = 4, nums = [1,4,4]
    Output: 1

    Example 3:
    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0
 */
var minSubArrayLen = function (target, nums) {
  let start = 0,
    sum = 0;
  let minLength = Infinity;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0
