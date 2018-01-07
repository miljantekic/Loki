var client = require('./src/client/client');
var server = require('./src/server/server');

var Loki = {};

/**
 * @param {Object} [config]
 */
Loki.start = function (config) {
    server.startServer();
    client.renderApplication();
};

module.exports = Loki;