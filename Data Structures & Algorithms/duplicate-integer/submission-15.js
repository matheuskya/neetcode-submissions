class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set()
        for(const [index, value] of nums.entries()){
            if(set.has(value)){
                return true
            }
            set.add(value)
        }
        return false
    }
}
