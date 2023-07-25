require('dotenv').config();

console.log('estoy en conexion')

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
}); 
 
connection.connect(function (err) {
    if (err) {
        console.error('Error de Conexión con la base de datos: ' + err.stack);
        return;
    }

    console.log ('DB conectada  ' + connection.threadId);
});
 

module.exports = connection;