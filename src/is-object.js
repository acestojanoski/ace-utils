/**
 * @param {any} value The value that you want to determine whether it is an object.
 * @returns {boolean} true or false (boolean)
 */
const isObject = value => {
    if (Object.prototype.toString.call(value) === '[object Object]') {
        return true;
    }
    return false;
};

module.exports = isObject;
