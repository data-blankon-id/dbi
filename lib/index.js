var pm2 = require('pm2');
var pkg = require('../package');
var server = require('./server');

module.exports = function(options) {
  options = options || {};

  if (!options.daemonize)
    return server.start(function(){
      console.log('blankon-data-id is serving...', server.info.port);
    });

  pm2.connect(~~options.foreground, function(){
    pm2.start({
      name: pkg.name,
      script: __dirname + '/pm2.js',
      exec_mode: 'cluster',
      instances: 1, // options
    }, function(err){
      console.log(err || 'blankon-data-id is serving...')
      pm2.disconnect();
    });
  });
}
