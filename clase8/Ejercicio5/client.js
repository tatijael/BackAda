// Ejercicio 5: Detectar cuando el servidor cierra la conexión
// Consigna
// Crea un cliente que:
// 1. Se conecte y envíe "¿Sigues ahí, servidor?".
// 2. Cuando el servidor cierre la conexión, muestre " la conexión".
// Pistas
// Servidor cerró
// • El evento 'end' se activa cuando el servidor finaliza la conexión.

const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log("Conectado al servidor");
    client.write("¿Sigues ahí, servidor?");
});

client.on('data', (data) => {
    console.log("Respuesta del servidor:", data.toString());
});

client.on('end', () => {
    console.log("Servidor cerró la conexión");
});

client.on('error', (err) => {
    console.error("Error en la conexión:", err);
});