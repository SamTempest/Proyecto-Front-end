const conectandoDB = require("../connection/conexion");

class registroModels {

  guardarDB(datos) {
    return new Promise( (resolve, reject) => {
      //La DB insertará los datos del nuevo usuario
      conectandoDB.query('INSERT INTO `usuarios` set ?',[datos], function (error, results, fields) {
          if (error) reject (error);
          resolve (results);
      });
    })
  }
}

module.exports = new registroModels();