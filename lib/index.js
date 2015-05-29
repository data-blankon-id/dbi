var pm2 = require('pm2');
var pkg = require('../package');
var server = require('./server');

module.exports = function(options) {
  options = options || {}; 
  if (!options.pm2)
    return server.start(function(){
      console.log('blankon-data-id is serving...', server.info.port);
    });

  pm2.connect(~~options.foreground, function(){
    pm2.start({
      name: pkg.name,
      script: __dirname + '/server.js',
      exec_mode: 'cluster',
      instances: 1
    }, function(err){
      console.log(err || 'blankon-data-id is serving...')
      pm2.disconnect();
    });
  });
}