class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map()

        for(const word of strs){
            let array = new Array(26).fill(0)
            for(const letter of [...word]){
                array[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            const key = array.join(",")
            if(!map.has(key)){
                map.set(key, [])
            }
            map.get(key).push(word)
        }
        return [...map.values()]
    }
}
