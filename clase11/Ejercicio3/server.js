const net = require('net');
const path = require('path');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const rutaRecibida = data.toString().trim();
        console.log(`Ruta recibida: ${rutaRecibida}`);

        const base = path.basename(rutaRecibida);
        const directorio = path.dirname(rutaRecibida);
        const extension = path.extname(rutaRecibida);

        const respuesta = `
          Información de la ruta:
          - Base: ${base}
          - Directorio: ${directorio}
          - Extensión: ${extension}
          `;

        socket.write(respuesta);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(8082, () => {
    console.log('Servidor escuchando en el puerto 8082');
});