var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i; // Target found, return its index
        } else if (nums[i] > target) {
            return i; // Target should be inserted at the current index
        }
    }
    return nums.length; // Target not found and is greater than all elements, insert at the end
};

var nums = [1, 3, 5, 6];
var target = 5;
console.log(searchInsert(nums, target)); // Output: 2