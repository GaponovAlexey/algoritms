const arr = [0, 5, 6, 7, 2, 3, 2, 6, 8, 22, 55, 44, 77, 1, 2, 77, 88, 2, 7, 9]
const arr2 = [0, 5, 6, 7, 2, 3, 2, 6, 8, 22, 55, 44, 77, 1, 2, 77, 88, 2, 7, 9]
let count = 0

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  let povIndex = Math.floor(arr.length / 2)
  let pivot = arr[povIndex]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    count++
    if (i === povIndex) continue
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr))

console.log(count)
let c2 = 0

function quickSorts(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[arr.length - 1]
  const leftArr = []
  const rightArr = []

  for (let i = 0; i < arr.length - 1; i++) {
    c2++
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSorts(arr2))
console.log(c2)
