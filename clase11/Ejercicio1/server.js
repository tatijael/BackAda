const net = require('net');
const path = require('path');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  
  socket.on('data', (data) => {
    const routePath = data.toString().trim();
    
    try {
      const isAbsolute = path.isAbsolute(routePath);
      
      const responseMessage = isAbsolute 
        ? `La ruta "${routePath}" es una ruta ABSOLUTA` 
        : `La ruta "${routePath}" es una ruta RELATIVA`;
      
      socket.write(responseMessage + '\n');
      
      console.log(`Ruta recibida: ${routePath}`);
      console.log(responseMessage);
    } catch (error) {
      const errorMessage = `Error al procesar la ruta: ${error.message}`;
      socket.write(errorMessage + '\n');
      console.error(errorMessage);
    }
  });
  
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
  
  socket.on('error', (err) => {
    console.error('Error de socket:', err);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Servidor de validación de rutas escuchando en puerto ${PORT}`);
});

server.on('error', (err) => {
  console.error('Error del servidor:', err);
});
