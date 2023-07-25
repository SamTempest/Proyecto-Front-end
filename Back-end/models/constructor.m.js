const conectandoDB = require("../connection/conexion");

class Constructor {
  async enviar_a_base(parametros) {
    try {
      // Query con promesas
      const [rows] = await connection.query(
        'INSERT INTO `formularios` set ?', [parametros], function(err, results) {
          console.log(results);
        }
      );

      console.log(rows); // resultados

    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Constructor();