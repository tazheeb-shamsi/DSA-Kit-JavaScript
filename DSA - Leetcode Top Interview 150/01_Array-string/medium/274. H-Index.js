/**
 * @param {number[]} citations
 * @return {number}
 * @topics Array, Sorting, Counting Sort
 * @description
    Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

    According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 * @examples
    Example 1:
    Input: citations = [3,0,6,1,5]
    Output: 3

    Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
    Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

    Example 2:
    Input: citations = [1,3,1]
    Output: 1
 */
var hIndex = function(citations) {
  // Step 1: Sort the citations array in non-decreasing order
  citations.sort((a, b) => a - b);

  // Step 2: Find the h-index by counting from the most cited to the least cited
  let n = citations.length;
  for (let i = 0; i < n; i++) {
    let h = n - i;
    if (citations[i] >= h) {
      return h;
    }
  }

  return 0;
};


console.log(hIndex([1, 3, 1])); // Output: 1
console.log(hIndex([3, 0, 6, 1, 5])); // Output: 3

