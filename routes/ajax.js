var express = require('express');
var router = express.Router();

router.get('/get', function(req, res, next){
  console.log(req.body);
   res.json([{ name: 'Peter', data: 'bla-bla'} , { name: 'Vasiliy', data: 'ps...'}]);
});

module.exports = router;