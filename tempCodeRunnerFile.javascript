const array = [1, 5, 6, 7, 2, 4, 6, 9, 0, 2, 3, 11]

const findIndex = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i
    }
  }
}

console.log(findIndex(5))
