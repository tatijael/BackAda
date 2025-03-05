// Ejercicio 4: Manejo de errores en la conexión
// Consigna
// Modifica el cliente para que:
// 1. Si ocurre un error (como un servidor no disponible), lo detecte y lo
// muestre con " Error: [mensaje]".
// 2. Si la conexión se cierra inesperadamente, muestre " cerrada inesperadamente".
// Conexión
// Pistas
// • Usa client.on('error', callback) para manejar errores.
// • Usa client.on('close', callback) para detectar cierres.

const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log("Conectado al servidor");
});

client.on('data', (data) => {
    console.log("Respuesta del servidor:", data.toString());
});

client.on('error', (err) => {
    console.error("Error en la conexión:", err.message);
});

client.on('close', () => {
    console.log("Conexión cerrada inesperadamente");
});
