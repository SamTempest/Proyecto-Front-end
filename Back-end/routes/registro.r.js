let express = require('express');
let router = express.Router();
let registroC = require('../controllers/registro.c')

router.post('/', registroC.save, function(req, res, next){
  res.status("200").send("tenemos registro")
});

module.exports = router;