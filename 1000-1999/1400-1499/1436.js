/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
	const srcs = new Set();
	const dests = [];
	for (let [key, value] of paths) {
		srcs.add(key);
		dests.push(value);
	}
	for (let dest of dests) {
		if (!srcs.has(dest)) {
			return dest;
		}
	}
};
