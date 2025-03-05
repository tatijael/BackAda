// Ejercicio 8: Cliente con unref/ref para control de procesos
// Consigna
// Crea un cliente que:
// 1. Use client.unref() para permitir que Node.js termine si no hay otras
// tareas.
// 2. Luego, después de 5 segundos, use client.ref() para evitar que el
// proceso termine.
// Pistas
// • unref() hace que el socket no impida que Node.js termine.
// • ref() lo vuelve a mantener activo.

const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log("Conectado al servidor");

    client.unref();
    console.log("Client unref() called, process can exit if no other tasks are pending");

    setTimeout(() => {
        client.ref();
        console.log("Client ref() called, process will not exit until the connection is closed");
    }, 5000);
});

client.on('data', (data) => {
    console.log("Respuesta del servidor:", data.toString());
});

client.on('end', () => {
    console.log("Desconectado del servidor");
});

client.on('error', (err) => {
    console.error("Error en la conexión:", err);
});