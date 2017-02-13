/**
 * 指定反转链表部分
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var reverseList = function(head, count, index) {
    var m = head,
      n
    if (m === null) {
      return head
    }
    while (m.next !== null && index < count) {
      n = m.next
      m.next = n.next
      n.next = head
      head = n
      index++
    }
    return head
  };

  var index = 1
  var prev = new ListNode(0)
  prev.next = head
  head = prev
  var second = prev.next
  while (index < m) {
    prev = prev.next
    second = prev.next
    index++
  }
  prev.next = null
  second = reverseList(second, n, index)
  prev.next = second
  return head.next

};
