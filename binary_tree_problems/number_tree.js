class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(22)
const d = new Node(44)
const e = new Node(4)
const f = new Node(5)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/**
		a (1)
	   / \
	 2 b  c 22
	 / \   \
44  d  4e   5f

 **/

module.exports = a