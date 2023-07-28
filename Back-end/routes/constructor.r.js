var express = require('express');
var router = express.Router();

let verificador = require('../middlewares/Seccion.mid')
var constructorC=require('../controllers/constructor.c')

/* GET users listing. */
router.post('/', verificador.seccion ,constructorC.guardar, function(req, res, next) {
  res.status("200").json({"perfecto":"llego"})
});

router.get('/', constructorC.leerTodos)


module.exports = router;
