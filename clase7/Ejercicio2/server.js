// Ejercicio 2: Servidor con Timeout
// Consigna:
// Crea un servidor TCP que cierre automáticamente la conexión con un
// cliente si no recibe datos en un período de 10 segundos. Si el cliente
// envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar
// el contador de tiempo.
// Requisitos:
// • Usa el método socket.setTimeout() para establecer un tiempo de
// espera.
// • Usa el evento timeout para cerrar la conexión si se alcanza el
// tiempo límite.
// • Usa el evento data para reiniciar el contador de tiempo cada vez
// que se reciben datos.

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.setTimeout(10000);

    socket.on('data', (data) => {
        console.log('Received:', data.toString());
        socket.write(`Echo: ${data}`);
        socket.setTimeout(10000);
    });


    socket.on('timeout', () => {
        console.log('Connection timed out');
        socket.end('Connection timed out. Goodbye!');
    });
    
    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.error('Connection error:', err);
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

