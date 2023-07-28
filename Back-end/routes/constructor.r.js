var express = require('express');
var router = express.Router();

let verificador = require('../middlewares/Seccion.mid')
var constructorC=require('../controllers/constructor.c')

router.get('/', constructorC.verTodo, function(req, res, next) {
  res.status("200").json({"perfecto":"llego"})
});

router.post('/', constructorC.guardar, function(req, res, next) {
  res.status("200").json({"perfecto":"llego"})
});

router.get('/', constructorC.leerTodos)


module.exports = router;
