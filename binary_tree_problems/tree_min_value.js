const numRoot = require('./number_tree.js')

//Iterative Depth First Search
const treeMinValue = (root) => {
	try {
		var start = Date.now();
		if (root === null) return null
		const stack = [ root ]
		let minValue = Number.MAX_VALUE

		while (stack.length > 0) {
			current = stack.pop()

			if (current.val < minValue) {
				minValue = current.val
			}

			if (current.right) stack.push(current.right)
			if (current.left) stack.push(current.left)
		}

		return minValue
	} finally {
		const duration = Date.now() - start

		console.log('duration', duration)
	}
}

//Recursive Depth First Search
const treeMinValueR = (root, minValue = Number.MAX_VALUE) => {
	if (root === null) return minValue

	if (root.val < minValue) minValue = root.val

	const rightValue = treeMinValueR(root.right, minValue)
	const leftValue = treeMinValueR(root.left, minValue)

	return Math.min(rightValue, leftValue)
}


//Iterative Breath First Search
const treeMinValueBFS = (root) => {
	if (root === null) return null

	const queue = [ root ]
	let minValue = Number.MAX_VALUE
	while (queue.length > 0) {
		current = queue.pop()

		if (current.val < minValue) {
			minValue = current.val
		}
		if (current.left) queue.unshift(current.left)
		if (current.right) queue.unshift(current.right)
	}

	return minValue
}

console.log(treeMinValue(numRoot))