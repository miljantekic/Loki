var client = require('./src/client/client');
var server = require('./src/server/server');

var Loki = {};

/**
 * @param {Object} [config]
 */
Loki.start = function (config) {
    var serverCallback = function () {
        client.renderApplication();
    };

    server.startServer(config, serverCallback);
};

module.exports = Loki;