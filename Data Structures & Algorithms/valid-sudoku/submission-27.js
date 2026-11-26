class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let columns = new Map()
        let rows = new Map()
        let squares = new Map()

        for(let r = 0; r < 9; r++ ){
            for(let c = 0; c < 9; c++){
                if(board[r][c] === "."){
                    continue
                }
                const key = `${Math.floor(r/3)}, ${Math.floor(c/3)}`

                if(
                    (columns.has(c) && columns.get(c).has(board[r][c])) ||
                    (rows.has(r) && rows.get(r).has(board[r][c])) ||
                    (squares.has(key) && squares.get(key).has(board[r][c]))
                ){
                    return false
                }

                if(!columns.has(c)){
                    columns.set(c, new Set())
                }
                columns.get(c).add(board[r][c])

                if(!rows.has(r)){
                    rows.set(r, new Set())
                }
                rows.get(r).add(board[r][c])

                if(!squares.has(key)){
                    squares.set(key, new Set())
                }
                squares.get(key).add(board[r][c])
            }
        }
        return true
    }
}
