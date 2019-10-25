// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0

// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let targetFreq = createFreq("balloon");
  let textFreq = createFreq(text);
  let min = Infinity;
  for (let c of "balloon") {
    min = Math.min(min, Math.floor(textFreq[c] / targetFreq[c]));
  }
  return min < Infinity ? min : 0;
};

var createFreq = function(string) {
  let freq = {};
  for (let c of string) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
};

// Runtime: 60 ms, faster than 72.48% of JavaScript online submissions for Maximum Number of Balloons.
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Maximum Number of Balloons.
