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

        //both words have the same length
        for(const index in s){
            const letterS = s[index]
            const letterT = t[index]

            mapS.set(letterS, (mapS.get(letterS) || 0) + 1)
            mapT.set(letterT, (mapT.get(letterT) || 0) + 1)
        }

        for(const letter of s){
            if(mapS.get(letter) != mapT.get(letter)){
                return false
            }
        }
        return true
    }
}
