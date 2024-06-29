/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
   const n = nums.length;
   k = k % n; // Normalize k

   // Helper function to reverse part of the array
   const reverse = (arr, start, end) => {
     while (start < end) {
       [arr[start], arr[end]] = [arr[end], arr[start]];
       start++;
       end--;
     }
   };

   // Step 1: Reverse the entire array
   reverse(nums, 0, n - 1);
   // Step 2: Reverse the first k elements
   reverse(nums, 0, k - 1);
   // Step 3: Reverse the remaining elements
   reverse(nums, k, n - 1);
};
