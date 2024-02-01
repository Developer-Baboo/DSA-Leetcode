function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If array is empty, return 0
    
    let k = 1; // Initialize unique elements count

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from previous one, update nums[k] and increment k
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k; // Return number of unique elements
}

// Test cases
let nums1 = [1, 1, 2];

console.log(removeDuplicates(nums1)); // Output: 2