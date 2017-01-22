	/**
	 * 判断head是否是环
	 * 我想到的是追击方法
	 * 两个指针，fast 一次跳 2；slow 一次跳 1
	 * 如果不是环，fast 一定会在某一时刻指向 null
	 * 如果是环，fast 和 slow 在未来某一时刻会指向同一
	 */

	/**
	 * @param {ListNode} head
	 * @return {boolean}
	 */
	var hasCycle = function (head) {
		var fast = head
		var slow = head
		if (!head) {
			return false
		}
		while (true) {
			if (fast.next == null || fast.next.next == null) {
				return false
			}
			fast = fast.next.next
			slow = slow.next
			if (fast === slow) {
				return true
			}
		}
	};