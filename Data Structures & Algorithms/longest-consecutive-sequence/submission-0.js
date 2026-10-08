class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequence = 0;
        let set = new Set();

        for (let num of nums) {
            set.add(num);
        }

        for (let num of set) {
            if (set.has(num - 1)) continue;
            let currentSequence = 0;
            let plus = 0;
            while (set.has(num + plus)) {
                currentSequence++;
                plus++;
            }
            if (currentSequence > longestSequence) longestSequence = currentSequence;
        }
        return longestSequence;
    
    }
}
