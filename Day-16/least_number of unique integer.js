function findLeastNumOfUniqueInts(arr, k) {
    const numCounts = new Map();
    for (const num of arr) {
        numCounts.set(num, (numCounts.get(num) || 0) + 1);
    }
    
    const sortedCounts = Array.from(numCounts.values()).sort((a, b) => a - b);
    let uniqueNums = sortedCounts.length;
    let removals = 0;
    for (const count of sortedCounts) {
        if (removals + count <= k) {
            removals += count;
            uniqueNums--;
        } else {
            break;
        }
    }
    
    return uniqueNums;
}

// Test cases
console.log(findLeastNumOfUniqueInts([5,5,4], 1)); // Output: 1
console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3)); // Output: 2