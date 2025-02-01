/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let h = heights;
  let arr = [];
  let map = new Map();
  for (let y = 0; y < h.length; y++) {
    arr.push(Math.max(...h));
    map.set(Math.max(...h), names[h.indexOf(Math.max(...h))]);
    h[h.indexOf(Math.max(...h))] = 0;
  }
  for (let y = 0; y < names.length; y++) {
    arr[y] = map.get(arr[y]);
  }
  return arr;
};
