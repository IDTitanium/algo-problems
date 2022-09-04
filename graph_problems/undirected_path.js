/*

Write a function, undirectedPath, that takes in an array of edges for an 
undirected graph and two nodes (nodeA, nodeB). 
The function should return a boolean indicating whether or not there 
exists a path between nodeA and nodeB.

*/
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const undirectedPath = (edges, nodeA, nodeB) => {
	const graph = {}
	for (let i = 0; i < edges.length; i++) {
		const edge = edges[i]
		if (edge.length < 1) continue
		if (!(edge[0] in graph)) graph[edge[0]] = []
		if (!(edge[1] in graph)) graph[edge[1]] = []
		graph[edge[0]].push(edge[1])
		graph[edge[1]].push(edge[0])
	}

	return hasPath(graph, nodeA, nodeB)
}

const hasPath = (graph, src, dst) => {
	const stack = [src];
	const visited = new Set()
	while (stack.length > 0) {
		const current = stack.pop();

		if (current === dst) return true;

		visited.add(current)
		for (let neighbor of graph[current]) {
			if (visited.has(neighbor)) continue;
			stack.push(neighbor);
		}
	}

	return false;
}

console.log(undirectedPath(edges, 'j', 'm'))