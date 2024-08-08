// 383. Ransom Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @topics
 * @description
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the
letters from magazine and false otherwise.Each letter in magazine can only be used once in ransomNote.
 * @examples
    Example 1:
    Input: ransomNote = "a", magazine = "b"
    Output: false

    Example 2:
    Input: ransomNote = "aa", magazine = "ab"
    Output: false

    Example 3:
    Input: ransomNote = "aa", magazine = "aab"
    Output: true
 * @constraints
    1 <= ransomNote.length, magazine.length <= 10^5
    ransomNote and magazine consist of lowercase English letters.
 */

var canConstruct = function (ransomNote, magazine) {
  // Create frequency counters for ransomNote and magazine
  const ransomNoteCount = new Map();
  const magazineCount = new Map();

  // Count the frequency of each letter in ransomNote
  for (const char of ransomNote) {
    ransomNoteCount.set(char, (ransomNoteCount.get(char) || 0) + 1);
  }

  // Count the frequency of each letter in magazine
  for (const char of magazine) {
    magazineCount.set(char, (magazineCount.get(char) || 0) + 1);
  }

  // Check if magazine contains enough letters for ransomNote
  for (const [char, count] of ransomNoteCount) {
    if ((magazineCount.get(char) || 0) < count) {
      return false;
    }
  }

  return true;
};
