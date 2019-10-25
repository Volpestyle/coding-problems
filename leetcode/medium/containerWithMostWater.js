// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let max = -Infinity;
  while (i < j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(area, max);
    height[i] <= height[j] ? i++ : j--;
  }
  return max;
};

// Runtime: 64 ms, faster than 54.24% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 35.7 MB, less than 33.33% of JavaScript online submissions for Container With Most Water.
