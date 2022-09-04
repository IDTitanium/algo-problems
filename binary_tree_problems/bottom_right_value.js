/**
 * 
 * Write a function, bottomRightValue, 
 * that takes in the root of a binary tree. 
 * The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.
 * 
 * */
 
const a = require('./tree_node.js')
const b = require('./number_tree.js')
 
const bottomRightValue = (root) => {

	const queue = [ root ]
	let value = root.val
	while (queue.length > 0) {
		const current = queue.pop()
		value = current.val
		if (current.left) queue.unshift(current.left)
		if (current.right) queue.unshift(current.right)
	}

	return value
}

console.log(bottomRightValue(a))
console.log(bottomRightValue(b))