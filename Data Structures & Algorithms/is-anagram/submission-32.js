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

        for(const [index, value] of [...s].entries()){
            mapS.set(value, (mapS.get(value) || 0) + 1)
            mapT.set(t[index], (mapT.get(t[index]) || 0) + 1)
        }   

        for(const [index, value] of [...s].entries()){
            
            if(mapS.get(value) != mapT.get(value)){
                return false
            }
        }
        return true
    }
}
