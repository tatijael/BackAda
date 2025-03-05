// DESAFÍO 7: Cliente con Envío de Comandos, Validación y Auto-
// Desconexión
// Objetivo: Implementar un cliente TCP que permita al usuario ingresar
// comandos desde la terminal, los valide antes de enviarlos y cierre la
// conexión si se recibe una respuesta específica del servidor.
// El cliente debe:
// Conectarse al servidor en el puerto 5000.
// Leer la entrada del usuario desde la terminal con readline.
// Solo permitir comandos que empiecen con CMD_ (ejemplo:
// CMD_HOLA, CMD_ADIOS).
// Enviar los comandos al servidor solo si son válidos.
// Escuchar respuestas del servidor.
// Si el servidor responde "EXIT", cerrar la conexión y terminar el
// programa.
// PISTA: Usen readline para capturar la entrada del usuario y RegExp
// para validar los comandos.

const net = require('net');
const readline = require('readline');

function createClient() {
  const client = new net.Socket();
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const commandRegex = /^CMD_[A-Z]+$/;
  
  client.on('connect', () => {
    console.log('Conectado al servidor');
    console.log('Ingrese comandos (debe comenzar con CMD_):');
    
    function promptCommand() {
      rl.question('> ', (input) => {
        if (commandRegex.test(input)) {
          client.write(input);
        } else {
          console.log('Comando inválido. Debe comenzar con CMD_ seguido de letras mayúsculas.');
          promptCommand();
        }
      });
    }
    
    promptCommand();
  });
  
  client.on('data', (data) => {
    const response = data.toString().trim();
    console.log('Respuesta del servidor:', response);
    
    if (response === 'EXIT') {
      console.log('Servidor solicita desconexión');
      client.end();
      rl.close();
      process.exit(0);
    }
  });
  
  client.on('close', () => {
    console.log('Conexión cerrada');
    rl.close();
  });
  
  client.on('error', (err) => {
    console.error('Error de conexión:', err.message);
    rl.close();
  });
  
  client.connect(5003, 'localhost');
}

createClient();