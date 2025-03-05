const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  
  socket.on('data', (data) => {
    console.log('Mensaje recibido:', data.toString());
    socket.write(`Servidor recibió: ${data}`);
  });
  
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
  
  socket.on('error', (err) => {
    console.error('Error en socket del servidor:', err);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on('error', (err) => {
  console.error('Error en el servidor:', err);
});