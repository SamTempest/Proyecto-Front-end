const e = require("express");
const registroModels = require("../models/registro.m")
const bcryptjs = require('bcryptjs');

class registroControllers {
    
    //registrar nuevo usuario
    async save(req, res, next) {
        //datos
        const { usuario_unico , contrasena , nombre_completo , correo } = req.body;
        const datos = { usuario_unico , contrasena , nombre_completo , correo };

        console.log('estamos en datos')

        //verificaciones
        try {
            const listado = await registroModels.verDB()
            console.log('estamos en registro')
            console.log(listado)
            listado.forEach(e => {
              if (e.usuario_unico == datos.usuario_unico) {
                console.log('Nombre de usuario ya existente')
                next()
              }
              if (e.correo == datos.correo) {
                console.log('El correo ingresado ya tiene una cuenta')
                next()
              }
            });
        } catch (error) { console.error(error) }

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