/**
 * @param {number[]} nums
 * @return {number}
 */

// 7 0 1 4 4 5 6 
var findMin = function(nums) {
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    let i = 0;
    
    while (i < nums.length - 1 && nums[i] <= nums[i + 1]) {
        i ++;
        //console.log(i)
    }
    
    if (i < nums.length - 1) {
        return nums[i + 1];
    } else {
        return nums[0];
    }
    
};