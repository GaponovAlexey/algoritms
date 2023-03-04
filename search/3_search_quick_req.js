const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0
const item = 10

const quickSearch = (arr, item, start, end) => {
  count++
  let middle = Math.floor((start + end) / 2)
  if (item === arr[middle]) {
    return middle
  }
  if (item < arr[middle]) {
    return quickSearch(arr, item, start, middle - 1)
  } else {
    return quickSearch(arr, item, middle + 1, end)
  }
}
console.log(quickSearch(arr, item, 0, arr.length)) // item - search 10

console.log(count)
