/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let result = new ListNode(0, null);
    let node = result
    while(list1 && list2){
        if(list1.val < list2.val){
            node.next = new ListNode(list1.val, null)
            list1 = list1.next;
        } else {
            node.next = new ListNode(list2.val, null)
            list2 = list2.next;
        }
        node = node.next
    }
    while(list1){
        node.next = new ListNode(list1.val, null);
        list1 = list1.next
        node = node.next
    }
    while(list2){
        node.next = new ListNode(list2.val, null);
        list2 = list2.next
        node = node.next
    }
    return result.next
};