// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  var helper = function(p1, p2, i1, i2) {
    if (p2 < p1 || i2 < i1) {
      return null;
    }
    let val = preorder[p1];
    let index = inorder.indexOf(val);
    let nLeft = index - i1;
    let root = new TreeNode(val);

    root.left = helper(p1 + 1, p1 + nLeft, i1, index - 1);
    root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

    return root;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

// Runtime: 72 ms, faster than 79.52% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
// Memory Usage: 36.4 MB, less than 100.00% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
