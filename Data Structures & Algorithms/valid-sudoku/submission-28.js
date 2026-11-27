class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Map()
        let columns = new Map()
        let squares = new Map()

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                let value = board[r][c]
                if(value === "."){
                    continue
                }

                const key = `${Math.floor(r/3)}, ${Math.floor(c/3)}`

                if(
                    (rows.has(r) && rows.get(r).has(value)) ||
                    (columns.has(c) && columns.get(c).has(value)) ||
                    (squares.has(key) && squares.get(key).has(value))
                ){
                    return false
                }

                if(!rows.has(r)){
                    rows.set(r, new Set())
                }
                rows.get(r).add(value)
                if(!columns.has(c)){
                    columns.set(c, new Set())
                }
                columns.get(c).add(value)
                if(!squares.has(key)){
                    squares.set(key, new Set())
                }
                squares.get(key).add(value)
            }
        }
        return true
    }
}
