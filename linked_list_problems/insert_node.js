/**
 * Write a function, insertNode, that takes in the head of a linked list, a value, 
 * and an index. The function should insert a new node with the value into the 
 * list at the specified index. Consider the head of the linked list as index 0. 
 * The function should return the head of the resulting linked list.
 * 
 * **/

// Do this in-place.

// You may assume that the input list is non-empty and the index is 
// not greater than the length of the input list.
const a = require('./new_node1.js')
const printer = require('./printer.js')

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  let current = head;
  let count = 0;

  const newNode = new Node(value)
  while (current !== null) {
    if (count === index) {
      newNode.next = current
      return newNode
    }
    if(count === index - 1) {
      newNode.next = current.next
      current.next = newNode
      return head
    }
    count += 1
    current = current.next
  }
  
  return head
};


const insertNodeRecursively = (head, value, index) => {
  if 
}

printer(insertNode(a, 'w', 9))