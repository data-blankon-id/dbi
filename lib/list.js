var fs = require('fs');
module.exports = function(){
  console.log('Available data: ');
  var arr = [];
  try {
    arr = fs.readdirSync(__dirname + '/node_modules');
  } catch (ex) {
    arr = fs.readdirSync(__dirname + '/../node_modules'); 
  } 
  arr.forEach(function(dir){
    if (dir.indexOf('data.blankon.id-') == 0)
      console.log('-', dir.split('-').pop());
  });
}
