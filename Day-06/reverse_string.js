var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters at left and right pointers
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Move pointers towards each other
        left++;
        right--;
    }
};

// Example usage:
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1); // Output: ["o","l","l","e","h"]

const s2 = ["H","a","n","n","a","h"];
reverseString(s2);
console.log(s2); // Output: ["h","a","n","n","a","H"]