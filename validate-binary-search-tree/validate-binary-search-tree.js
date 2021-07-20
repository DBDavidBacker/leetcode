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
var isValidBST = function(root) {
    /*
    make a helper to validate through each node, imposing a greater than or less than that updates with left and right changes
    */
    
    let valid = true
    
    let helper = (node, lessThan = 100000000000, greaterThan = -100000000000) => {
        console.log(node,lessThan,greaterThan)
        if (valid === true){
            if (node.val >= lessThan || node.val <= greaterThan) {
           valid = false;
        }
        if (node.left !== null) {
            if ( node.val < lessThan) {
               helper(node.left, node.val, greaterThan);
            }
        } if (node.right !== null) {
            if (node.val > greaterThan) {
                helper(node.right, lessThan, node.val);
            }
        }
        }
        
      
    }
    
     helper(root);
    return valid;
};