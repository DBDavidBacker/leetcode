/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
    if (nums.length === 1) {
        return nums[0] === target;
    }
    
    let helper = (start, end) => {
        let center = Math.floor((start + end) / 2);
        //console.log(start, 'start', end, 'end', center, 'center')
        
        if (end < start) {
                  return false;
                }
        
        if (target === nums[center]) {
            return true;
        } else {
               
            
            if (target > nums[center]) {
                return helper(center + 1, end);
            }
            if (target < nums[center]) {
                return helper(start, center - 1);
            }
        }
        
     
    }
    
    let i = 0;
    
    while(nums[i] <= nums[i + 1] && i < nums.length) {
        i++;
    }
    
    if (i < nums.length) {
        nums = nums.slice(i  + 1, nums.length).concat(nums.slice(0, i + 1));
        //console.log('nums');
    }
    
    //console.log(nums)
    return helper(0, nums.length - 1);
};