/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} m number of elements in nums1
 * @param {number} n number of elements in nums2
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * @Topics Array, Two Pointers ,Sorting
 */

var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for merged array (nums1)

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Copy remaining elements from nums2 if any
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[ 1, 2, 2, 3, 5, 6 ]
