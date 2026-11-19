class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = new Map()
        for(const [index, value] of nums.entries()){
            const diff = target - value
            if(res.has(diff)){
                return [res.get(diff), index]
            }
            res.set(value, index)
        }
    }
}
