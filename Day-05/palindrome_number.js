function isPalindrome(x) {
    // Convert integer to string
    let str = x.toString();
    
    // Reverse the string
    let reversed = str.split('').reverse().join('');
    
    // Check if the original string is equal to its reverse
    return str === reversed;
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
