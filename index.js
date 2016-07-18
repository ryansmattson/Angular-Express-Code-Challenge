var router = require('express').Router();
var path = require('path');

router.get('/', function(request, response){
  var createdPath = path.join(__dirname, './public/index.html');
  response.sendFile(createdPath);
})


module.exports = router;
