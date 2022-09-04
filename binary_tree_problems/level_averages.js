/*
Write a function, levelAverages, 
that takes in the root of a binary tree that contains number values. 
The function should return an array containing the average value of each level.

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

levelAverages(a); // -> [ 3, 7.5, 1 ] 
*/

const a = require('./number_tree.js')

const levelAverages = (root) => {
	if (root === null) return []
	const stack = [ {node: root, level: 0} ]
	
	const levelAverages = []
	while (stack.length > 0) {
		const {node, level} = stack.pop()

		if (level in levelAverages) {
			levelAverages[level].push(node.val)
		} else {
			levelAverages[level] = [node.val]
		}
		if (node.right) stack.push({node: node.right, level: level + 1})
		if (node.left) stack.push({node: node.left, level: level + 1})
	}

	for (let i = 0; i<levelAverages.length; i++) {
		const sum = levelAverages[i].reduce((a,b) => (a+b), 0)
		const avg = sum / levelAverages[i].length

		levelAverages[i] = avg
	}

	return levelAverages
}




console.log(levelAverages(a))