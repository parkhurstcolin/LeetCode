/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	const morseCode = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];

	const uniqueMorse = new Set();

	for (const word of words) {
		let morseRepresentation = "";
		for (const char of word) {
			morseRepresentation += morseCode[char.charCodeAt(0) - "a".charCodeAt(0)];
		}
		uniqueMorse.add(morseRepresentation);
	}

	return uniqueMorse.size;
};
