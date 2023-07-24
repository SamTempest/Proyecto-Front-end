const conectandoDB = require("../connection/conexion")

class formulariosModels {
    listar(){
        return new Promise( (resolve, reject) => {
            //La DB seleccionara todos los formularios
            conectandoDB.query('SELECT * FROM `formularios`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            });
        })
    }
}

module.exports = new formulariosModels();