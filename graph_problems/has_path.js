/*

Write a function, hasPath, that takes in an object representing the adjacency list 
of a directed acyclic graph and two nodes (src, dst). 
The function should return a boolean indicating whether 
or not there exists a directed path between the source and destination nodes.


*/

const graph = require('./graph.js')

const hasPath = (graph, src, dst) => {
	const stack = [ src ]

	while (stack.length > 0) {
		let current = stack.pop()

		if (current === dst) return true

		for (let neighbor of graph[current]) {
			stack.push(neighbor)
		}
	}

	return false
}

console.log(hasPath(graph, 'f', 'y'))