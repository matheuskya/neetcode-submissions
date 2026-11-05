class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        let valuesSet = new Set()
        for(const [index, value] of nums.entries()){
            if(valuesSet.has(value)){
                return true
            }
            valuesSet.add(value)
        }
        return false
    }
}
