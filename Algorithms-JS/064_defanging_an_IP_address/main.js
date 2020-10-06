/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    const addressSplit = address.split("");
    let currAdd;

    for (let i = 0; addressSplit.length > i; i++) {
        currAdd = addressSplit[i];
        if (currAdd === ".") addressSplit[i] = "[.]";
    }

    return addressSplit.join("");
};
