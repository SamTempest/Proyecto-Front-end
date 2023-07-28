const e = require("express");
const registroModels = require("../models/registro.m")
const bcryptjs = require('bcryptjs');
const registroHelper = require('../helpers/registro.h')


class registroControllers {
    
    //registrar nuevo usuario
    async save(req, res, next) {
        //datos
        const { usuario_unico , contrasena , nombre_completo , correo , edad, fecha_nacimiento } = req.body;
        const datos = { usuario_unico , contrasena , nombre_completo , correo, edad, fecha_nacimiento };

        console.log('estamos en datos')

        //verificaciones
         try {
            if (!Number(datos.edad)) {
                throw ("Edad tiene que estar representada como número")
            }
            if (isNaN(Date.parse(datos.fecha_nacimiento))) {
                throw ("La fecha tiene que estar representada como Date")
            }
             const listado = await registroModels.verDB()
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
            
            res.status('200').json({"Info":{"Resultado":"Se agregó correctamente"}})
        
        } catch (error) {
            console.error(error) 
            res.status('404').json({"Info":{"Error":error}});
        }


    }

    async verificarIngreso(req, res, next){
        const {usuario_unico ,contrasena} = req.body
        const datos = {usuario_unico ,contrasena}
        try {
            const listado = await registroModels.verDB()
            for (let i = 0; i < listado.length; i++) {
                const listados = listado[i];
                
                if (listados.usuario_unico == datos.usuario_unico) {
                    let verificarContrasena = await bcryptjs.compare(datos.contrasena , listados.contrasena)
                    console.log(verificarContrasena);
                    if (!verificarContrasena) {
                         throw("error en la contraseña");
                    }
                    console.log(verificarContrasena);

                    const galleta = await registroHelper.tockeRegistrar(datos)

                    return res.setHeader('Set-Cookie', galleta).status('200').json({"Info":{"Resultado":"Se inicio sección correctamente"}})
                }


            }
            let mensajeError = `Nombre de usuario ${datos.usuario_unico} no existente`
            throw (mensajeError)


        } catch (error) {
            console.log(error);
            res.status("404").json({"Info":{"Error":error}})
        }

    }
}


module.exports = new registroControllers()