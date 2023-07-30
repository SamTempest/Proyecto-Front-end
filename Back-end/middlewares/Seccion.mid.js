const helpers = require('../helpers/registro.h')

class verificarSeccion{
    async seccion(req, res, next) {

        try {
            const {GalletaDeToken} = req.cookies
            const token = await helpers.verificarToken(GalletaDeToken)


            if (!GalletaDeToken) {
                throw ('Requiere iniciar sección')
            }

            next()
        } catch (error) {
            console.log(error);
            res.status("404").json({"Info":{"Error":error}})
        }

      }
}