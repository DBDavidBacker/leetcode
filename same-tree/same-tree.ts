/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    
    /*strategy: 
    create a function that checks if the two values are the same
    make a stack that puts all the values, and then go through the stack and see if each value is the same at each point
    if they aren't the same, return false
    */
    
    let stackOne = [];
    let stackTwo = [];
    
    let stackMaker = (node, stack) => {
        node === null ? stack.push(null) : stack.push(node.val);
        
        if (node !== null) {
            stackMaker(node.left, stack);
        }
        
        if (node !== null) {
            stackMaker(node.right, stack);
        }
    }
    
    stackMaker(p, stackOne);
    stackMaker(q, stackTwo);
    
    //console.log(stackOne, 'stackOne');
    //console.log(stackTwo, 'stackTwo');
    
    if (stackOne.length !== stackTwo.length) {
        return false;
    }
    
    for (let i = 0; i < stackOne.length; i++) {
        if (stackOne[i] !== stackTwo[i]) {
            return false;
        }
    }
    return true;

};