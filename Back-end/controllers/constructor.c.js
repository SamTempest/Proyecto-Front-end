const constructorModels = require("../models/constructor.m")


class constructor{
    async save(req, res, next){
        console.log(req.body);
        const {titulo,pregunta,fecha,propietario_usuarioUnico} = req.body
        next()
    }


}

module.exports = new constructor();