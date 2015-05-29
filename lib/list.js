var npm = require('npm');

module.exports = function(){
  npm.load({}, function(err){
    if (err) {
      console.log('Something is wrong');
      process.exit();
    }
    console.log('Searching...'); 
    npm.commands.search(['data.blankon.id'], function(err, data){
      if (err) {
        console.log('Something is wrong');
        process.exit();
      }
      for (var k in data) {
        if (k != 'data.blankon.id')
          console.log(k.split('-').pop());
      }
    });
  });
}
