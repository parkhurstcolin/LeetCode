/**
 * @param {string[]} emails
 * @return {number}
 */

const emailValid = (prop) => {
	let email = prop.split("@");

	let localName = email[0].split(".").join("");
	let emailName = email[1];

	localName = localName.split("+");
	localName = localName[0];

	return localName + "@" + emailName;
};
var numUniqueEmails = function (emails) {
	let map = new Map();
	for (let y = 0; y < emails.length; y++) {
		map.set(emailValid(emails[y]));
	}

	return map.size;
};
