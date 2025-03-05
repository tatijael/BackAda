// Ejercicio 10: Cliente que detecta pérdida de conexión
// Consigna
// Crea un cliente que:
// 1. Si deja de recibir datos durante 10 segundos, muestre " datos del servidor" y cierre la conexión.
// No hay
// Pistas
// • Usa setTimeout() que se reinicie con cada mensaje recibido.
// • Si pasan 10 segundos sin mensajes, cierra con client.end().


const net = require('net');

function createClient() {
  const client = new net.Socket();
  let dataTimeout;

  function resetTimeout() {
    // Limpiar el timeout anterior si existe
    if (dataTimeout) {
      clearTimeout(dataTimeout);
    }
    
    // Establecer nuevo timeout de 10 segundos
    dataTimeout = setTimeout(() => {
      console.log('Sin datos del servidor');
      client.end();
    }, 10000);
  }
  
  client.on('connect', () => {
    console.log('Conectado al servidor');
    // Enviar un mensaje inicial
    client.write('Hola, soy el cliente');
    // Iniciar el timeout
    resetTimeout();
  });
  
  client.on('data', (data) => {
    console.log('Datos recibidos:', data.toString());
    // Reiniciar el timeout cada vez que se reciben datos
    resetTimeout();
  });
  
  client.on('end', () => {
    console.log('Conexión cerrada');
  });
  
  client.on('close', () => {
    if (dataTimeout) {
      clearTimeout(dataTimeout);
    }
    console.log('Socket cerrado');
  });
  
  client.on('error', (err) => {
    console.error('Error de conexión:', err.message);
  });
  
  client.connect(3000, 'localhost');
}

createClient();