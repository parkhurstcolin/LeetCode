/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
	let l = Math.floor(Math.sqrt(area));
	let w = 0;
	while (l * w != area) {
		w = area / l;
		if (!Number.isInteger(w)) l++;
	}
	if (l < w) return [w, l];
	return [l, w];
};