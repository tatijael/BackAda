const net = require('net');
const BookController = require('./controllers/bookController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const id = parseInt(data.toString().trim(), 10);
        console.log(`Solicitud recibida para el libro con ID: ${id}`);

        const response = BookController.handleRequest(id);
        socket.write(response);
        socket.end(); // Cerrar la conexión después de enviar la respuesta
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000');
});