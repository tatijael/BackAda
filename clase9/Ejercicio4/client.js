// DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado
// Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras
// 20 segundos.
// El cliente debe:
// Conectarse y enviar un mensaje inicial.
// Enviar un mensaje "Mensaje automático" cada 5 segundos.
// Escuchar el evento 'data' y mostrar los datos recibidos.
// Cerrar la conexión con client.end() tras 20 segundos.

const net = require('net');

function createClient() {
  const client = new net.Socket();
  
  client.on('connect', () => {
    console.log('Conectado al servidor');
    
    client.write('Hola, servidor. Inicio de comunicación.');
    
    const messageInterval = setInterval(() => {
      client.write('Mensaje automático');
      console.log('Mensaje automático enviado');
    }, 5000);
    
    const closeTimeout = setTimeout(() => {
      console.log('Cerrando conexión después de 20 segundos');
      clearInterval(messageInterval);
      client.end();
    }, 20000);
    
    client.on('close', () => {
      clearInterval(messageInterval);
      clearTimeout(closeTimeout);
    });
  });
  
  client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
  });
  
  client.on('error', (err) => {
    console.error('Error de conexión:', err.message);
  });
  
  client.connect(5003, 'localhost');
}

createClient();
