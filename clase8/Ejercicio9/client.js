// Ejercicio 9: Cliente que reconecta automáticamente
// Consigna
// Crea un cliente que:
// 1. Si la conexión falla, reintente conectarse cada 3 segundos hasta
// que tenga éxito.
// Pistas
// • Usa setTimeout() para intentar de nuevo tras 3 segundos.
// • Llama a net.createConnection() dentro del reintento.

const net = require('net');

function createClient() {
  const client = new net.Socket();
  
  client.on('connect', () => {
    console.log('Conectado al servidor');
    client.write('Hola, soy el cliente');
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
    setTimeout(createClient, 3000);
  });
  
  client.connect(3000, 'localhost');
}

createClient();