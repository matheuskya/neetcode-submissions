class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map()
        for(const word of strs){
            let array = new Array(26).fill(0)
            for(const letter of [...word]){
                array[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            const key = array.join(",")
            
            if(!res.has(key)){
                res.set(key, [])
            }
            res.get(key).push(word)
        }
        return [...res.values()]
        // return []
    }
}
