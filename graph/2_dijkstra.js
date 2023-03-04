const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}


const shortPath = (graph, start, end) => {
  const costs = {}
  const processed = []
  const neighbors = {}
  Object.keys(graph).forEach(n => {
    if(n !== start) {
      let value = graph[start][n]
      costs[mode] = value || 10000

    }
  })
  console.log(costs)
  
}