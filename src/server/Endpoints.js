var fs = require('fs');
var _ = require('lodash');
var Endpoint = require('./models/Endpoint');

var Endpoints = {};
var ENDPOINTS_DIR = 'endpoints';

/**
 * @param {string} url
 * @param {string} method
 * @param {object} config
 * @returns {null | Endpoint}
 */
Endpoints.findEndpoint = function(url, method, config) {
    var path = config.resourcesPath + ENDPOINTS_DIR;

    var endpointsFiles = fs.readdirSync(path);

    var endpoints = _.map(endpointsFiles, function (endpointFile) {
        return new Endpoint(JSON.parse(fs.readFileSync(path + '/' + endpointFile, 'utf8')));
    });

    var endpoint = _.find(endpoints, {
        url: url,
        method: method
    });

    if (!endpoint) {
        return null;
    }

    return endpoint;
};

module.exports = Endpoints;