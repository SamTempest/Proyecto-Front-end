const constructorModels = require("../models/constructor.m")


class constructor{
    async save(req, res, next){
        console.log(req.body);
        const {usuario_creador, nombre,pregunta, descripcion, fecha_modificacion, fecha_creacion} = req.body
        const parametros = { usuario_creador, nombre,pregunta, descripcion, fecha_modificacion, fecha_creacion }
        next()
    }


}

module.exports = new constructor();