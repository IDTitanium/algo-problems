const a = require('./tree_node.js')

const depthFirstValues = (root) => {
	if (root === null) return []
	const stack = [ root ]
	const result = []
	while (stack.length > 0) {
		let current = stack.pop()
		result.push(current.val)

		if (current.right) stack.push(current.right)
		if (current.left) stack.push(current.left)
	}

	return result
}

const depthFirstValuesRecursive = (root) => {
	if (root === null) return []

	const rightValues = depthFirstValuesRecursive(root.right)
	const leftValues = depthFirstValuesRecursive(root.left)

	return [root.val, ...leftValues, ...rightValues]
}

console.log(depthFirstValuesRecursive(a))