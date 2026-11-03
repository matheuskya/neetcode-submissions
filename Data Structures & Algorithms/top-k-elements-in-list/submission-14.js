class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map() //number: count/frequency
        let frequency = Array.from({length: nums.length + 1}, () => []) //index=frequency value=array of values
        
        for(const [index, value] of nums.entries()){
            count.set(value, (count.get(value) || 0) + 1)
        }
        for(const [key, value] of count){
            frequency[value].push(key)
        }

        let answr = []

        for(let i = frequency.length - 1; i > 0; i--){
            for(const [index, value] of frequency[i].entries()){
                    answr.push(value)
                if(answr.length == k){
                    return answr
                }
            }
        }
    }
}
