const a = require('./number_tree.js')

const treeSumDFS = (root) => {
	if (root === null) return 0

	return root.val + treeSumDFS(root.left) + treeSumDFS(root.right)
}

const treeSumBFS = (root) => {
	if (root === null) return 0
	const queue = [root]
	let result = 0

	while (queue.length > 0) {
		const current = queue.pop()
		result += current.val

		if (current.left) queue.unshift(current.left)
		if (current.right) queue.unshift(current.right)
	}

	return result
}

console.log(treeSumDFS(a))