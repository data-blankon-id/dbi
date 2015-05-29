var npm = require('npm');
var PREFIX = 'data.blankon.id-';

function install(package, cb) {
  npm.load({}, function(){
    npm.commands.install(__dirname, [PREFIX + package], cb);
  });
}

module.exports = function(options) {
  var packages = options.args || [];
  if (packages.length == 0) {
    console.log('e.g. weather please.');
    return;
  }
  packages.forEach(function(package){
    install(package, function(err, data){
      if (err)
        console.log(err);
    });
  });
}
