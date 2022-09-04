/**
 * 
 * Write a function, treeLevels, that takes in the root of a binary tree. 
 * The function should return a 2-Dimensional array where each subarray 
 * represents a level of the tree.
 * 
 * 		a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
 * */
 
const a = require('./tree_node.js')

const treeLevels = (root) => {
	if (root === null) return []
	const queue = [ {node: root, level: 0} ]

	const levelArr = []

	while (queue.length > 0) {
		const current = queue.pop()

		if (current.level in levelArr) {
			levelArr[current.level].push(current.node.val)
		} else {
			levelArr[current.level] = [current.node.val]
		}
		if (current.node.left) queue.unshift({node: current.node.left, level: current.level + 1})
		if (current.node.right) queue.unshift({node: current.node.right, level: current.level + 1})
	}

	return levelArr
}

const treeLevelsDFS = (root) => {
	if (root === null) return []
	const stack = [ {node: root, level: 0} ]
	
	const levels = []
	while (stack.length > 0) {
		const current = stack.pop()

		if (current.level in levels) {
			levels[current.level].push(current.node.val)
		} else {
			levels[current.level] = [current.node.val]
		}
		if (current.node.right) stack.push({node: current.node.right, level: current.level + 1})
		if (current.node.left) stack.push({node: current.node.left, level: current.level + 1})
	}
	
	return levels
}

console.log(treeLevelsDFS(a))





