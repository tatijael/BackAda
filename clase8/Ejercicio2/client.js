const net = require('net');
const readlineSync = require('readline-sync');

// Crear la conexión al servidor
const client = net.createConnection({ port: 3000 }, () => {
    console.log("Conectado al servidor");
 
    // Prompt the user for input once
    const message = readlineSync.question('Ingresa un mensaje (o "/salir" para desconectar): ');
    if (message.toLowerCase() === '/salir') {
        client.end();
    } else {
        client.write(message);
    }
});

// Manejar datos recibidos del servidor
client.on('data', (data) => {
    console.log("Respuesta del servidor:", data.toString());
});

// Manejar la desconexión del servidor
client.on('end', () => {
    console.log("Desconectado del servidor");
});

// Manejar errores de conexión
client.on('error', (err) => {
    console.error("Error en la conexión:", err);
});