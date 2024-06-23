/**
 * @param {number[]} nums
 * @return {number}
 * @Topics Array,Hash Table,Divide and Conquer,Sorting,Counting
 */
var majorityElement = function (nums) {
  let count = 0;
  let element = null;

  for (i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i];
    }
    count += nums[i] === element ? 1 : -1;
  }
  return element;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
