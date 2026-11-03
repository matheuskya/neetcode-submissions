class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let valuesSet = new Map()
        for(const [index, value] of nums.entries()){
            const diff = target - value
            if(valuesSet.has(diff)){
                return [valuesSet.get(diff), index]
            }
            valuesSet.set(value, index)
        }
    }
}
