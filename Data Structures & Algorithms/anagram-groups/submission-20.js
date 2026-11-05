class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let answr = new Map()
        for(const [index, word] of strs.entries()){
            let wordArray = Array(26).fill(0)

            for(const [index, letter] of [...word].entries()){
                wordArray[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            const key = wordArray.join(",")
            if(!answr.has(key)){
                answr.set(key, [])
            }
            answr.get(key).push(word)
        }
        return [...answr.values()]
    }
}
