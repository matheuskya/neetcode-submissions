class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        let mySet = new Set()
        for(const index in nums){
            if(mySet.has(nums[index])){
                return true
            }
            mySet.add(nums[index])
        }

        return false
    }
}
