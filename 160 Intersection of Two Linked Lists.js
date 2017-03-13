/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var pa = headA,
    pb = headB,
    counta = 0,
    countb = 0
  while (pa) {
    counta++
    pa = pa.next
  }
  while (pb) {
    countb++
    pb = pb.next
  }
  var gap = counta - countb
  if (gap >= 0) {
    while (gap > 0) {
      headA = headA.next
      gap--
    }
  } else {
    while (gap < 0) {
      headB = headB.next
      gap++
    }
  }
  while (headA) {
    if (headA === headB) {
      return headA
    } else {
      headA = headA.next
      headB = headB.next
    }
  }
  return null
};
