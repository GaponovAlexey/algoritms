function createBinaryTree() {
  const tree = { root: null }

  function add(value) {
    if (!tree.root) return (tree.root = { value, left: null, right: null })
    let node = tree.root
    while (node) {
      if (value > node.value) {
        if (!node.right) break
        node = node.right
      } else {
        if (!node.left) break
        node = node.left
      }
    }
    if (value > node.value) node.right = { value, left: null, right: null }
    else node.left = { value, left: null, right: null }
  }

  function print(root = tree.root) {
    if (!root) return
    console.log(root.value)
    print(root.left)
    print(root.right)
  }

  return { add, print }
}

const tree = createBinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)
tree.print()
