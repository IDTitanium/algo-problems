const a = require('./tree_node.js')

const treePathFinder = (root, target) => {
	if (root === null) return null
	if (root.val === target) return [ root.val ]
	if (root.right === null && root.left === null) return null
	
	const rightValues = treePathFinder(root.right, target)
	const leftValues = treePathFinder(root.left, target)

	if (rightValues !== null) {
		rightValues.push(root.val)
		return rightValues
	}

	if (leftValues !== null) {
		leftValues.push(root.val)
		return leftValues
	}

	return null
}

const pathFinder = (root, target) => {
	const result = treePathFinder(root, target)
	if (result === null) return null
	return result.reverse()
}

console.log(pathFinder(a, 'p'))
// console.log(a, 'p')