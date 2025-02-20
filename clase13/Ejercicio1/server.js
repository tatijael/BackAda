const net = require('net');

const { v4: uuidv4 } = require('uuid');

const server = net.createServer((socket) => {
    const idv4 = uuidv4();
    socket.write(idv4);
    socket.end();
});


server.listen(3000, () => {
    console.log('Servidor TCP escuchando en el puerto 3000');
}
);
