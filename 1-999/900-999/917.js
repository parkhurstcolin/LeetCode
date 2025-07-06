/**
 * @param {string} s
 * @return {string}
 */
const isLetter = (char) => /^[A-Za-z]$/.test(char);
const reverseOnlyLetters = (s) => {
	const stack = [...s].filter(isLetter);
	return [...s].map((char) => (isLetter(char) ? stack.pop() : char)).join("");
};
