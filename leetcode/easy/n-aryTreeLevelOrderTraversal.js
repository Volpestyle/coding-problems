// Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example, given a 3-ary tree:

//         1
//       / | \
//     3   2   4
//   /   \
// 5       6

// We should return its level order traversal:

// [
//      [1],
//      [3,2,4],
//      [5,6]
// ]

// Note:
// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  let res = [];
  let q = [root];
  let depth = 0;
  while (q.length) {
    let queueSize = q.length;
    for (let i = 0; i < queueSize; i++) {
      let s = q.shift();
      q.push(...s.children);
      if (!res[depth]) {
        res[depth] = [];
      }
      res[depth].push(s.val);
    }
    depth++;
  }
  return res;
};

// Runtime: 628 ms, faster than 33.04% of JavaScript online submissions for N-ary Tree Level Order Traversal.
// Memory Usage: 81.4 MB, less than 20.00% of JavaScript online submissions for N-ary Tree Level Order Traversal.
