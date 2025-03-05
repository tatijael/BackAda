const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log('Conectado al chat');
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('close', () => {
    console.log('Desconectado del chat');
    process.exit();
});

process.stdin.on('data', (data) => {
    client.write(data);
});