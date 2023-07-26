const conectandoDB = require("../connection/conexion");

class Constructor {

  guardarFormulario(parametros) {
    return new Promise( (resolve, reject) => {
    
      conectandoDB.query('INSERT INTO `formularios` set ?',[parametros], function (error, resultado, fields) {
          if (error) reject (error);
          resolve (resultado);
      });
  })
  }

  guardarPreguntas(parametros){
    return new Promise((resolve, reject) => {
      conectandoDB.query('INSERT INTO `preguntas` set ?',[parametros], function(error,resultado){
        if (error) reject(error);
        resolve(resultado);
      })
    })
  } 
}

module.exports = new Constructor();