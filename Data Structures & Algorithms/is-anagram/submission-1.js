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

        for (const index in s){
            
            mapS.set(s[index], (mapS.get(s[index]) || 0) + 1)
            // mapS.set(s[index], mapS.get(s[index], 0) + 1) 
            mapT.set(t[index], (mapT.get(t[index]) || 0) + 1)
        }
        
        for (const [key, value] of mapS){
            if(mapS.get(key) != mapT.get((key) || 0)){
                return false
            }
        }
        
        return true
        // return s.split("").sort() == t.split("").sort()
    }
}
