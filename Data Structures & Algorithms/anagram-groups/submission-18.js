class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const answr = new Map()
        for(const [index, word] of strs.entries()){
            let array = Array(26).fill(0)
            for(const letter of [...word]){
                array[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            const key = array.join(",")

            if(!answr.has(key)){
                answr.set(key, [])
            }

            answr.get(key).push(word)
        }

        return [...answr.values()]
    }
}
