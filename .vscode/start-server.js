var host = '0.0.0.0';
var port = 8081;
var cors_proxy = require('../lib/cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: ['origin']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});