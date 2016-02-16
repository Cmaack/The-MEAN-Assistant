var express = require('express');
var router = express.Router();

router.get('/api/profile', function(req, res){
  res.render( 'profile' );

})

module.exports = router;
