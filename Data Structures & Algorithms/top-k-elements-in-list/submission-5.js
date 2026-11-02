class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        //1: 1
        //2: 2 ... value, count
        let array = Array.from({length: nums.length + 1}, () => [])
        //i[1]: [1] ... count, array of values
        for(const value of nums){
            map.set(value, (map.get(value) || 0) + 1)
        }

        for(const [value, count] of map){
            array[count].push(value)
        }

        let answ = []

        for(let i = array.length - 1; i > 0; i--){
            for(const value of array[i]){
                answ.push(value)
                if(answ.length == k){
                    return answ
                }
            }
        }

    }
}