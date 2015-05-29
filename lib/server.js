var Hapi = require('hapi');
var load = require('./load');
var server = new Hapi.Server();
var swaggerify = require('./swagger');
var argv = require('minimist')(process.argv.slice(2));

server.connection({
  port: argv.p || argv.port || process.env.PORT || 3000,
  labels: ['api']
});

// add the swagger after a valid server connection
swaggerify(server, {
  // options here
});

// resolve available plugins
load(server, {
  // options here
});

module.exports = server;
