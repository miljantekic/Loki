var fs = require('fs');
var _ = require('lodash');
var express = require('express');

var defaultConfig = {
    port: 1337,
    serverSuffix: '/mock',
    resourcesPath: process.cwd() + '/resources/loki/'
};

var ENDPOINTS_DIR = 'endpoints';
var RESPONSES_DIR = 'responses';

function findEndpoint(url, method, config) {
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
}

function findResponse(responseId, config) {
    var responseFilePath = config.resourcesPath + RESPONSES_DIR + '/' + responseId + '.json';
    var responseFileContent = '';

    try {
        responseFileContent = fs.readFileSync(responseFilePath, 'utf8');
    } catch (e) {
        return null;
    }

    return JSON.parse(responseFileContent);
}

function setupServer(server, config) {
    server.use(config.serverSuffix + '/*', function(req, res){
        var endpoint = findEndpoint(req.originalUrl.replace(config.serverSuffix, ''), req.method, config);

        if (!endpoint) {
            res.status(404).send('Sorry, that endpoint does not exist!');

            return;
        }

        var response = findResponse(endpoint.activeResponse, config);

        if (!response) {
            res.status(404).send('Could not find response content!');

            return;
        }

        res.status(response.statusCode).send(response.responseBody);
    });
}


module.exports.startServer = function () {
    var server = express();

    setupServer(server, defaultConfig);

    server.listen(defaultConfig.port, function () {
        console.log('Server has been started on port ' + defaultConfig.port + '');
    });
};