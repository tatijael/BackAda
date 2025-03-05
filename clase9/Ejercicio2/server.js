const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.write('Bienvenido al servidor');

    const interval = setInterval(() => {
        socket.write('Datos del servidor');
    }, 1000);

    socket.on('end', () => {
        console.log('Cliente desconectado');
        clearInterval(interval);
    });
    
    socket.on('error', (err) => {
        console.error('Error en la conexión:', err);
    });
});

server.listen(5001, () => {
    console.log('Servidor escuchando en el puerto 5001');
});