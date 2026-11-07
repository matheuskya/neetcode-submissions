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

        let mapS = new Map()
        let mapT = new Map()

        for(const [index, letter] of [...s].entries()){
            mapS.set(letter, (mapS.get(letter)||0) + 1)
            mapT.set(t[index], (mapT.get(t[index])||0) + 1)
        }

        for(const index in s){
            if(mapS.get(s[index]) != mapT.get(s[index])){
                return false
            }
        }

        return true
    }
}
