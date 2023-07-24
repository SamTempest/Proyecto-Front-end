const async = require("hbs/lib/async");


class builder{
    async save(req, res, next){
        console.log(req.body);
        const {titulo,pregunta,fecha,propietario_usuarioUnico} = req.body
        next()
    }


}

module.exports = new builder();