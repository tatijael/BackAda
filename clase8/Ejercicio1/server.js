const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log('Mensaje recibido:', data.toString());
        socket.write('Mensaje recibido correctamente');
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
      console.error('Error de conexión:', err);
  });

});

server.on('error', (err) => {
  console.error('Error del servidor:', err);
});

server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});