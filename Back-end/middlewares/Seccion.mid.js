const helpers = require('../helpers/registro.h')

class verificarSeccion{
    async seccion(req, res, next) {

        try {
            const {GalletaDeToken} = req.cookies

            if (!GalletaDeToken) {
                throw ('Requiere iniciar sección')
            }

            const token = await helpers.verificarToken(GalletaDeToken)

            next()
        } catch (error) {
            console.log(error);
            res.status("404").json({"Info":{"Error":error}})
        }

      }
}

module.exports = new verificarSeccion()