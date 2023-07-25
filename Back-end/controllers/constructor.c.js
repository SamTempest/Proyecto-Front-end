const constructorModels = require("../models/constructor.m")


class constructor{
    async save(req, res, next){
        console.log(req.body);
        const fechaActual = new Date();
    
        const {titulo,pregunta,propietario_usuarioUnico} = req.body

        var usuario_creador = propietario_usuarioUnico
        var descripcion = "Vacía de momento"
        var fecha_modificacion =  fechaActual.toISOString()
        var fecha_creacion = fechaActual.toISOString()

        const parametros = { usuario_creador, titulo, descripcion, fecha_modificacion, fecha_creacion }
        
        constructorModels.enviar_a_base(parametros)
        
        next()
    }


}

module.exports = new constructor();