class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }
        let sMap = new Map()
        let tMap = new Map()
        for(const [index, letter] of [...s].entries()){
            sMap.set(letter, (sMap.get(letter) || 0) + 1)
            tMap.set(t[index], (tMap.get(t[index]) || 0) + 1)
        }

        for(const [index, letter] of [...s].entries()){
            if(sMap.get(letter) != tMap.get(letter)){
                return false
            }
        }
        return true
    }
}
