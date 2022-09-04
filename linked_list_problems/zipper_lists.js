const a = require('./new_node')
const b = require('./new_node1')
const printList = require('./printer.js')

const zipperLists = (head1, head2) => {
  let current1 = head1
  let current2 = head2
  let tail = current1;
  current1 = current1.next;
  let count = 1;

  while(current1 !== null && current2 !== null) {
  	if(count % 2 === 0) {
  		tail.next = current1
  		tail = current1
  		current1 = current1.next
  		count += 1
  	} else {
  		tail.next = current2
  		tail = current2
  		current2 = current2.next
  		count += 1
  	}
  }

  if(current1 === null && current2 !== null) {
  	tail.next = current2
  	
  } else if(current1 !== null && current2 === null) {
  	tail.next = current1
  }

  return head1
};

const newListHead = zipperLists(a,b)

printList(newListHead)


