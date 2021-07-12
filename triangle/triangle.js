/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length === 1) {
        return triangle[0][0];
    }
    
    
    // work up from the bottom, transforming the options into their lesser sum
    
    let helper = (row, column) => {
        let first = triangle[row][column] + triangle[row + 1][column];
        let second = triangle[row][column] + triangle[row + 1][column + 1];
        
        first < second ? triangle[row][column] = first : triangle[row][column] = second; 
    }
    
    for (let i = triangle.length - 2; i >=0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            helper(i, j);
        }
    }
    
    console.log(triangle);
    
    return triangle[0][0]
};