// DESAFÍO 1: Cliente con Reconexión Automática
// Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
// conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
// El cliente debe:
// Conectarse al servidor en el puerto 5000.
// Enviar un mensaje inicial: "¡Hola, servidor!".
// Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
// Escuchar y manejar 'error', mostrando el mensaje en consola.

const net = require('net');

function createClient() {
  const client = new net.Socket();
  
  client.on('connect', () => {
    console.log('Conectado al servidor');
    client.write('¡Hola, servidor!');
  });
  
  client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
  });
  
  client.on('close', () => {
    console.log('Conexión cerrada, reintentando...');
    setTimeout(createClient, 3000);
  });
  
  client.on('error', (err) => {
    console.error('Error de conexión:', err.message);
  });
  
  client.connect(5001, 'localhost');
}

createClient();