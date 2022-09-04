/**
 * Write a function, removeNode, that takes in the head of a linked list 
 * and a target value as arguments. The function should delete the node 
 * containing the target value from the linked list and return the head of 
 * the resulting linked list. If the target appears multiple times in the 
 * linked list, only remove the first instance of the target in the list.
 * Do this in-place.
 * You may assume that the input list is non-empty.
 * You may assume that the input list contains the target.
**/

const a = require('./new_node')

const removeNode = (head, targetVal) => {
  let current = head;
  let prev = null;

  while (current !== null) {
  	if(current.val === targetVal) {
  		if (prev === null) return head.next
  		prev.next = current.next
  		return head
  	}
  	prev = current
  	current = current.next
  }
};

const removeNodeRecursively = (head, targetVal, prev = null) => {
	if (head.val === targetVal) return 
}

console.log(removeNode(a, 6))