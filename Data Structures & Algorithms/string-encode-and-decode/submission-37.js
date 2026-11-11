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
        return res.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        
        while(i < str.length){
            //5#hello5#world
            let j = i
            while(str[j] != "#"){
                j++
            }
            const length = parseInt(str.substring(i,j))
            i = j+1
            j = i + length
            res.push(str.substring(i,j))
            i = j
        }
        return res
    }
}
