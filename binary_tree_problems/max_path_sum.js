const numRoot = require('./number_tree.js')

//Recursive DFS
const maxPathSum = (root) => {
	if (root === null) return 0

	const leftValue = maxPathSum(root.left)
	const rightValue = maxPathSum(root.right)

	return Math.max(leftValue, rightValue) + root.val
}

/**
 *   numRoot
 * 
 * 	    1
	   / \
	  2   22 
	 / \   \
    44  4   5

 * **/

console.log(maxPathSum(numRoot))