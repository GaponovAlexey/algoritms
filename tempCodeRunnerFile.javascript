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



const cashFunc = cashF(facto)
cashFunc(5)
cashFunc(4)
cashFunc(4)
cashFunc(5)
// cashFunc(1)
