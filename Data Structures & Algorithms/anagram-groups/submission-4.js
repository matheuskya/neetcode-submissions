class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(const [index, word] of strs.entries()){
            let letterArray = Array(26).fill(0)
            for(const [index, letter] of [...word].entries()){
                letterArray[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            const key = letterArray.join(",")

            if(!map.get(key)){
                map.set(key, [])
            }

            map.get(key).push(word)
        }
        return [...map.values()]
    }
}
