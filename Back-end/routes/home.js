var express = require('express');
var router = express.Router();

const cors = require('cors');

router.use(cors());

router.get('/', function(req, res, next) {
  console.log('llego peticion get');
  res.json({"Info":{"Resultado":"Se agregó correctamente"}}).status('200');
});

module.exports = router;
