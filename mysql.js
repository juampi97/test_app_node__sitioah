// Importar el paquete mysql2
const mysql = require('mysql2');

// Crear una conexión con MySQL
const connection = mysql.createConnection({
  host: 'antiguohobby.com.ar',  // Cambia por la IP o dominio del servidor MySQL
  user: 'antiguohobby_video', // Cambia por tu usuario de MySQL
  password: 'scu1.Fl5#k.g', // Cambia por tu contraseña de MySQL
  database: 'antiguohobby_video', // Cambia por el nombre de tu base de datos
  port: 3306
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL: ', err);
    return;
  }
  console.log('Conectado a MySQL con éxito');
  
  // Ejemplo de consulta
  connection.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
      console.error('Error en la consulta: ', err);
      return;
    }
    console.log('Resultado de la consulta: ', results[0].resultado);
    
    // Cerrar la conexión
    connection.end();
  });
});

