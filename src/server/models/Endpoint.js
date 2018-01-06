/**
 * @constructor Endpoint
 * @param {Object} endpoint
 */
function Endpoint(endpoint) {
    /** {string} */
    this.id = endpoint.id;

    /** {string} */
    this.name = endpoint.name;

    /** {string} */
    this.method = endpoint.method;

    /** {string} */
    this.url = endpoint.url;

    /** {string[]} */
    this.responses = endpoint.responses;

    /** {string} */
    this.activeResponse = endpoint.activeResponse;
}

module.exports = Endpoint;