/*
Write a function, connectedComponentsCount, that takes in the adjacency list of an 
undirected graph. 
The function should return the number of connected components within the graph.
*/

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

const connectedComponentsCount = (graph) => {
	const visited = new Set()
	let count = 0

	for (const key in graph) {
		if (visited.has(Number(key))) continue;
		if (traverseDFS(graph, key, visited) === true) {
			count += 1
		}
	}	

	return count
}

const traverseDFS = (graph, current, visited) => {
	const stack = [ Number(current) ]
	while (stack.length > 0) {
		const current = stack.pop()

		visited.add(current)
		for (let neighbor of graph[current]) {
			if (visited.has(neighbor)) continue
			stack.push(neighbor)
		}
	}
	return true
}


console.log(connectedComponentsCount(graph))