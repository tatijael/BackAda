const net = require('net');
const readline = require('readline');

const client = new net.Socket();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

client.connect(4002, 'localhost', () => {
    console.log('Conectado al servidor');

    rl.question('Ingresa el título de la película que deseas consultar: ', (titulo) => {
        client.write(titulo);
    });
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:');
    console.log(data.toString());
    client.destroy(); 
});

client.on('close', () => {
    console.log('Conexión cerrada');
    rl.close();
});