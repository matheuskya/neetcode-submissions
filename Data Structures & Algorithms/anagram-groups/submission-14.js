class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let answ = new Map()
        for(const word of strs){
            let array = Array(26).fill(0)
            for(const letter of word){
                array[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            const key = array.join(",")

            if(!answ.get(key)){
                answ.set(key, [])
            }

            answ.get(key).push(word)
        }

        return [...answ.values()]
    }
}
