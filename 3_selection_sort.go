package main

import "fmt"

func selectSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		minI := i
		for j := i + 1; j < len(arr); j++ {
			if arr[j] < arr[minI] {
				minI = j
			}
		}
		tap := arr[i]
		arr[i] = arr[minI]
		arr[minI] = tap
	}
	return arr
}

func main() {
	arr := []int{0, 5, 6, 7, 2, 3, 2, 6, 8, 22, 55, 44, 77, 1, 2, 77, 88, 2, 7, 9}
	sortedArr := selectSort(arr)
	fmt.Println(sortedArr)
}
