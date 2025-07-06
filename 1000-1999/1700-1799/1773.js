/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
	let n = 0;
	let key = Number;
	if (ruleKey == "type") key = 0;
	else if (ruleKey == "color") key = 1;
	else key = 2;

	for (let y = 0; y < items.length; y++) {
		let item = items[y];
		if (item[key] == ruleValue) {
			n++;
		}
	}

	return n;
};
