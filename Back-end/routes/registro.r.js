let express = require('express');
let router = express.Router();
let registroC = require('../controllers/registro.c')

router.post('/', registroC.save);

router.post('/iniciar', registroC.verificarIngreso);


module.exports = router;