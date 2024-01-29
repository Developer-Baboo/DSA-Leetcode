function longestCommonPrefix(strs) {
    // If the array is empty, return an empty string
    if (strs.length === 0) return "";

    // Set the initial prefix to the first string in the array
    let prefix = strs[0];

    // Iterate through the rest of the strings in the array
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by one character from the end
            prefix = prefix.substring(0, prefix.length - 1);

            // If the prefix becomes empty, there's no common prefix, return ""
            if (prefix === "") return "";
        }
    }
    
    // Return the final common prefix found
    return prefix;
}

// Example usage:
const strs = ["abab", "aba", "abc"];
console.log(longestCommonPrefix(strs)); // Output: "ab"
