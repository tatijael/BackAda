// Ejercicio 1: Servidor TCP con UUID v4
// Objetivo:
// Crear un servidor TCP que asigne un UUID v4 único a cada conexión y
// envíe el UUID de vuelta al cliente.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v4 para cada
// conexión y envíe el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el UUID y mostrarlo en la
// consola.

const { v1: uuidv1, v3:uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');

const net = require('net');
const idv4 = uuidv4();

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');
});

client.on('data', (data) => {
    console.log('UUID:', data);
    client.end();
});


client.on('end', () => {
    console.log('Desconectado del servidor');
});
