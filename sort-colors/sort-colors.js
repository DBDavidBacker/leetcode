/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = 0;
    let i = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            red += 1;
        }
        if (nums[i] === 1) {
            white += 1;
        }
        if (nums[i] === 2) {
            blue += 1;
        }
    }
    
    while (red > 0) {
        nums[i] = 0;
        red -= 1;
        i += 1;
    }
    
    while (white > 0) {
        nums[i] = 1;
        white -= 1;
        i += 1;
    }
    
     while (blue > 0) {
        nums[i] = 2;
        blue -= 1;
        i += 1;
    }
    
    return nums
};