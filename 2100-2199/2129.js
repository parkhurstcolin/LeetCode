/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  title = title.split(" ");
  for (let y = 0; y < title.length; y++) {
    let word = title[y].toLowerCase().split("");
    if (word.length < 3) title[y] = word.join("");
    else {
      word[0] = word[0].toUpperCase();
      title[y] = word.join("");
    }
  }
  return title.join(" ");
};
