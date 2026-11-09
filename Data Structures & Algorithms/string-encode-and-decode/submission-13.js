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
        const fullres = res.join("")
        return fullres
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //5#hello5#world
        let res = []
        let i = 0

        while(i < str.length){
            let j = i
            while(str[j] !== "#"){
                j++
            }      
            const length = parseInt(str.substring(i, j))
            i = j+1
            j = length + i
            res.push(str.substring(i,j))
            i=j
        }
        return res
    }
}
