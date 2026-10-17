class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //value: index
        let prevMap = new Map()

        for(const [index, value] of nums.entries()) {
            let diff = target - value
            if (prevMap.has(diff)){
                return [prevMap.get(diff), index]
            }
            prevMap.set(value, index)
        }
        return []
    }
}
