/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //strategy: sort nums and then do the next permutation trick to order them each time;
    
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
            if (arr[i] > arr[j]) {
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