// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix.length) return "";
    }
  }
  return prefix;
};

// Runtime: 56 ms, faster than 79.96% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 34 MB, less than 65.63% of JavaScript online submissions for Longest Common Prefix.
