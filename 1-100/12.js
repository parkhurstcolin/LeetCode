/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let store = [];
  while (num >= 1000) {
    store.push("M");
    num -= 1000;
  }
  if (num >= 900) {
    store.push("CM");
    num -= 900;
  }
  while (num >= 500) {
    store.push("D");
    num -= 500;
  }
  if (num >= 400) {
    store.push("CD");
    num -= 400;
  }
  while (num >= 100) {
    store.push("C");
    num -= 100;
  }
  if (num >= 90) {
    store.push("XC");
    num -= 90;
  }
  while (num >= 50) {
    store.push("L");
    num -= 50;
  }
  if (num >= 40) {
    store.push("XL");
    num -= 40;
  }
  while (num >= 10) {
    store.push("X");
    num -= 10;
  }
  if (num === 9) {
    store.push("IX");
    num -= 9;
  }
  while (num >= 5) {
    store.push("V");
    num -= 5;
  }
  if (num === 4) store.push("IV");
  else
    while (num !== 0) {
      store.push("I");
      num--;
    }

  return store.join("");
};
