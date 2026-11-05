class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map()
        let frequency = Array.from({length: nums.length + 1}, ()=>[])
        for(const [index, value] of nums.entries()){
            counter.set(value, (counter.get(value) || 0) + 1)
        }
        for(const [key, value] of counter){
            frequency[value].push(key)
        }
        let answr = []
        for(let i = frequency.length - 1; i>0; i--){
            for(const [index, value] of frequency[i].entries()){
                answr.push(value)
                if(answr.length == k){
                    return answr
                }
            }
        }
    }
}
