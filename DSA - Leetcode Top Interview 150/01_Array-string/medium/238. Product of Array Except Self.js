/**
 * @param {number[]} nums
 * @return {number[]}
 * @topics Array, Prefix Sum
 * @description
    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    You must write an algorithm that runs in O(n) time and without using the division operation.

 * @examples
      Example 1:
      Input: nums = [1,2,3,4]
      Output: [24,12,8,6]

      Example 2:
      Input: nums = [-1,1,0,-3,3]
      Output: [0,0,9,0,0]
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Step 1: Calculate left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Step 2: Calculate right products and update the answer array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};
console.log(productExceptSelf([1, 2, 3, 4])); //  [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
