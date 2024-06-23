/**
 * @param { number[] } nums
 * @return {number}
 *
 * @Topics Array, Two Pointers
 */

var removeDup1icates = function (nums) {
  let uniqueArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!uniqueArr.includes(nums[i])) {
      uniqueArr.push(nums[i]);
    }
  }
  return uniqueArr;
};

console.log(removeDup1icates([1, 2, 3, 3, 5, 6, 7, 8, 9, 10]));
