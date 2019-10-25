// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return true;
  }
  return helper(root, null, null);
};

var helper = function(root, min, max) {
  if (!root) {
    return true;
  }
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};

// Runtime: 68 ms, faster than 48.52% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions for Validate Binary Search Tree.
