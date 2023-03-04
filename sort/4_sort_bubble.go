package main

import fmt

func main() {
    arr := []int{4, 5, 4, 3, 2, 1, 0, 8}

    fmt.Println(arr)
    sortData(arr)
    fmt.Println(arr)
}

func sortData(arr []int) []int {
    for i := 0; i < len(arr); i++ {
        for j := 0; j < len(arr)-i-1; j++ { // len(arr)-i-1 or index out of range
            if arr[j+1] < arr[j] {
                tmp := arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}
