const arr = [5, 3, 4, -1, 3, 66, 2, 1, 0, 6, 7, 8, 9]
let count = 0
const findIndex = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] === item) {
      return i
    }
  }
}

console.log(findIndex(arr, 9))
console.log(count)

const arr2 = [5, 3, 4, -1, 3, 66, 2, 1, 0, 6, 7, 8, 9]
let co1 = 0
//selectSort
const sortArr = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  let povI = Math.floor(arr.length / 2)
  let pivot = arr[povI]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if ((i = povI)) continue
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...sortArr(left), pivot, ...sortArr(right)]
}

console.log("arr2sort", sortArr(arr2))
console.log(co1)

//selectSort-78//BubbleSort-169//m
const findIndex2 = (arr, item) => {
  let start = 0
  let end = arr.length - 1
  let middle
  let found = false
  let pos = -1
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2)
    if (arr[middle] === item) {
      found = true
      pos = middle
    }
    if (item < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return pos
}

console.log(findIndex2(arr2, 5))
