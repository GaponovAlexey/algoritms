const arr = [0, 5, 6, 7, 2, 3, 2, 6, 8, 22, 55, 44, 77, 1, 2, 77, 88, 2, 7, 9]
let count = 0


function quickSorts(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[arr.length - 1]
  const leftArr = []
  const rightArr = []

  for (let i = 0; i < arr.length - 1; i++) {
    count++
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSorts(arr))
console.log(count)
