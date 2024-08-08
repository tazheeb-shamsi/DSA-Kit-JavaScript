// 128. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 * @topics
 * @description 
    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

    You must write an algorithm that runs in O(n) time.
 * @examples
    Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

    Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9
 * @constraints
    0 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    // Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      // Expand the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      // Update the longest streak
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};
