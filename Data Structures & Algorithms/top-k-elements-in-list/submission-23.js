class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        let freq = Array.from({length: nums.length + 1}, () => [])
        
        for(const value of nums){
            count.set(value, (count.get(value) || 0) + 1)
        }
        for(const [key, value] of count){
            freq[value].push(key)
        }
        let answr = []
        for(let i = freq.length -1; i > 0; i--){
            for(const value of freq[i]){

                answr.push(value)
                if(answr.length == k){
                    return answr
                }
            }
        }
    }
}
