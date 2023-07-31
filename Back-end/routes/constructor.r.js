var express = require('express');
var router = express.Router();

let verificador = require('../middlewares/Seccion.mid')
var constructorC=require('../controllers/constructor.c')

router.post('/', verificador.seccion ,constructorC.guardar);

router.get('/', constructorC.leerTodos)


module.exports = router;
