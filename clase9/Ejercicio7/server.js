const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  
  socket.on('data', (data) => {
    const command = data.toString().trim();
    console.log('Comando recibido:', command);
    
    switch(command) {
      case 'CMD_HOLA':
        socket.write('Hola! Bienvenido al servidor');
        break;
      case 'CMD_STATUS':
        socket.write('Servidor funcionando correctamente');
        break;
      case 'CMD_ADIOS':
        socket.write('EXIT');
        break;
      default:
        socket.write('Comando no reconocido');
    }
  });
  
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = 5003;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
