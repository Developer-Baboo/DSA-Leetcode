function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return null;
}
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));