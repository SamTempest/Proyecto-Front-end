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
             console.log(typeof(listado))
             console.log("hasta aqui lo esperadoooooooo");
            for (let i = 0; i < listado.length; i++) {
                const listados = listado[i];
                if (listados.usuario_unico == datos.usuario_unico) {
                    throw ("'Nombre de usuario ya existente'")
                  }
                  if (listados.correo == datos.correo) {
                    throw ('El correo ingresado ya tiene una cuenta')
                  }
            }
                    //encriptado
            let encriptado = await bcryptjs.hash(datos.contrasena, 8);
            datos.contrasena = encriptado;
            console.log(datos.contrasena)
            console.log(datos)

            registroModels.guardarDB(datos)
            next()
            
        
        } catch (error) {
            console.error(error) 
        }


    }
}



module.exports = new registroControllers()