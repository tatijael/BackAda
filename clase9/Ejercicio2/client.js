// DESAFÍO 2: Cliente con Pausa y Reanudación de Datos
// Objetivo: Simular un cliente que pausa la recepción de datos por 5
// segundos y luego la reanuda.
// El cliente debe:
// Conectarse al servidor y enviar un mensaje inicial.
// Escuchar el evento 'data' y mostrar los datos en consola.
// Pausar la recepción de datos usando client.pause() a los 3 segundos.
// Reanudar la recepción de datos con client.resume() a los 8 segundos.
// Finalizar la conexión tras 15 segundos.


const net = require('net');

function createClient() {
  const client = new net.Socket();  

  client.on('connect', () => {
    console.log('Conectado al servidor');
    client.write('¡Hola, servidor!');
  });

  client.on('data', (data) => {
    console.log('Datos recibidos:', data.toString());
  });
  client.on('close', () => {
    console.log('Conexión cerrada');
  });
  client.on('error', (err) => {
    console.error('Error en el cliente:', err);
  });
  return client;
}
const client = createClient();

client.connect(5000, 'localhost');
