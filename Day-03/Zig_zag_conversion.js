function convert(s, numRows) {
    // If numRows is 1 or less, return the string as is
    if (numRows <= 1) return s;

    // Create an array of numRows strings to store characters in each row
    const v = new Array(numRows).fill("");

    let j = 0; // Initialize the row index
    let dir = -1; // Initialize the direction of movement

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Change direction if we reach the top or bottom row
        if (j === numRows - 1 || j === 0) dir *= -1;

        // Append the current character to the corresponding row
        v[j] += s[i];

        // Move to the next row based on the direction
        j += dir;
    }

    let res = ""; // Initialize the result string

    // Concatenate characters from each row to form the result
    for (let row of v) {
        res += row;
    }

    return res; // Return the result string
}

// Example usage:
const s = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(s, numRows)); // Output: "PAHNAPLSIIGYIR"