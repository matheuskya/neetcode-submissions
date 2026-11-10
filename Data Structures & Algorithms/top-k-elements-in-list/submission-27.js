class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        let frequency = Array.from({length: nums.length + 1}, () => [])
        let res = []

        for(const value of nums){
            count.set(value, (count.get(value) || 0) + 1)
        }

        for(const [index, value] of count){
            frequency[value].push(index)
        }

        for(let i = frequency.length - 1; i > 0; i--){
            for(const value of frequency[i]){
                res.push(value)
                if(res.length === k){
                    return res
                }
            }
        }
    }
}
