const array = [1, 5, 6, 7, 2, 4, 6, 9, 0, 2, 3, 11]
let count = 0

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(arr[j+1] < arr[j]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
      
    }
  }
}

console.log(array)
console.log(bubbleSort(array))
console.log(array)

