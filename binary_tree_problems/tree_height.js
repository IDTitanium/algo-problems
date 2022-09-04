/**
 * 
 * Write a function, howHigh, that takes in the root of a binary tree. 
 * The function should return a number representing the height of the tree.

	The height of a binary tree is defined as the maximal number of edges 
	from the root node to any leaf node.
	If the tree is empty, return -1.
 * 
 * 
 * **/
  
const howHigh = (root) => {
	if (node === null) return -1
	let anode = node !== null? 1: 0
	
	const rightValue = howHigh(node.right)
	const leftValue = howHigh(node.left)
  	const largerValue = Math.max(rightValue, leftValue)
  
  	return anode + largerValue
}

const a = require('./tree_node.js')
console.log(howHigh(a))
