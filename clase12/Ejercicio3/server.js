const net = require('net');
const MovieController = require('./controllers/movieController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const titulo = data.toString().trim();
        console.log(`Solicitud recibida para la película: ${titulo}`);

        const response = MovieController.handleRequest(titulo);
        socket.write(response);
        socket.end(); 
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(4002, () => {
    console.log('Servidor escuchando en el puerto 4002');
});