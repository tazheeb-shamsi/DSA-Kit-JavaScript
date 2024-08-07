// 73. Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @topics Array, Hash, TableMatrix
 * @description : Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * @examples
 * Example 1:
    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]

 * Example 2:
    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const zeroRows = new Set();
  const zeroCols = new Set();

  // Step 1: Identify all rows and columns that should be zeroed
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        zeroRows.add(r);
        zeroCols.add(c);
      }
    }
  }

  // Step 2: Zero out the identified rows
  for (const r of zeroRows) {
    for (let c = 0; c < cols; c++) {
      matrix[r][c] = 0;
    }
  }

  // Step 3: Zero out the identified columns
  for (const c of zeroCols) {
    for (let r = 0; r < rows; r++) {
      matrix[r][c] = 0;
    }
  }
};
