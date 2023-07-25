const conectandoDB = require("../connection/conexion");

class Constructor {
  async enviar_a_base() {
    try {
      // Query con promesas
      const [rows] = await conectandoDB.promise().query(
        "SELECT * FROM formularios"
      );

      console.log(rows); // resultados

    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Constructor();