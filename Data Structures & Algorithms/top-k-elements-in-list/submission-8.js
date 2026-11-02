class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //value: count
        let countMap = new Map()

        //index = frequency and value is an array of values
        let frequency = Array.from({length: nums.length + 1}, ()=> []) 

        for(const value of nums){
            countMap.set(value, (countMap.get(value) || 0) + 1)
        }

        for(const [value, count] of countMap){
            frequency[count].push(value)
        }
        let answr = []

        console.log(frequency)

        for(let i = nums.length; i> 0; i--){
            for(const value of frequency[i]){
                answr.push(value)
                console.log(answr)
                if(answr.length == k){
                    return answr
                }
            }
        }

    }
}
