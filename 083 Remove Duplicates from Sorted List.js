/**
 * 链表去重
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
var deleteDuplicates = function(head) {
  if (!head) {
    return []
  }
  find(head)
  return head

  function find(head) {
    if (head.next === null) {
      return
    } else {
      if (head.val === head.next.val) {
        head.next = head.next.next
        find(head)
      } else {
        find(head.next)
      }
    }
  }
};
