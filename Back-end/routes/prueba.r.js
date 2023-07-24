var express = require('express');
var router = express.Router();

const formulariosControllers = require("../controllers/prueba.c")

router.get('/', function(req, res, next) {
    formulariosControllers.listar()
    .then((resultado) =>{
        res.status(200).send(resultado);
    })
    .catch ((err) => {
        res.status(404).render('error');
    })
});
  
module.exports = router;