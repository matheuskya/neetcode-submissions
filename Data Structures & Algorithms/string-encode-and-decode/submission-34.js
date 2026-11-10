class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = []
        for(const word of strs){
            res.push(word.length + "#" + word)
        }
        res = res.join("")
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        //5#hello5#world
        while(i < str.length){
            let j = i
            while(str[j] != "#"){
                j++
            }
            let length = parseInt(str.substring(i, j))
            i = j + 1
            j = i + length
            res.push(str.substring(i,j))
            i=j
        }
        return res
    }
}
