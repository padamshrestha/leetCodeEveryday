function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Time Complexity: O(logN)
// var hasPathSum = function(root, target) {
//   if (!root) return false;
//   function helper(root, currSum) {
//     currSum = currSum + root.val;
//     if (!root.left && !root.right) {
//       return currSum === target;
//     }
//     if (root.left) {
//       if (helper(root.left, currSum)) return true;
//     }
//     if (root.right) {
//       return helper(root.right, currSum);
//     }
//     return false;
//   };
//   return helper(root, 0);
// };

// Time Complexity: O(logN)
var hasPathSum = function(root, sum) {
  if (!root) return false;
  if (!root.right && !root.left && root.val === sum) return true;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

// One-liner
var hasPathSum = function(root, sum) {
  return root !== null && ((root.left || root.right) ? hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val) : sum === root.val);
}

var node = new TreeNode(5);
node.left = new TreeNode(4);
node.right = new TreeNode(8);
node.left.left = new TreeNode(11);
node.left.left.left = new TreeNode(7);
node.left.left.right = new TreeNode(2);
node.right.left = new TreeNode(13);
node.right.right = new TreeNode(4);
node.right.right.right = new TreeNode(1);
// console.log(node);
console.log(hasPathSum(node, 22)); // true
var node1 = new TreeNode(1);
console.log(hasPathSum(node1, 0)); // false