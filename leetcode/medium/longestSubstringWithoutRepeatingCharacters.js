// Given a string s, find the length of the longest substring without repeating characters.

/** Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
 */

const longestSubstringWithoutRepeatingCharacters = (s) => {
  const map = new Map();
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      count = 0;
      i = map.get(s[i]) + 1;
      map.clear();
    }
    count++;
    map.set(s[i], i);
    max = Math.max(max, count);
  }
  return max;
};
