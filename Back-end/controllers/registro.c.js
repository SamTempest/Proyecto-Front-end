const registroModels = require("../models/registro.m")

class registroControllers {
    
    //registrar nuevo usuario
    async save(req, res, next) {
        console.log(req.body);
        const { usuario_unico , contrasena , nombre_completo , correo } = req.body
        const datos = { usuario_unico , contrasena , nombre_completo , correo }
        next()
    }
}

module.exports = new registroControllers()