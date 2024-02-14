function thirdMax(nums) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    
    for (let num of nums) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num < first && num > second) {
            third = second;
            second = num;
        } else if (num < second && num > third) {
            third = num;
        }
    }
    
    return (third !== -Infinity) ? third : first;
}

// Test cases
console.log(thirdMax([3,2,1])); // Output: 1
console.log(thirdMax([1,2])); // Output: 2
console.log(thirdMax([2,2,3,1])); // Output: 1