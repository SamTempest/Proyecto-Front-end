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

  leerTodosFormularios(){
    return new Promise((resolve, reject) => {
      conectandoDB.query('SELECT * FROM `formularios` ', function(error,resultado){
        if (error) reject(error);
        resolve(resultado);
      })
    })
  }
  leerTodosPreguntas(formulario){
    return new Promise((resolve, reject) => {
      conectandoDB.query('SELECT * FROM `preguntas` WHERE formulario = ? ',[formulario] , function(error,resultado){
        if (error) reject(error);
        resolve(resultado);
      })
    })
  }
  creadorDelFormulario(formulario){
    return new Promise((resolve, reject) => {
      conectandoDB.query('SELECT * FROM `usuarios` WHERE id = ? ',[formulario] , function(error,resultado){
        if (error) reject(error);
        resolve(resultado);
      })
    })
  }

}

module.exports = new Constructor();