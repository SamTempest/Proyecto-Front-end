const constructorModels = require("../models/constructor.m")
const fechaActual = new Date();

class constructor{
    async guardar(req, res, next){
        console.log(req.body);
        const {titulo,pregunta, descripcion,propietario_usuarioUnico} = req.body

        let usuario_creador = propietario_usuarioUnico
        let fecha_modificacion =  fechaActual.toISOString()
        let fecha_creacion = fechaActual.toISOString()
        
        const parametros = { usuario_creador, titulo, descripcion, fecha_modificacion, fecha_creacion }
        
        constructorModels.enviarFormulario(parametros)
        
        next()
    }
}

module.exports = new constructor();