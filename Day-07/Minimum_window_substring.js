function minWindow(s, t) {
    const tFreqMap = {};
    let requiredChars = t.length;

    // Initialize the frequency map for string t
    for (const char of t) {
        tFreqMap[char] = (tFreqMap[char] || 0) + 1;
    }

    let left = 0,
        right = 0,
        minLen = Infinity,
        minStart = 0;

    while (right < s.length) {
        const char = s[right];

        if (tFreqMap[char] > 0) {
            requiredChars--;
        }

        // Decrease the frequency of the character in the map
        tFreqMap[char] = (tFreqMap[char] || 0) - 1;

        // Contract the window
        while (requiredChars === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            const leftChar = s[left];
            // Increase the frequency of the left character in the map
            tFreqMap[leftChar]++;

            if (tFreqMap[leftChar] > 0) {
                requiredChars++;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? '' : s.substr(minStart, minLen);
}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""