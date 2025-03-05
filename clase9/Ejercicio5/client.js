// DESAFÍO 5: Cliente con Eventos y Control de Referencias
// Objetivo: Aplicar ref() y unref() para controlar la terminación del
// proceso de Node.js.
// El cliente debe:
// Conectarse y enviar un mensaje inicial.
// Escuchar los eventos 'data', 'end', 'close' y 'error'.
// Llamar a client.unref() a los 10 segundos para permitir que el proceso
// termine.
// mantenga activo.
// A los 15 segundos, llamar a client.ref() para que el proceso se
// Cerrar la conexión a los 20 segundos.


const net = require('net');

function createClient() {
  const client = new net.Socket();
  
  client.on('connect', () => {
    console.log('Conectado al servidor');
    
    client.write('Hola, servidor. Iniciando comunicación con referencias.');
    
    client.on('data', (data) => {
      console.log('Datos recibidos:', data.toString());
    });
    
    client.on('end', () => {
      console.log('Conexión terminada');
    });
    
    client.on('close', () => {
      console.log('Socket cerrado');
    });
    
    client.on('error', (err) => {
      console.error('Error de conexión:', err.message);
    });

    console.log('Cliente conectado. El proceso se mantendrá activo.');
    
    setTimeout(() => {
      console.log('10 segundos: Llamando a client.unref()');
      client.unref();
      console.log('El proceso puede terminar si no hay otras referencias activas');
    }, 10000);
  
    setTimeout(() => {
      console.log('15 segundos: Llamando a client.ref()');
      client.ref();
      console.log('El proceso se mantendrá activo');
    }, 15000);
    
    setTimeout(() => {
      console.log('20 segundos: Cerrando conexión');
      client.end();
    }, 20000);
  });
  
  client.connect(5005, 'localhost');
}

createClient();