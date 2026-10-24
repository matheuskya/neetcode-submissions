class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()// value: index
        for(const [index, value] of nums.entries()){
            const diff = target - value
            if(map.has(diff)){
                return [map.get(diff), index]
            }
            map.set(value, index)
        }
    }
}
