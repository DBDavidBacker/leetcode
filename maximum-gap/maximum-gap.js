/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    
    if (nums.length === 1) {
        return 0;
    }
    
    if (nums.length === 2) {
        return Math.abs(nums[1] - nums[0]);
    }
    
    let insertionSort = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        }
    }
    
    //strategy: use bucket sort to sort and then find biggest gap
    
    //step 1: find gaps for each bucket
    
    //the total: subtract the max from the min, then add 1
    //divide the total by the bucket number,
    //if it's point 5 or greater, make an extra bucket to put the last ones in, else just add the rest to the last bucket
    
    //2-4.24, 4.25 - 6.49, 6.50 - 8.74, 8.75 - 9.99 
    
    let buckets = new Array(nums.length);
    
    let min = nums[0];
    let max = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }  
        buckets[i] = [];
    }
    
    let total = max - min + 1;
    
    
    let bucketRange = total / nums.length;
    
    for(let i = 0; i < nums.length; i++) {
        let bucketIndex = Math.round((nums[i] - min + 1) / bucketRange);
        if (bucketIndex > 0) {
            bucketIndex -= 1;
        }
        buckets[bucketIndex].push(nums[i]);
        
        if (buckets[bucketIndex].length > 1) {
            insertionSort(buckets[bucketIndex]);
        }
    }
    
    buckets = buckets.flat();
    
    let gap;
    
    for (let i = 0; i < buckets.length - 1; i++) {
        if (gap === undefined || gap < buckets[i + 1] - buckets[i]) {
            gap = buckets[i + 1] - buckets[i];
        }
    }
    
    return gap;
};