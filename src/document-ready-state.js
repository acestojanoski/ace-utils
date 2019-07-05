/**
 * @returns {string} Returns the ready state of the document (loading, interactive, complete)
 */
const documentReadyState = () => {
    if (!document) {
        return new Error('document is not defined');
    }
    return document.readyState;
};

module.exports = documentReadyState;
