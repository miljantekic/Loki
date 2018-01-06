var fs = require('fs');

var Responses = {};
var RESPONSES_DIR = 'responses';

Responses.findResponse = function(responseId, config) {
    var responseFilePath = config.resourcesPath + RESPONSES_DIR + '/' + responseId + '.json';
    var responseFileContent = '';

    try {
        responseFileContent = fs.readFileSync(responseFilePath, 'utf8');
    } catch (e) {
        return null;
    }

    return JSON.parse(responseFileContent);
};

module.exports = Responses;