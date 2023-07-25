const conectandoDB = require("../connection/conexion");

class Constructor {

  enviarFormulario(parametros) {
    return new Promise( (resolve, reject) => {
    
      conectandoDB.query('INSERT INTO `formularios` set ?',[parametros], function (error, results, fields) {
          if (error) reject (error);
          resolve (results);
      });
  })
  }
}

module.exports = new Constructor();