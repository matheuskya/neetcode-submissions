class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        let frequency = Array.from({length: nums.length + 1}, ()=>[])
    
        for(const [index, value] of nums.entries()){
            count.set(value, (count.get(value) || 0) + 1)
        }

        for(const [key, value] of count){
            frequency[value].push(key)    
        }
        console.log(frequency)
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
