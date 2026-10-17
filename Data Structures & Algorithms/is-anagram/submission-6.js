class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapS = new Map()
        let mapT = new Map()

        if(s.length != t.length){
            return false
        }

        for(const [index, letter] of [...s].entries()){
            mapS.set(letter, (mapS.get(letter) || 0) + 1)
            mapT.set(t[index], (mapT.get(t[index]) || 0) + 1)
        }

        for(const [key, value] of mapS){
            if(mapT.get(key) != mapS.get(key)){              
                return false
            }
        }
        return true
    }
}
