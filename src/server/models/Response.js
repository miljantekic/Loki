/**
 * @constructor Response
 * @param {Object} response
 */
function Response(response) {
    /** {string} */
    this.id = response.id;

    /** {number} */
    this.statusCode = response.statusCode;

    /** {string} */
    this.responseType = response.responseType;

    /** {mix} */
    this.responseBody = response.responseBody;
}

module.exports = Response;