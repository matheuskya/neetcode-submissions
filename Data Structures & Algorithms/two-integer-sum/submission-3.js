class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //val: index!
        let map = new Map()

        for(const [index, value] of nums.entries()){
            console.log(index, value)
            let diff = target - value
            if(map.has(diff)){
                return [map.get(diff), index]
            }
            map.set(value, index)
        }
        
        return []
    }
}
