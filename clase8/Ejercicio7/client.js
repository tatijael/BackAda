// Ejercicio 7: Cliente que destruye el socket al fallar
// Consigna
// Crea un cliente que:
// 1. Se conecte al servidor.
// 2. Si hay un error en la conexión, use client.destroy() y muestre "
// Conexión destruida".
// Pistas
// • client.destroy() libera los recursos del socket de inmediato.

const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log("Conectado al servidor");
});

client.on('data', (data) => {
    console.log("Respuesta del servidor:", data.toString());
});

client.on('error', (err) => {
    console.error('Error en la conexión:', err);
    client.destroy();
    console.log("Conexión destruida");
});

