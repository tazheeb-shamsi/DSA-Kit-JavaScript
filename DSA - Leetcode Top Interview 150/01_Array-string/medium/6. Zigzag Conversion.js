/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * @topics String
 * @description
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);


  * @example
    Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

    Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"

    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I

    Example 3:
    Input: s = "A", numRows = 1
    Output: "A"
**/

var convert = function (s, numRows) {
  if (numRows === 1) return s;

  // Create an array of empty strings for each row
  const rows = new Array(numRows).fill("");

  let currentRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    // Append the current character to the current row
    rows[currentRow] += s[i];

    // If we're at the top or bottom row, reverse direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Move up or down depending on the direction
    currentRow += goingDown ? 1 : -1;
  }

  // Join all rows to get the final string
  return rows.join("");
};

console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
