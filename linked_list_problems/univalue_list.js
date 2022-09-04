const b = require('./univalue_node.js')


const isUnivalueList = (head) => {
  let current = head;
  let currentVal = head.val

  while (current !== null) {
  	if (currentVal !== current.val) {
  		return false;
  	}
  	current = current.next
  }

  return true;
};

const isUnivalueListRecursively = (head) => {
	if(head.next === null) return true
	if(head.val !== head.next.val) return false
	return isUnivalueListRecursively(head.next)
}


console.log(isUnivalueListRecursively(b))