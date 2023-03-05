const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}
console.log(graph)

const shortPath = (graph, start, end) => {
  const costs = {}
  const processed = []
  let neighbors = {}
  Object.keys(graph).forEach((n) => {
    if (n !== start) {
      let value = graph[start][n]
      costs[n] = value || Infinity
    }
  })
  let node = findNodeLowestCost(costs, processed)
  while (node !== end) {
    const cost = costs[node]
    neighbors = graph[node]
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor]
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost
      }
    })
    processed.push(node)
    node = findNodeLowestCost(costs, processed)
  }
  return costs
}

const findNodeLowestCost = (costs, processed) => {
  let lowestCost = Infinity
  let lowestNode
  Object.keys(costs).forEach((node) => {
    let cost = costs[node]
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestNode = node
    }
  })
  return lowestNode
}

console.log(shortPath(graph, "a", "g"))
