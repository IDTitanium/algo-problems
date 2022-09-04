/**
 * 
 * Write a function, allTreePaths, that takes in the root of a binary tree. 
 * The function should return a 2-Dimensional array where each subarray 
 * represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, 
but the relative order among paths in the outer array does not matter.
 * 
 * 
 * 
 * */
 
const a = require('./tree_node.js')

const allTreePaths = (root) => {
	if (root === null) return []
	if (root.left === null && root.right === null) {
		return [ [root.val] ]
	}

	const leftValues = allTreePaths(root.left)
	const rightValues = allTreePaths(root.right)

	const newArr = []
	if (leftValues.length > 0) {
		for (const leftVal of leftValues) {
			leftVal.unshift(root.val)
			newArr.push(leftVal)
		}
	}

	if (rightValues.length > 0) {
		for (const righVal of rightValues) {
			righVal.unshift(root.val)
			newArr.push(righVal)
		}
	}
	
	return newArr
}

console.log(allTreePaths(a))




