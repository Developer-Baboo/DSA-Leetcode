function firstPalindrome(words) {
    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
}

function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test cases
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // Output: "ada"
console.log(firstPalindrome(["notapalindrome", "racecar"])); // Output: "racecar"
console.log(firstPalindrome(["def", "ghi"])); // Output: ""