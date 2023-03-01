const array = [1, 5, 6, 7, 2, 4, 6, 9, 0, 2, 3, 11]
let count = 0

const findIndex = (a, f) => {
  for (let i = 0; i < a.length; i++) {
    count++
    if (a[i] === f) {
      return i
    }
  }
  return nul
}

console.log(findIndex(array, 11))
console.log(count) 
