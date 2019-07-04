/**
 * @param {any} value The value that you want to determine whether it is an array.
 * @returns {boolean} true or false (boolean)
 */
const isArray = value => {
    if (Object.prototype.toString.call(value) === '[object Array]') {
        return true;
    }
    return false;
};

module.exports = isArray;
