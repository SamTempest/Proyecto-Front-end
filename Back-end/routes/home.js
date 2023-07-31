var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('llego peticion get');
  res.json({"Info":{"Resultado":"Se agregó correctamente"}});
});

module.exports = router;
