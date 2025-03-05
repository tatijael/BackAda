// Ejercicio 7: Servidor de Chat Grupal
// Consigna:
// Crea un servidor TCP que permita a múltiples clientes conectarse y enviar
// mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a
// todos los demás clientes conectados. El servidor debe notificar cuando
// un cliente se conecta o desconecta.
// Requisitos:
// • Usa un array para almacenar las conexiones de los clientes.
// • Usa el evento data para recibir mensajes y retransmitirlos a todos
// los clientes.
// • Usa el evento end para eliminar a un cliente del array cuando se
// desconecta.
// • Notifica a los demás clientes cuando alguien se conecta o
// desconecta.

const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    clients.push(socket);
    console.log('Cliente conectado');

    broadcast(`Nuevo usuario conectado. Total usuarios: ${clients.length}\n`, socket);

    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`Mensaje recibido: ${mensaje}`);
        broadcast(`Usuario ${socket.remoteAddress}: ${mensaje}\n`, socket);
    });

    socket.on('end', () => {
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
        console.log('Cliente desconectado');
        broadcast(`Usuario desconectado. Total usuarios: ${clients.length}\n`, socket);
    });

    socket.on('error', (err) => {
        console.error('Error de conexión:', err);
    });
});

function broadcast(message, sender) {
    clients.forEach(client => {
        if (client !== sender) {
            client.write(message);
        }
    });
}

server.listen(3000, () => {
    console.log('Servidor de chat escuchando en el puerto 3000');
});

