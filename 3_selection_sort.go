package main

import "fmt"

func main() {
	arr := []int{0, 5, 6, 7, 2, 3, 2, 6, 8, 22, 55, 44, 77, 1, 2, 77, 88, 2, 7, 9}
	selectSort(arr)
	fmt.Print(arr)
}

func selectSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		indMin := i
		for j := i + 1; j < len(arr); j++ {
			if arr[j] < arr[indMin] {
				indMin = j
			}
		}
		tm := arr[i]
		arr[i] = arr[indMin]
		arr[indMin] = tm
	}
	return arr
}
