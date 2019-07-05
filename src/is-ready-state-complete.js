const documentReadyState = require('./document-ready-state');

/**
 * @returns {boolean} Returns boolean (true or false).
 */
const isReadyStateComplete = () => {
    try {
        if (documentReadyState() === 'complete') {
            return true;
        }
        return false;
    } catch (err) {
        return err.message;
    }
}

module.exports = isReadyStateComplete;
