const net = require('net');
const HotelController = require('./controllers/hotelController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const id = parseInt(data.toString().trim(), 10);
        console.log(`Solicitud recibida para el hotel con ID: ${id}`);

        const response = HotelController.handleRequest(id);
        socket.write(response);
        socket.end(); 
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(4001, () => {
    console.log('Servidor escuchando en el puerto 4001');
});