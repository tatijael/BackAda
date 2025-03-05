const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  
  socket.on('data', (data) => {
    console.log('Mensaje recibido:', data.toString());
    
    // Simular desconexión aleatoria para probar reconexión
    if (Math.random() < 0.3) {
      console.log('Simulando desconexión');
      socket.end();
    } else {
      socket.write('Confirmación del servidor');
    }
  });
  
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
  
  socket.on('error', (err) => {
    console.error('Error en socket del servidor:', err);
  });
});

const PORT = 5003;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});