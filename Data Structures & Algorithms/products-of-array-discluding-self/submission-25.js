class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1
        let res = Array(nums.length).fill(1)

        for(let i = 0; i < nums.length; i++){
            res[i] = prefix
            prefix = prefix * nums[i]
        }
        let postfix = 1
        for(let i = nums.length -1; i >= 0; i--){
            res[i] = res[i] * postfix
            postfix = postfix * nums[i]
        }

        return res
    }
}
