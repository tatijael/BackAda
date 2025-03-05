// Ejercicio 3: Servidor TCP que Obtiene Información de la Ruta
// Objetivo: Crear un servidor TCP que acepte una ruta y responda con
// la base, el directorio, y la extensión del archivo usando
// path.basename, path.dirname, y path.extname.
// Pasos:
// 1. Configuración del Servidor:
// o Crea un servidor TCP que escuche en un puerto específico
// (por ejemplo, 8082).
// 2. Comando para Obtener Información de la Ruta:
// o El servidor debe recibir una ruta desde el cliente.
// o Usa path.basename, path.dirname, y path.extname para
// obtener la base del nombre, el directorio y la extensión
// del archivo, respectivamente.
// 3. Responder al Cliente:
// o Envía la información al cliente en un formato legible.
// Instrucciones:
// • Ejecuta el servidor y conecta un cliente.
// • Envía rutas completas (e.g., /ho


const net = require('net');
const readline = require('readline');

const client = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

client.connect(8082, 'localhost', () => {
    console.log('Conectado al servidor');

    rl.question('Ingresa una ruta para obtener información: ', (ruta) => {
        console.log(`Enviando ruta: ${ruta}`);
        client.write(ruta);
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