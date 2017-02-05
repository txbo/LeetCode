/**
 * 链表反转
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
var reverseList = function (head) {
  var arr = []
  rList(head)
  return arr

  function rList(list) {
    if (list === null) {
      return
    }
    if (list.next !== null) {
      rList(list.next)
    }
    arr.push(list.val)
  }
};
