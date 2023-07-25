var express = require('express');
var router = express.Router();

var constructorC=require('../controllers/constructor.c')

/* GET users listing. */
router.post('/', constructorC.save, function(req, res, next) {
  res.status("200").send("llega")
});

module.exports = router;
