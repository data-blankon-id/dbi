var GoodWinston = require('good-winston');
var winston = require('winston');
require('winston-redis').Redis;
winston.add(winston.transports.Redis);

module.exports = function(server, options) {
  server.register({
    register: require('good'),
    options: {
      reporters: [
        new GoodWinston({
          ops: '*',
          request: '*',
          response: '*',
          log: '*',
          error: '*'
        }, winston)
      ]
    }
  }, function(err) {
    if (err)
      throw err;
  });
}
