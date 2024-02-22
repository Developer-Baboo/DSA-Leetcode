function findJudge(n, trust) {
    const trustGiven = new Array(n + 1).fill(0); // Array to store trusts given
    const trustReceived = new Array(n + 1).fill(0); // Array to store trusts received

    for (const [a, b] of trust) {
        trustGiven[a]++;
        trustReceived[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustReceived[i] === n - 1 && trustGiven[i] === 0) {
            return i; // Judge found
        }
    }

    return -1; // Judge not found
}

// Example usage:
console.log(findJudge(2, [[1,2]])); // Output: 2
console.log(findJudge(3, [[1,3],[2,3]])); // Output: 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // Output: -1
