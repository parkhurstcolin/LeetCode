/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

var flatten = function (head) {
    if (head == null) return head;
    let results = new _Node(head.val, null, null, null);
    let r = results
    function traverse(h) {
        if (h == null) return;
        let node = new _Node(h.val, r, null, null)
        r.next = node
        r = r.next
        traverse(h.child);
        traverse(h.next);
    }

    traverse(head.child)
    traverse(head.next)

    return results;
}