class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let answerMap = new Map()

        for(const [index, word] of strs.entries()){
            let keyArray = Array(26).fill(0)
            for (const [index, letter] of [...word].entries()){
                keyArray[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            const key = keyArray.join(",")
            if(!answerMap.get(key)){
                answerMap.set(key, [])
            }
            answerMap.get(key).push(word)
        }

        return [...answerMap.values()]
    }
}
