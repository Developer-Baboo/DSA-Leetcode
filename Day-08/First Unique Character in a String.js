function firstUniqChar(s) {
    const charCount = new Map();
    
    // Count frequency of characters
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    // If no non-repeating character found
    return -1;
}

// Test cases
console.log(firstUniqChar("leetcode"));      // Output: 0
console.log(firstUniqChar("loveleetcode"));   // Output: 2
console.log(firstUniqChar("aabb"));          // Output: -1