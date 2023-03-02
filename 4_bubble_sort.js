const array = [1, 5, 6, 7, 2, 4, 6, 9, 0, 2, 3, 11]
let count = 0


const bubbleSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if(arr[j+1] < arr[j]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
      
    }
  }
}
const n = array.length
console.log(array)
console.log(bubbleSort(array, n))
console.log(array)

