// 289. Game of Life

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * @topics Array, Matrix, Simulation
 * @description
    According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

    The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
    2. Any live cell with two or three live neighbors lives on to the next generation.
    3. Any live cell with more than three live neighbors dies, as if by over-population.
    4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
 * @examples
    Example 1:
    Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
    Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

    Example 2:
    Input: board = [[1,1],[1,0]]
    Output: [[1,1],[1,1]]

 *  @constraints
    m == board.length
    n == board[i].length
    1 <= m, n <= 25
    board[i][j] is 0 or 1.
 */
function gameOfLife(board) {
  const b = board.length,
    b0 = board[0].length;
  const copy = [...board.map((b) => [...b])];
  function lifeCount(i, j) {
    let sum = 0;
    if (i !== 0 && j !== 0) sum += copy[i - 1][j - 1];
    if (i !== 0) sum += copy[i - 1][j];
    if (i !== 0 && j !== b0 - 1) sum += copy[i - 1][j + 1];
    if (j !== 0) sum += copy[i][j - 1];
    if (j !== b0 - 1) sum += copy[i][j + 1];
    if (i !== b - 1 && j !== 0) sum += copy[i + 1][j - 1];
    if (i !== b - 1) sum += copy[i + 1][j];
    if (i !== b - 1 && j !== b0 - 1) sum += copy[i + 1][j + 1];
    return sum;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 2 == lifeCount(i, j) || lifeCount(i, j) == 3 ? 1 : 0;
      } else {
        board[i][j] = lifeCount(i, j) === 3 ? 1 : 0;
      }
    }
  }
}
