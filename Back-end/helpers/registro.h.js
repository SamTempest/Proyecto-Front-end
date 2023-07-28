
const JWT = require('jsonwebtoken')
const cookie = require('cookie')

class registrar{
    async tockeRegistrar(inicia){
        const resultado = await JWT.sign(
            {
                name: inicia.usuario_unico
                
            },
            process.env.SECRETO,
            {
                expiresIn:"1h"
            }
        )
        return  await cookie.serialize('GalletaDeToken', resultado, {
            httpOnly: true,
            secure: false,//process.env.VERI =="produccion",
            sameSite:'strict',
            maxAge: 1800,
            path:'/'

        })
    }
}

module.exports = new registrar();
