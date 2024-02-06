var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    
    return Array.from(map.values());
};

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]