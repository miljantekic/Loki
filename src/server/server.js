var express = require('express');
var bodyParser = require('body-parser');

var Endpoints = require('./Endpoints');
var Responses = require('./Responses');

var defaultConfig = {
    port: 1337,
    serverSuffix: '/mock',
    resourcesPath: process.cwd() + '/resources/loki/'
};

function setupServer(server, config) {
    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

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

    server.get('/api/endpoints', function (request, response) {
        var endpoints = Endpoints.getEndpoints(config);

        response.send({
            ok: true,
            endpoints: endpoints
        });
    });

    server.get('/api/endpoint/:id', function (request, response) {
        let endpoint = Endpoints.getEndpoint(request.params.id, config);

        console.log(request.params.id);

        if (!endpoint) {
            return response.send({
                ok: false,
                message: 'Endpoint doesn\'t exist'
            });
        }

        response.send({
            ok: true,
            endpoint: endpoint
        });
    });

    server.post('/api/endpoint/create', function (request, response) {
        let existingEndpoint = Endpoints.findEndpoint(request.body.url, request.body.method, config);

        if (existingEndpoint) {
            console.log('Endpoint with this method and URL already exists: ', existingEndpoint.id);

            return response.send({
                ok: false,
                message: 'Endpoint with this method and URL already exists.'
            })
        }

        let createdEndpoint = Endpoints.createEndpoint(request.body, config);

        console.log('Created endpoint with id:', createdEndpoint.id);

        response.send({
            ok: true,
            endpoint: createdEndpoint
        });
    });

    server.post('/api/endpoint/:id', function (request, response) {
        var endpoint = Endpoints.getEndpoint(request.params.id, config);

        if (!endpoint) {
            response.status(404).send('Endpoint does not exist!');

            return;
        }

        response.send(endpoint);
    });

    server.post('/api/response/create', function (request, response) {
        var createdResponse = Responses.createEndpoint(request.body.response, config);

        console.log('Created response with id:', createdResponse.id);

        var updatedEndpoint = Endpoints.addResponseToEndpoint(
            request.body.endpoint,
            createdResponse.id,
            !!request.body.active,
            config
        );

        console.log('Added response to endpoint:', updatedEndpoint.id);

        response.send({
            ok: true,
            response: createdResponse,
            endpoint: updatedEndpoint
        });
    });
}

/**
 * @param {Object} config
 * @param {Function} callback
 */
module.exports.startServer = function (config, callback) {
    var server = express();

    server.use(bodyParser.json());

    setupServer(server, defaultConfig);

    server.listen(defaultConfig.port, function () {
        console.log('Server has been started on port ' + defaultConfig.port + '');
        callback();
    });
};