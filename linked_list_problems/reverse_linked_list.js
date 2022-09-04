const a = require('./new_node')

const reverseListIteratively = (head) => {
  let current = head;
  let prev = null;
  let next;
  while(current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
};

const reverseListRecursively = (head, prev = null) => {
  if(head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseListRecursively(next, head)
};

const reverseList = (func, head) => {
  if(func === 'iterative') return reverseListIteratively(head)
  if(func === 'recursive') return reverseListRecursively(head)
}

console.log(reverseList('recursive',a))



