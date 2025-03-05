// Ejercicio 1: Conectar y enviar un mensaje al servidor
//  Consigna
// Crea un cliente TCP que:
// 1. Se conecte a un servidor en localhost:5000.
// 2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
// servidor!".
// 3. Escuche los datos recibidos y los muestre en consola.
//  Pistas
// • Usa net.createConnection() para conectar al servidor.
// • Maneja el evento 'connect' para saber cuándo la conexión está
// lista.
// • Usa client.write() para enviar el mensaje.
// • Captura los datos con el evento 'data'.

// Importar el módulo net
const net = require('net');

// Crear un cliente TCP
const client = net.createConnection({ port: 5000, host: 'localhost' }, () => {
    // Este callback se ejecuta cuando la conexión se establece
    console.log('Conectado al servidor');

    // Enviar un mensaje al servidor
    client.write('¡Hola, servidor!');
});

// Escuchar los datos recibidos del servidor
client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());

    // Cerrar la conexión después de recibir los datos (opcional)
    client.end();
});

// Manejar el cierre de la conexión
client.on('end', () => {
    console.log('Desconectado del servidor');
});

// Manejar errores de conexión
client.on('error', (err) => {
    console.error('Error en la conexión:', err);
});