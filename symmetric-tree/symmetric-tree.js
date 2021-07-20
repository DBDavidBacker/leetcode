/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    /*
    strategy: make a helper that takes up to two nodes and checks if the first nodes right is equal to the second nodes left
    if so, then recursively check each level
    */
    
    let symetric = true;
    
    let symetryCheck = (a, b) => {
        let aLeft, aRight, bLeft, bRight;
        
        aLeft = a.left === null ? null: a.left.val;
        aRight = a.right === null ? null : a.right.val;
        bLeft = b.left === null ? null: b.left.val;
        bRight = b.right === null ? null : b.right.val;
        
        if (aLeft === bRight && aRight === bLeft) {
            if (a !== b) {
                if (aLeft !== null) {
                    symetryCheck(a.left, b.right);
                }
                if (aRight !== null) {
                    symetryCheck(a.right, b.left);
                }
            } else {
                if (aLeft !== null) {
                    symetryCheck(a.left, b.right);
                }
            }
        } else {
            symetric = false;
        }
    }
    
    
    symetryCheck(root, root);
    
    return symetric;
};