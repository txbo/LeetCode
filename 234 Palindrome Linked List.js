/**
 * 判断一个链表是否是 回文链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var prev = head
  var back = head
  if (head === null) {
    return true
  }
  while (back.next !== null && back.next.next !== null) {
    prev = prev.next
    back = back.next.next
  }
  var second = prev.next
  var first = head
  prev.next = null
  second = reverseList(second)
  while (second !== null) {
    if (second.val !== first.val) {
      return false
    } else {
      first = first.next
      second = second.next
    }
  }
  return true

  function reverseList(head) {
    var m = head,
      n
    if (m === null) {
      return head
    }
    while (m.next !== null) {
      n = m.next
      m.next = n.next
      n.next = head
      head = n
    }
    return head
  };


};
