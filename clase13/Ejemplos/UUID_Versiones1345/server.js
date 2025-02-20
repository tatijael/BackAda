const net = require('net');
const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');

const NAMESPACE = uuidv3.URL;

const server = net.createServer((socket) => {
  // imprimimos en consola cuando se establece una conexión
  console.log('conexion establecida');

  // Generamos y mostramos los UUIDs
  const idv1 = uuidv1();
  const idv3 = uuidv3("usuario", NAMESPACE);
  const idv4 = uuidv4();
  const idv5 = uuidv5("usuario", NAMESPACE);

  console.log('UUID V1', idv1);
  console.log('UUID V3', idv3);
  console.log('UUID V4', idv4);
  console.log('UUID V5', idv5);

  // manejamos el evento data
  socket.on('data', (data) => {
    console.log('data:', data.toString());
  });

  // manejamos el evento end
  socket.on('end', () => {
    console.log('conexion terminada');
  });
});

server.listen(8000, () => {
  console.log('servidor escuchando en puerto 8000');
});