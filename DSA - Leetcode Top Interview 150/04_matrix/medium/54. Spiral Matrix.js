// 54. Spiral Matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * @topics : Array Matrix Simulation
 * @description : Given an m x n matrix, return all elements of the matrix in spiral order.
 * @examples
 * Example 1:
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]

 * Example 2:
    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
var spiralOrder = function (matrix) {
  const result = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right along the top boundary
    for (let col = left; col <= right; col++) result.push(matrix[top][col]);
    top++;
    // Traverse from top to bottom along the right boundary
    for (let row = top; row <= bottom; row++) result.push(matrix[row][right]);
    right--;
    // Check if there are still rows to traverse
    if (top <= bottom) {
      for (let col = right; col >= left; col--)
        result.push(matrix[bottom][col]);
      bottom--;
    }
    // Check if there are still columns to traverse
    if (left <= right) {
      for (let row = bottom; row >= top; row--) result.push(matrix[row][left]);
      left++;
    }
  }
  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
