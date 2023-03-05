const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
            e: 22,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
]
console.log(tree)

//recursive
const recursive = (tree) => {
  count++
  let sum = 0
  tree.map((el) => {
    sum += el.v
    if (!el.c) {
      
      return el.c
    }

    sum += recursive(el.c)
  })
  return sum
}

console.log(recursive(tree))

//iterative
const iterative = (tree) => {
  if (!tree.length) {
    return 0
  }
  let sum = 0
  let stack = []
  tree.map((el) => stack.push(el))
  while (stack.length) {
    const node = stack.pop()
    sum += node.v
    if (node.c) {
      node.c.map((ch) => stack.push(ch))
    }
  }
  return sum
}

console.log(iterative(tree))
