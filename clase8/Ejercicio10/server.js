const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  
  // Enviar mensajes poco frecuentes para probar el timeout
  const intervalId = setInterval(() => {
    socket.write('Mensaje ocasional del servidor');
  }, 15000);
  
  socket.on('data', (data) => {
    console.log('Mensaje recibido del cliente:', data.toString());
  });
  
  socket.on('end', () => {
    clearInterval(intervalId);
    console.log('Cliente desconectado');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
