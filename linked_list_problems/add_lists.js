/**
 * Write a function, addLists, that takes in the head of two linked lists, 
each representing a number. The nodes of the linked lists contain digits as values. 
The nodes in the input lists are reversed; this means that the least significant 
digit of the number is the head. The function should return the head of a new 
linked listed representing the sum of the input lists. The output list should have 
its digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
**/
const printer = require('./printer.js')

const a = require('./new_node')
const b = require('./new_node1')

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  let pointer1 = head1;
  let pointer2 = head2;
  
  const dummyHead = new Node(null)
  let tail = dummyHead
  let carry = 0;
  while (pointer1 !== null || pointer2 !== null) {
    const val1 = pointer1 !== null ? pointer1.val: 0;
    const val2 = pointer2 !== null ? pointer2.val: 0
    let sum = val1 + val2 + carry
  
   carry = 0;
   if (sum > 9) {
      carry = 1;
   }

   let digit = sum % 10;

   tail.next = new Node(digit)
   pointer1 = pointer1 !== null ? pointer1.next: null
   pointer2 = pointer2 !== null ? pointer2.next: null
   tail = tail.next
  }

  if (carry !== 0) tail.next = new Node(carry)

  return dummyHead.next
};

console.log(addLists(a,b))

