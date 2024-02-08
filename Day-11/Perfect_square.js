function numSquares(n) {
    // Create a dp array to store the minimum number of perfect square numbers
    const dp = new Array(n + 1).fill(Infinity);
    
    // Base case: 0 perfect squares needed to sum up to 0
    dp[0] = 0;
    
    // Iterate through each number from 1 to n
    for (let i = 1; i <= n; i++) {
        // Try all possible perfect square numbers smaller than or equal to i
        for (let j = 1; j * j <= i; j++) {
            // Update dp[i] with the minimum of its current value and dp[i - j*j] + 1
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    
    return dp[n];
}

// Example usage:
console.log(numSquares(12)); // Output: 3
console.log(numSquares(13)); // Output: 2