// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example:
// Given 1->2->3->4, you should return the list as 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let newHead = new ListNode(0);
  newHead.next = head;
  let cur1 = newHead;
  let prev, fast;
  while (cur1.next && cur1.next.next) {
    prev = cur1;
    cur1 = cur1.next;
    fast = cur1.next;

    cur1.next = fast.next;
    fast.next = cur1;
    prev.next = fast;
  }
  return newHead.next;
};

// Runtime: 52 ms, faster than 80.83% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 33.9 MB, less than 26.32% of JavaScript online submissions for Swap Nodes in Pairs.
