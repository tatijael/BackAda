// DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo
// de Fallos
// Objetivo: Crear un cliente TCP que intente reconectarse si la
// conexión se pierde, pero que abandone después de 5 intentos fallidos.
// El cliente debe:
// Intentar conectarse al servidor.
// Si se desconecta, volver a intentar cada 2 segundos.
// Llevar un contador de intentos fallidos.
// Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de
// error.
// Manejar adecuadamente los eventos 'error', 'close' y 'data'.
// PISTA: Usen un contador global de intentos y un setTimeout() para
// gestionar los reintentos.

const net = require('net');

function createClient() {
  let failedAttempts = 0;
  const MAX_ATTEMPTS = 5;
  
  function attemptConnection() {
    const client = new net.Socket();
    
    client.on('connect', () => {
      console.log('Conectado al servidor');
      failedAttempts = 0; 
      
      client.write('Hola, servidor. Conexión establecida.');
    });
    
    client.on('data', (data) => {
      console.log('Datos recibidos:', data.toString());
    });
    
    client.on('close', () => {
      console.log('Conexión cerrada');
  
      failedAttempts++;
      
      if (failedAttempts < MAX_ATTEMPTS) {
        console.log(`Intento de reconexión ${failedAttempts}/${MAX_ATTEMPTS}`);
        setTimeout(attemptConnection, 2000);
      } else {
        console.error(`Máximo de ${MAX_ATTEMPTS} intentos alcanzados. Terminando proceso.`);
        process.exit(1);
      }
    });
    
    client.on('error', (err) => {
      console.error('Error de conexión:', err.message);
      
      failedAttempts++;
      
      if (failedAttempts < MAX_ATTEMPTS) {
        console.log(`Intento de reconexión ${failedAttempts}/${MAX_ATTEMPTS}`);
        setTimeout(attemptConnection, 2000);
      } else {
        console.error(`Máximo de ${MAX_ATTEMPTS} intentos alcanzados. Terminando proceso.`);
        process.exit(1);
      }
    });
    
    client.connect(5003, 'localhost');
  }
  
  attemptConnection();
}

createClient();
