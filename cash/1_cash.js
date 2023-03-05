const cashF = (fn) => {
  const cash = {}
  return function (n) {
    if (cash[n]) {
      console.log("взято из кеша", cash[n])

      return cash[n]
    }

    let result = fn(n)

    console.log("из функции", cash)
    cash[n] = result
    return result
  }
}


///facto
const facto = (n) => {
  let res = 1
  while (n != 1) {
    res *= n
    n -= 1
  }
  return res
}

//use
const cashFunc = cashF(facto)
console.log(cashFunc(5))
console.log(cashFunc(3))
console.log(cashFunc(4))
console.log(cashFunc(4))
