function binarySearch (n, x) {
    let l = 0, r = n.length - 1;
    // Iterate while start not meets end
    while (l <= r) {
        // Find the mid index
        let m = l + Math.floor((r - l) / 2);
        // If element is present at m, return True
        if (arr[m] === x) return true;
        // Else look in left or 
        else if (arr[m] < x)
            l = m + 1;
        // right half accordingly
        else
            r = m - 1;
    }
    return false;
}