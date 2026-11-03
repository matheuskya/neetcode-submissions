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

        let sCounter = new Map()
        let tCounter = new Map()

        for(const [index, value] of [...s].entries()){
            sCounter.set(value, (sCounter.get(value) || 0) + 1)
            tCounter.set(t[index], (tCounter.get(t[index]) || 0) + 1)
        }

        for(const [index, value] of [...s].entries()){
            if(sCounter.get(value) != tCounter.get(value)){
                return false
            }
        }
        return true
    }
}
