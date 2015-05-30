var npm = require('npm');
var PREFIX = 'data.blankon.id-';

function install(package, cb) {
  npm.load({}, function(){
    var re = new RegExp("^(http|https)://", "i");
    package = re.test(package) ? package : (PREFIX + package);
    npm.commands.install(__dirname, [package], cb);
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
