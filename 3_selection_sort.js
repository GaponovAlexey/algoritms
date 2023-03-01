const arr = [0, 5, 6, 7, 2, 3, 2, 6, 8, 22, 55, 44, 77, 1, 2, 77, 88, 2, 7, 9]
let count = 0

const selectSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      count++
    }
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
  }
  return array
}

console.log(selectSort(arr))
console.log(count)
