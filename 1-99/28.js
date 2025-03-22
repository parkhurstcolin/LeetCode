/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	for (let y = 0; y < haystack.length; y++) {
		let match = true;
		for (let x = 0; x < needle.length; x++) {
			if (haystack[y + x] !== needle[x]) {
				match = false;
				break;
			}
		}
		if (match) {
			return y;
		}
	}
	return -1;
};

/*
  1. Loop through haystack
      a. Create match variable and set it to true
      b. Loop through needle
          i. Compare if outer character doesnt equal inner chracter
              1. Change match to false
              2. Break
      c. If match is true, return index
  2. Return -1
*/
