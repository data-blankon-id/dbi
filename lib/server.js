var Hapi = require('hapi');
var ext = require('./ext');
var load = require('./load');
var server = new Hapi.Server();
var makeItGood = require('./good');
var swaggerify = require('./swagger');
var argv = require('minimist')(process.argv.slice(2));

server.connection({
  port: argv.p || argv.port || process.env.PORT || 3000,
  labels: ['api'],
  routes: {
    cors: true
  }
});

// add the swagger after a valid server connection
swaggerify(server, {
  // options here
});

// resolve available plugins
load(server, {
  // options here
});

ext(server, {
  // options here
});

makeItGood(server, {
  // options here
});

module.exports = server;
