
const JWT = require('jsonwebtoken')
const cookie = require('cookie')

class registrar{
    async tockeRegistrar(inicia){
        const resultado = await JWT.sign(
            {
                name: inicia.usuario_unico,
                rol: "encuestador"

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
    async verificarToken(Token){
            try {
                const sellado = JWT.verify(Token,process.env.SECRETO);
                 return sellado
              } catch(error) {
                console.log(error);
                throw('Sección a caducado')
            }
    }
}

module.exports = new registrar();
