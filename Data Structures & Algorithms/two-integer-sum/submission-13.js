class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let answ = new Map()

        for(const [index, value] of nums.entries()){
            const diff = target - value
            console.log(value)
            if(answ.has(diff)){
                return [answ.get(diff), index]
            }
            answ.set(value, index)
        }
        return []
    }
}
