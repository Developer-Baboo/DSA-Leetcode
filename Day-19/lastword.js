function lengthOfLastWord(s) {
    let length = 0;
    let foundLastWord = false;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
            foundLastWord = true;
        } else if (foundLastWord) {
            // Break when a space is encountered after finding the last word
            break;
        }
    }

    return length;
}

// Test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6