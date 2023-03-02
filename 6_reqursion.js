const factorial = (n) => {
  if(n === 1) {
    return 1
  }
  return n * factorial (n - 1)
}

console.log(factorial(4))


const fibonacciSearch = (n) => {
  if(n === 1 || n === 2) {
    return 1
  }

  return fibonacciSearch(n-1) + fibonacciSearch(n - 2)

}

console.log(fibonacciSearch(4))

