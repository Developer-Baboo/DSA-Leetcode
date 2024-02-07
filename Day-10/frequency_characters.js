function frequencySort(s) {
    // Step 1: Create a map to store character frequencies
    const charFreq = new Map();
    for (let char of s) {
        charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }
    
    // Step 2: Create an array of entries and sort it based on frequencies
    const sortedChars = Array.from(charFreq.entries()).sort((a, b) => b[1] - a[1]);
    
    // Step 3: Construct the sorted string
    let result = '';
    for (let [char, freq] of sortedChars) {
        result += char.repeat(freq);
    }
    
    return result;
}

// Test cases
console.log(frequencySort("tree"));  // Output: "eert" or "eetr"
console.log(frequencySort("cccaaa")); // Output: "aaaccc" or "cccaaa"
console.log(frequencySort("Aabb"));   // Output: "bbAa" or "bbaA"