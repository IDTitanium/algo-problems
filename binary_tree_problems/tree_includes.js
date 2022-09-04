const a = require('./tree_node')

const treeIncludes = (root, value) => {
	if (root === null) return false
	if (root.val === value) return true

	const leftBool = treeIncludes(root.left, value)
	const rightBool = treeIncludes(root.right, value)

	return leftBool || rightBool
}


const treeIncludesBFS = (root, value) => {
	if (root === null)
}

console.log(treeIncludes(a, 'f'))