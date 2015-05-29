var fs = require('fs');
var PREFIX = 'data.blankon.id-';

module.exports = function(server, options) {

var modules = fs.readdirSync(__dirname + '/node_modules');
modules.forEach(function(module){
  if (module.indexOf(PREFIX) == 0) {
    console.log('loading: ', module);
    server.register({
      register: require(module),
      options: {} // should do something with this
    }, {
      select: ['api'],
      routes: {
        prefix: '/api'
      }
    }, function(err) {
      if (err)
        throw err;
    });
  }
});

}
