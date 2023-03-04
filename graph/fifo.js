const graph = {}
graph.a = [b, c]
graph.b = [f]
graph.c = [d, e]
graph.d = [f]
graph.e = [f]
graph.f = [g]
console.log(graph)

// Очередь в ширину
// находит путь
const count = 0

const breadthSearch = (graph, start, end) => {
  count++
  let queue = []
  queue.push(start)
  while (queue.length > 0) {
    const current = queue.shift()
    if (!graph[current]) {
      graph[current] = []
    }
    if (graph[current].includes(end)) {
      return true
    } else {
      queue = [...queue, ...graph[current]]
    }
  }
}

console.log(breadthSearch(graph, a, f))
console.log(count)
