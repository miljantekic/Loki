var client = require('./src/client/client');
var server = require('./src/server/server');

var Loki = {};

Loki.start = function () {
    server.startServer();
    client.renderApplication();
};

module.exports = Loki;