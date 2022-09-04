/**
 * Write a function, treeValueCount, that takes in the root of a binary tree and 
 * a target value. The function should return the number of times that 
 * the target occurs in the tree.
 * */
const a = require('./number_tree')

//Iterative DFS
 const treeValueCount = (root, target) => {
 	if (root === null) return 0

 	const stack = [ root ]
 	let count = 0
 	while (stack.length > 0) {
 		const current = stack.pop()

 		if (current.val === target) {
 			count += 1
 		}

 		if (current.right) stack.push(current.right)
 		if (current.left) stack.push(current.left)
 	}

 	return count
 }

const treeValueCountR = (root, target) => {
	if (root === null) return 0
	let match = (root.val === target) ? 1: 0

	const leftCount = treeValueCountR(root.left, target)
	const rightCount = treeValueCountR(root.right, target)

	return leftCount + rightCount + match
}

//Iterative BFS
 const treeValueCountBFS = (root, target) => {
 	if (root === null) return 0

 	const queue = [ root ]
 	let count = 0
 	while (queue.length > 0) {
 		const current = queue.pop()

 		if (current.val === target) {
 			count += 1
 		}

 		if (current.right) queue.unshift(current.right)
 		if (current.left) queue.unshift(current.left)
 	}

 	return count
 }

console.log(treeValueCountBFS(a, 2))