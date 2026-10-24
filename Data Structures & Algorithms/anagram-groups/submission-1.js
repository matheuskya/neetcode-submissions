class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     const res = {};
    //     for (let s of strs) {
    //         const count = new Array(26).fill(0);
    //         for (let c of s) {
    //             count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    //         }
    //         const key = count.join(',');
    //         if (!res[key]) {
    //             res[key] = [];
    //         }
    //         res[key].push(s);
    //     }
    //     return Object.values(res);
    // }
    groupAnagrams(strs) {
        let map = new Map() //answer
        for (const word of strs){
            let letterArray = Array(26).fill(0)
            for(const letter of word){
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