/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
	// Create an array to simulate a stack.
	const stack = [];

	// Iterate through each character of the input string.
	for (const char of s) {
		// Check if the stack is not empty.
		if (stack.length > 0) {
			// If the current character is equal to the top of the stack, remove the duplicate.
			if (stack[stack.length - 1] === char) {
				stack.pop();
			} else {
				// Push the current character onto the stack.
				stack.push(char);
			}
		} else {
			// If the stack is empty, push the current character onto the stack.
			stack.push(char);
		}
	}

	// Build the result string by joining characters from the stack.
	const result = stack.join("");

	return result;
};
