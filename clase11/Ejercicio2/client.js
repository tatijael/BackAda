const net = require('net');

const client = new net.Socket();

client.connect(8081, 'localhost', () => {
    console.log('Conectado al servidor');

    const ruta = './docs/../file.txt'; // Puedes cambiar esta ruta para probar
    console.log(`Enviando ruta: ${ruta}`);
    client.write(ruta);
});

client.on('data', (data) => {
    const rutaNormalizada = data.toString().trim();
    console.log(`Ruta normalizada recibida: ${rutaNormalizada}`);

    client.destroy();
});

client.on('close', () => {
    console.log('Conexión cerrada');
});