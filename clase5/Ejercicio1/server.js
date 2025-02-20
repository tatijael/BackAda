const net = require('net');

// Crear el servidor TCP
const servidor = net.createServer((socket) => {
    console.log('¡Un cliente se ha conectado!'); // Ejercicio 2

    // Manejar datos recibidos del cliente (Ejercicio 3)
    socket.on('data', (data) => {
        const mensaje = data.toString().trim(); // Convertir buffer a texto y eliminar espacios en blanco
        console.log(`Mensaje recibido del cliente: ${mensaje}`);

        // Responder al cliente (Ejercicio 4)
        socket.write('¡Hola, cliente! Tu mensaje fue recibido correctamente.\n');
    });

    // Manejar la desconexión del cliente (Ejercicio 5)
    socket.on('end', () => {
        console.log('El cliente se ha desconectado.');
    });

    // Manejar errores de conexión
    socket.on('error', (err) => {
        console.error(`Error en la conexión: ${err.message}`);
    });
});

// Manejar errores del servidor
servidor.on('error', (err) => {
    console.error(`Error en el servidor: ${err.message}`);
});
