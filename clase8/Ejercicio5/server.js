const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log('Mensaje del cliente:', data.toString());
        socket.write('Estoy aquí, cliente');
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error('Error en la conexión:', err);
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});