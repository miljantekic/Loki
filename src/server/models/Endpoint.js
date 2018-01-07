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

    /** {string} */
    this.createdAt = endpoint.createdAt;
}

/**
 * @param {string} url
 * @returns {Object}
 */
Endpoint.prototype.getEndpointParams = function (url) {
    return {};
};

module.exports = Endpoint;