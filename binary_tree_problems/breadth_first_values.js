const a = require('./tree_node.js')

const breadthFirstValues = (root) => {
	if (root === null) return []
	const queue = [ root ]

	const result = []

	while (queue.length > 0) {
		let current = queue.pop()

		result.push(current.val)

		if (current.left) queue.unshift(current.left)
		if (current.right) queue.unshift(current.right)
	}

	return result
}

const breadthFirstValuesRecursive = (root) => {
	if (root === null) return []

	leftValues = breadthFirstValuesRecursive(root.left)
	righValues = breadthFirstValuesRecursive(root.right)

	return [root.val, ...leftValues, ...righValues]
}

console.log(breadthFirstValuesRecursive(a))