const a = require('./new_node')

const getNodeValueRecursively = (head, index) => {
  if(head === null) return null;
  if(index === 0) return head.val
  index -= 1
  return getNodeValueRecursively(head.next, index)
};

const getNodeValueIteratively = (head, index) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if(index === count) return current.val
    count++
    current = current.next
  }
  return null
}

const getNodeValue = (funcType, ...args) => {
  if(funcType === 'recursive') return getNodeValueRecursively(...args)
  if(funcType === 'iterative') return getNodeValueIteratively(...args)
}

console.log(getNodeValue('iterative', a, 2))
