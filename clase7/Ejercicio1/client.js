const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log('Conectado al servidor');
    client.write('¡Hola servidor!');
});

client.on('data', (data) => {
    console.log('Recibido del servidor:', data.toString());
});

client.on('close', () => {
    console.log('Conexión cerrada');
});