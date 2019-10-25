// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Note:
// Bonus points if you could solve it both recursively and iteratively.

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
var isSymmetric = function(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
};

var isMirror = function(l, r) {
  let q1 = [l];
  let q2 = [r];
  while (q1.length > 0 && q2.length > 0) {
    let s = q1.shift();
    let t = q2.shift();
    if (!s && !t) {
      continue;
    }
    if (!s || !t || s.val !== t.val) {
      return false;
    }
    q1.push(s.left);
    q1.push(s.right);
    q2.push(t.right);
    q2.push(t.left);
  }
  return true;
};

// Runtime: 60 ms, faster than 73.55% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 35.8 MB, less than 30.00% of JavaScript online submissions for Symmetric Tree.
