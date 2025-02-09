// 713. Subarray Product Less Than K
// Medium
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

// Constraints:

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106

// sliding window
const numSubarrayProductLessThanK = (nums, k) => {
  let left = 0;
  let right = 0;
  let product = 1;
  let subarrays = 0;
  for (right; right < nums.length; right++) {
    product = product * nums[right];
    while (product >= k && left <= right) {
      product = product / nums[left];
      left++;
    }
    if (product < k) {
      subarrays += right - left + 1;
    }
  }
  return subarrays;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
