/**
 * 两条非空反序链表相加
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var count = 0
  return add(l1, l2)

  function add(l1, l2) {
    var value = l1.val + l2.val + count
    count = 0
    if (value >= 10) {
      value = value % 10
      count = 1
    }
    var node = new ListNode(value)
    if (l1.next === null && l2.next === null && count === 0) {
      return node
    } else {
      if (l1.next === null) {
        l1.next = new ListNode(0)
      }
      if (l2.next === null) {
        l2.next = new ListNode(0)
      }
      node.next = add(l1.next, l2.next)
    }
    return node
  }
};