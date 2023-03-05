package main

import fmt

func breadthSearch(graph map[string][]string, start, end string) bool {
	queue := []string{start}
	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		if _, ok := graph[current]; !ok {
			graph[current] = []string{}
		}
		if contains(graph[current], end) {
			return true
		} else {
			queue = append(queue, graph[current]...)
		}
	}
	return false


func contains(slice []string, element string) bool {
	for _, item := range slice {
		if item == element {
			return true
		}
	}
	return false
}

func main() {
	graph := make(map[string][]string)
	graph[a] = []string{b, c}
	graph[b] = []string{f}
	graph[c] = []string{d, e}
	graph[d] = []string{f}
	graph[e] = []string{f}
	graph[f] = []string{g}

	fmt.Println(breadthSearch(graph, a, g))
}
