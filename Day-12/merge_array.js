function merge(nums1, m, nums2, n) {
    let p1 = m - 1; // Pointer for nums1
    let p2 = n - 1; // Pointer for nums2
    let p = m + n - 1; // Pointer for the merged array

    // Merge nums1 and nums2 from the end, filling nums1 backwards
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

// Sample inputs
let nums1 = [1, 2, 3, 0, 0, 0]; // nums1 with space for merging
let m = 3; // Number of elements in nums1
let nums2 = [2, 5, 6]; // nums2
let n = 3; // Number of elements in nums2

// Call the merge function
merge(nums1, m, nums2, n);

// Output the merged array (nums1 after merging)
console.log(nums1);