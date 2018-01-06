var fs = require('fs');

var defaultConfig = {
    resourcesPath: process.cwd() + '/resources/loki/'
};

var ENDPOINTS_DIR = 'endpoints';
var RESPONSES_DIR = 'responses';

module.exports.startServer = function () {
    var path = defaultConfig.resourcesPath + ENDPOINTS_DIR;

    fs.readdir(path, function(err, items) {
        console.log(items);

        for (var i=0; i<items.length; i++) {
            console.log(JSON.parse(fs.readFileSync(path + '/' + items[i], 'utf8')));
        }
    });

    console.log('Server has been started', path);
};