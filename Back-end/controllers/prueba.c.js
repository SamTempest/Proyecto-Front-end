const formulariosModels = require("../models/prueba.m")

class formulariosControllers {
    listar() {
        return new Promise((resolve, reject) => {
            formulariosModels.listar()
            .then((resultado) => { 
                if (resultado.length == 0) { 
                  return resolve('no hay formularios :)') 
                }
                resolve (resultado) 
              })
              .catch((err) => { 
                reject (err)
              }) 
        })
    }
}

module.exports = new formulariosControllers();