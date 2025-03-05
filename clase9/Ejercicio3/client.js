// DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
// Objetivo: Implementar un timeout que cierre la conexión si no recibe
// datos en 10 segundos.
// El cliente debe:
// Conectarse y enviar un mensaje inicial.
// Configurar un setTimeout() de 10 segundos para cerrar la conexión si
// no recibe datos.
// Escuchar el evento 'data' y cancelar el timeout si recibe información.
// Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un
// mensaje en consola.


const net = require('net');

function createClient() {
  const client = new net.Socket();

  client.on('connect', () => {
    console.log('Conectado al servidor');
    client.write('¡Hola, servidor!');

    const timeout = setTimeout(() => {
      console.log('No se recibieron datos en 10 segundos. Destruyendo la conexión.');
      client.destroy();
    }, 10000);

    client.on('data', (data) => {
      console.log('Datos recibidos:', data.toString());
      clearTimeout(timeout); 
    });
  });

  client.on('close', () => {
    console.log('Conexión cerrada');
  });

  client.on('error', (err) => {
    console.error('Error en el cliente:', err);
  });
}

createClient();