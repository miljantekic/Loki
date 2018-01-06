var fs = require('fs');
var _ = require('lodash');

var Endpoints = {};
var ENDPOINTS_DIR = 'endpoints';

Endpoints.findEndpoint = function(url, method, config) {
    var path = config.resourcesPath + ENDPOINTS_DIR;

    var endpointsFiles = fs.readdirSync(path);

    var endpoints = _.map(endpointsFiles, function (endpointFile) {
        return JSON.parse(fs.readFileSync(path + '/' + endpointFile, 'utf8'))
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