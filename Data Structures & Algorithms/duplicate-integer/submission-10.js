class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set()
        for(const index in nums){
            if(set.has(nums[index])){
                return true
            }

            set.add(nums[index])
        }
        
        return false
    }
}
