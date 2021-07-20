/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
/*var generateTrees = function(n) {
    
    /*
    strategy: an array for storage, in that array a nested array each with a    tree and a remaining node number, if remaining is 2 or more, push right, left, and right/left, if 1 just right and left, if 0 then push to results; 
    
    
    
    
    let result = [];
   
    

    

    
   /* let helper = (node, count) => {
        console.log(root, count)
        if (count === 0) {
            
            result.push({...root});
            
        }
        
        if (count >= 1) {
            node.left = new TreeNode(node.val + 1);
            helper(node.left, count - 1);
            node.left = null;
            
            node.right = new TreeNode(node.val + 1);
            helper(node.right, count - 1);
            node.right = null;
            
        }
        
        if (count >= 2) {
            node.left = new TreeNode(node.val + 1);
            node.right = new TreeNode(node.val + 2);
            helper(node.left, count - 2);
            if (count > 2) {
                helper(node.right, count - 2);
            }
            node.left = null;
            node.right = null;
        }
    }
    
    var permuteUnique = function(nums) {
     let result = [];
    let done = false;
    
    let swap = (arr,i,j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    let reverse = (arr, start, end) => {
        let i = start;
        let j = end;
        
        while (i < j) {
            if (arr[i] >= arr[j]) {
            swap(arr, i, j);
                i++;
                j--;
            }
        }
    }
    
    let helper = (arr) => {
        
        let i = arr.length - 2;
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--
        }
        if (i >= 0) {
            let j = arr.length - 1;
            while (arr[j] <= arr[i] && j >= 0) {
                j--;
            }
            swap(arr, i, j);
            reverse(arr, i + 1, arr.length - 1);
            return [...arr];
        } else {
            done = true;
            return;
        }
    }
    
    nums.sort((a,b) => {return a -b})
    result.push([...nums]);
    while (done === false) {
        result.push(helper(nums));
    }
    result.pop()
    return result
    
};
    
    let insertion = (node, value) => {
        if (node.val > value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } else {
                insertion(node.left, value);
            }
        }
        
        if (node.val < value) {
            if (node.right === null) {
                node.right = new TreeNode(value);
            } else {
                insertion(node.right, value);
            }
        }
    }
    
    let integers = [];
   
    for (let i = 1; i <= n; i++) {
        integers.push(i);
    };
    
    let permutations = permuteUnique(integers);
    
    
    let duplicateRem = (arr) => {
        if (arr.length < 3) {
            return true;
        }
        for (let i = 0; i < arr.length - 2; i++) {
            if (arr[i] < arr[i + 1] && arr[i] > arr[i + 2]) {
                return false;
            }
        }
        
        return true;
    }
    
    permutations = permutations.filter((element) => {
      return  duplicateRem(element) === true
    })
    
    function isSameTree(p, q) {
    
    /*strategy: 
    create a function that checks if the two values are the same
    make a stack that puts all the values, and then go through the stack and see if each value is the same at each point
    if they aren't the same, return false
    
    
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
    
    let helper = (nums) => {
        let newRoot = new TreeNode(nums[0]);
        for (let i = 1; i < nums.length; i++) {
            insertion(newRoot, nums[i]);
        }
        
        //console.log(newRoot, result[result.length - 1])
       if (result.length === 0 || isSameTree(newRoot, result[result.length - 1]) === false ) {
            result.push(newRoot);
        }
        
    }
    
    for (let i = 0; i < permutations.length; i++) {
        helper(permutations[i]);
       
    }
    
    return result;
    
};*/

/*
[123], [132], [213], [231], [312], [321]
[1234], [1243] [1]
*/

var generateTrees = function(n) {
   
    
    const constructArray = (start, end) => {
        const result = [];
        
        if(start > end){
            return [null];
        }
        
        if(start===end){
            return [new TreeNode(start)];
        }
        
        if(end-start===1){
            const first = new TreeNode(start, null, new TreeNode(end));
            const second = new TreeNode(end, new TreeNode(start), null);
            return [first, second];
        }
        
        for(let i=start; i<=end; i++){
            const leftSide = constructArray(start, i-1);
            const rightSide = constructArray(i+1, end);
            
            leftSide.forEach(ls => {
                rightSide.forEach(rs => {
                    const tree = new TreeNode(i, ls, rs);
                    
                    result.push(tree);
                })
            })
        }
        
        return result;
    }
    
    return constructArray(1,n);
};

