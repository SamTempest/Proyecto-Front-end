const conectandoDB = require("../connection/conexion");

class Constructor {

  enviar_a_base(parametros) {
    return new Promise( (resolve, reject) => {
      //La DB seleccionara todos los formularios
      conectandoDB.query('INSERT INTO `formularios` set ?',[parametros], function (error, results, fields) {
          if (error) reject (error);
          resolve (results);
      });
  })
  }
}

module.exports = new Constructor();