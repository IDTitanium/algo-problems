/*
Write a function, leafList, 
that takes in the root of a binary tree 
and returns an array containing the values 
of all leaf nodes in left-to-right order.

*/

const leafList = (root) => {
	if (root === null) return []
	const stack = [ root ]

	const result = []
	while (stack.length > 0) {
		const current = stack.pop()

		if (current.right === null && current.left === null) {
			result.push(current.val)
		}

		if (current.right !== null) stack.push(current.right)
		if (current.left !== null) stack.push(current.left)
	}

	return result
}

//Recursive

const leafListRecursive = (root) => {
	if (root === null) return []
	if (root.left === null && root.right === null) return [root.val]

	const rightValues = leafListRecursive(root.right)
	const leftValues = leafListRecursive(root.left)

	return [...leftValues, ...rightValues]
}

const a = require('./tree_node.js')
console.log(leafListRecursive(a))