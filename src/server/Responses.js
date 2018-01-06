var fs = require('fs');
var Response = require('./models/Response');

var Responses = {};
var RESPONSES_DIR = 'responses';

/**
 * @param {string} responseId
 * @param {Object} config
 * @returns {null | Response}
 */
Responses.findResponse = function(responseId, config) {
    var responseFilePath = config.resourcesPath + RESPONSES_DIR + '/' + responseId + '.json';
    var responseFileContent = '';

    try {
        responseFileContent = fs.readFileSync(responseFilePath, 'utf8');
    } catch (e) {
        return null;
    }

    return new Response(JSON.parse(responseFileContent));
};

module.exports = Responses;