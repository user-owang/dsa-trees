/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    }
    let queue = [this.root];
    let depth = 0;
    while (queue.length) {
      depth++;
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const current = queue.shift();
        if (!current.right && !current.left) {
          return depth;
        }
        if (current.right) {
          queue.push(current.right);
        }
        if (current.left) {
          queue.push(current.left);
        }
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }
    let queue = [this.root];
    let depth = 0;
    while (queue.length) {
      depth++;
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const current = queue.shift();
        if (current.right) {
          queue.push(current.right);
        }
        if (current.left) {
          queue.push(current.left);
        }
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // if(!this.root){
    //   return 0
    // }
    // let stack= []
    // let largestSum = this.root.val
    // if(this.root.val < 0){
    //   if(this.root.right){
    //     stack.push(this.root.right)
    //   }
    //   if(this.root.left){
    //     stack.push(this.root.left)
    //   }
    // }
    // while(stack.length){
    //   const current = stack.pop()
    //   if (largestSum < 0){
    //     largestSum = current.val
    //   } else if()
    // }
    // return largestSum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let bound = null;
    let stack = [this.root];
    while (stack.length) {
      let current = stack.pop();
      if (bound || bound === 0) {
        if (lowerBound < current.val && current.val < bound) {
          bound = current.val;
        }
      } else if (lowerBound < current.val) {
        bound = current.val;
      }
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    return bound;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
