// Ejercicio 3: Pausar y reanudar la recepción de datos
// Consigna
// Crea un cliente TCP que:
// 1. Reciba mensajes continuamente del servidor.
// 2. Al recibir el primer mensaje, pause la recepción durante 3
// segundos.
// 3. Luego de los 3 segundos, reanude la recepción y siga mostrando
// los mensajes.
// Pistas
// • Usa client.pause() y client.resume().
// • Un setTimeout() puede ayudarte a reanudar después de 3
// segundos.

const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log("Conectado al servidor");
});

client.on('data', (data) => {
    console.log("Mensaje del servidor:", data.toString());
    client.pause();
    console.log("Recepción de datos pausada por 3 segundos...");

    setTimeout(() => {
        console.log("Reanudando recepción de datos...");
        client.resume();
    }, 3000);
});

client.on('end', () => {
    console.log("Desconectado del servidor");
});


client.on('error', (err) => {
    console.error("Error en la conexión:", err);
});