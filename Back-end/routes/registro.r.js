let express = require('express');
let router = express.Router();
let registroC = require('../controllers/registro.c')

router.post('/', registroC.save, function(req, res, next){
  try {
    res.status(200).send("tenemos registro")
  } catch (error) {
    res.status(404).send("ocurrio un error")
  }
});

module.exports = router;