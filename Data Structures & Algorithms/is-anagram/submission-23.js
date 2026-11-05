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
        let smap = new Map()
        let tmap = new Map()

        for(const [index, letter] of [...s].entries()){
            smap.set(letter, (smap.get(letter) || 0) + 1)
            tmap.set(t[index], (tmap.get(t[index]) || 0) + 1)
        }
        
        for(const [index, letter] of [...s].entries()){
            if(smap.get(letter) != tmap.get(letter)){
                return false
            }
        }
        return true
    }
}
