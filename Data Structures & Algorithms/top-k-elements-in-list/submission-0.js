class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        const buckets = Array.from({length: nums.length + 1}, () => []);
        for (let num in count) {
            const freq = count[num];
            buckets[freq].push(Number(num));
        }

        const result = [];
        for (let i = buckets.length - 1; i > 0; i--) {
            for (let num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;          
            }
        }
    }
}