const net = require('net');
const readline = require('readline');

function createClient() {
  const client = new net.Socket();
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  client.connect(5003, 'localhost', () => {
    console.log('Conectado al servidor');
    console.log('Escribe mensajes (escribe "EXIT" para salir):');
    
    function promptMessage() {
      rl.question('> ', (message) => {
        if (message.toUpperCase() === 'EXIT') {
          client.end();
          rl.close();
          return;
        }
        
        client.write(message);

        promptMessage();
      });
    }
    
    promptMessage();
  });
  
  client.on('data', (data) => {
    console.log('Servidor:', data.toString().trim());
  });

  client.on('close', () => {
    console.log('Desconectado del servidor');
    process.exit(0);
  });
  
  client.on('error', (err) => {
    console.error('Error de conexión:', err);
    rl.close();
  });
}

createClient();