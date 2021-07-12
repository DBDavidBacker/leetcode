/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    class Queue {
        constructor() {
            this.storage = [];
            this.first = 0;
            this.last = 0;
        }
        
        enqueue(val) {
            this.storage.push(val);
            this.last += 1;
        }
        
        dequeue() {
            let result = this.storage[this.first];
            if (this.first >= this.last) {
                this.first = this.last;
            } else {
                this.first += 1;
            }
            return result;
        }
        
    }
    
    
    let cellQueue = new Queue();
    
    let helper = (row, column) => {
        if (board[row][column] === 'O') {
            
            board[row][column] = 'P';
            
            
            if(board[row + 1] !== undefined && board[row + 1][column] === 'O') {
                cellQueue.enqueue([row + 1, column]);
            }
            
            if(board[row - 1] !== undefined && board[row - 1][column] === 'O') {
                cellQueue.enqueue([row - 1, column]);
            }
            
            if(board[row][column + 1] === 'O') {
                cellQueue.enqueue([row, column + 1])
            }
            
            if(board[row][column - 1] === 'O') {
                cellQueue.enqueue([row, column - 1])
            }
            
        }
    }
    
    
    for (let i = 0; i < board[0].length; i ++) {
        if (board[0][i] === "O") {
            cellQueue.enqueue([0,i]);
        }
        
        if (board[board.length - 1][i] === "O") {
            cellQueue.enqueue([board.length - 1,i]);
        }
    }
    
    for (let i = 1; i < board.length - 1; i++) {
        if (board[i][0] === "O") {
            cellQueue.enqueue([i, 0]);
        }
        if (board[i][board[0].length - 1] === "O") {
            cellQueue.enqueue([i, board[0].length - 1]);
        }
        
    }
    
    let curr = cellQueue.dequeue()
    //console.log(curr)
    while(curr !== undefined) {
      helper(curr[0], curr[1]);
        curr = cellQueue.dequeue();
    }
    
    //console.log(board);
    
   for (let i = 0; i < board.length; i++) {
        board[i] = board[i].map((element) => {
            if (element === 'O') {
                return 'X';
            } else {
                return element;
            }
        });
        
        board[i] = board[i].map((element) => {
            if (element === 'P') {
                return 'O';
            } else {
                return element;
            }
        });
    }
    
    
    
    //console.log(board);
    
    return board
    
};