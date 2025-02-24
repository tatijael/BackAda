const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log('Conectado al servidor');
    
    client.write('¡Hola servidor!');
});

client.on('data', (data) => {
    console.log('Servidor dice:', data.toString());
});

client.on('close', () => {
    console.log('Conexión cerrada');
});

client.on('error', (err) => {
    console.error('Error:', err);
});

process.stdin.on('data', (data) => {
    client.write(data);
});