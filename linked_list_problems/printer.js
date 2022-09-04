const printList = (head) => {
	let current = head
	while(current !== null) {
		console.log(current.val)
		current = current.next
	}
}

module.exports = printList