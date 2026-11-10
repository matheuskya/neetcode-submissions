class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let res = new Set()
        for(const value of nums){
            if(res.has(value)){
                return true
            }
            res.add(value)
        }
        return false
    }
}
