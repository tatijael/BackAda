// Ejercicio 6: Cliente interactivo con la usuaria
// Consigna
// Crea un cliente donde la usuaria pueda escribir mensajes en la consola y
// enviarlos al servidor.
// • Después de cada mensaje, la usuaria puede escribir otro.
// • Si escribe "salir", el cliente se desconecta.
// Pistas
// • Usa readline para capturar texto de la usuaria.
// • Si el mensaje es "salir", cierra la conexión con client.end().

const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 3000 }, () => {
    console.log("Conectado al servidor");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('Ingresa un mensaje: ');
    rl.prompt();

    rl.on('line', (input) => {
        if (input.toLowerCase() === 'salir') {
            client.end();
            rl.close();
        } else {
            client.write(input);
            rl.prompt();
        }
    });
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

