class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let answr = new Map()
        for(const [index, value] of nums.entries()){
            const diff = target - value
            if(answr.has(diff)){
                return [answr.get(diff), index]
            }
            answr.set(value, index)
        }
    }
}
