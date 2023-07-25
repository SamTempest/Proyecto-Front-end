const conectandoDB = require("../connection/conexion");

class Constructor {

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

module.exports = new Constructor();