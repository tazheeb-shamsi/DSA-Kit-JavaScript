/**
 * @param {number[]} height
 * @return {number}
 * @topics Array,Two Pointers,Greedy
 * @description
    You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.

  @examples
  Example 1:
    Image: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

    Example 2:
    Input: height = [1,1]
    Output: 1
 */

var maxArea = function (heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Calculate the current area
    let area = (right - left) * Math.min(heights[left], heights[right]);

    // Update maxArea if the current area is larger
    maxArea = Math.max(maxArea, area);

    // Move the pointer that points to the smaller height inward
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
