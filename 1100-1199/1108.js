/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
	address = address.split(".").join("[.]");
	return address;
};
