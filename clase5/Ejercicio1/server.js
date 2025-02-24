const net = require('net');

// Crear el servidor TCP
const servidor = net.createServer((socket) => {
    console.log('¡Un cliente se ha conectado!');

    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`Mensaje recibido del cliente: ${mensaje}`);
        socket.write('¡Hola, cliente! Tu mensaje fue recibido correctamente.\n');
    });

    socket.on('end', () => {
        console.log('El cliente se ha desconectado.');
    });

    socket.on('error', (err) => {
        console.error(`Error en la conexión: ${err.message}`);
    });
});

servidor.on('error', (err) => {
    console.error(`Error en el servidor: ${err.message}`);
});
