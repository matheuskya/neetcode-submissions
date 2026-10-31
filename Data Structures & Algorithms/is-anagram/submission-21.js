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

        let maps = new Map()
        let mapt = new Map()
        for(const index in s){
            maps.set(s[index], (maps.get(s[index]) || 0) + 1)    
            mapt.set(t[index], (mapt.get(t[index]) || 0) + 1)    
        }

        for(const index in s){
            if(maps.get(s[index]) != mapt.get(s[index])){
                return false
            }
        }
        return true
    }
}
