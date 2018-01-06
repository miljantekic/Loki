
var express = require('express');

var Endpoints = require('./Endpoints');
var Responses = require('./Responses');

var defaultConfig = {
    port: 1337,
    serverSuffix: '/mock',
    resourcesPath: process.cwd() + '/resources/loki/'
};

function setupServer(server, config) {
    server.use(config.serverSuffix + '/*', function(req, res){
        var endpoint = Endpoints.findEndpoint(req.originalUrl.replace(config.serverSuffix, ''), req.method, config);

        if (!endpoint) {
            res.status(404).send('Sorry, that endpoint does not exist!');

            return;
        }

        var response = Responses.findResponse(endpoint.activeResponse, config);

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