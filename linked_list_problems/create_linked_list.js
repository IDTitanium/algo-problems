/***
 * Write a function, createLinkedList, 
 * that takes in an array of values as an argument. 
 * The function should create a linked list containing each element of the 
 * array as the values of the nodes. The function should return 
 * the head of the linked list.

test_00:
createLinkedList(["h", "e", "y"]);
// h -> e -> y
 * 
 * */

const printer = require('./printer.js')

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  if (values.length < 1) return null
  const head = new Node(values[0])
  let current = head
  if(values.length < 2) return head
  for (i = 1; i < values.length; i++) {
    current.next = new Node(values[i])
    current = current.next
  }
  
  return head
};

printer(createLinkedList([1,2,3]))