const registroModels = require("../models/registro.m")
const bcryptjs = require('bcryptjs');

class registroControllers {
    
    //registrar nuevo usuario
    async save(req, res, next) {
        const { usuario_unico , contrasena , nombre_completo , correo } = req.body;
        const datos = { usuario_unico , contrasena , nombre_completo , correo };

        //encriptado
        let encriptado = await bcryptjs.hash(datos.contrasena, 8);
        datos.contrasena = encriptado;
        console.log(datos.contrasena)
        console.log(datos)

        registroModels.guardarDB(datos)

        next()
    }
}

module.exports = new registroControllers()