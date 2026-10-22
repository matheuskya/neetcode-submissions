class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set()
        for(const number of nums){
            if (set.has(number)){
                return true;
            }

            set.add(number)
        }
        return false
    }
}
