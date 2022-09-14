/*
Write a function, largestComponent, 
that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.
*/

const largestComponent = (graph) => {
  let largestSize = 0
  let visited = new Set()
  for (let key in graph) {
    if(!visited.has(String(key))){
      const newCount = traverseGraph(graph, key, visited)
      if (newCount > largestSize) {
        largestSize = newCount
      }
    }
  }
  
  return largestSize
};

const traverseGraph = (graph, node, visited) => {
  const stack = [ String(node) ]
  let count = 1
  while (stack.length > 0) {
    const current = stack.pop()
    visited.add(String(current))
    for (let neighbor of graph[current]) {
      if (!visited.has(String(neighbor))) {
        stack.push(String(neighbor))
        visited.add(String(neighbor))
        count += 1
      }
    }
  }
  
  
  return count
}