var fs = require('fs');
var uuid = require('uuid/v1');
var Response = require('./models/Response');

var Responses = {};
var RESPONSES_DIR = 'responses';

/**
 * @param {Object} config
 * @returns {string} resourcePath
 */
function getResourcePath(config) {
    return config.resourcesPath + RESPONSES_DIR
}

/**
 * @param {Object} response
 * @param {Object} config
 * @returns {Response}
 */
Responses.createEndpoint = function (response, config) {
    var responseId = uuid();
    var resourcePath = getResourcePath(config);
    var filename = responseId + '.json';

    response.id = responseId;
    response.createdAt = new Date().toISOString();

    fs.writeFileSync(resourcePath + '/' + filename, JSON.stringify(response, null, 2), 'utf8');

    return new Response(response);
};

/**
 * @param {string} responseId
 * @param {Object} config
 * @returns {null | Response}
 */
Responses.findResponse = function(responseId, config) {
    var responseFilePath = getResourcePath(config) + '/' + responseId + '.json';
    var responseFileContent = '';

    try {
        responseFileContent = fs.readFileSync(responseFilePath, 'utf8');
    } catch (e) {
        return null;
    }

    return new Response(JSON.parse(responseFileContent));
};

module.exports = Responses;