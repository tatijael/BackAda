const net = require('net');
const fs = require('fs');  
const path = require('path');

const messageRoute = path.join(__dirname, 'message.json');

if (!fs.existsSync(messageRoute)) {
    fs.writeFileSync(messageRoute, '[]', 'utf-8');
}

const server = net.createServer((socket) => {
    console.log("Cliente Conectado");

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log('Mensaje recibido:', message);
        if (message === '/historial') {
            const historial = fs.readFileSync(messageRoute, 'utf-8');
            socket.write('Historial de mensajes: \n' + historial);
        } else {
            const messages = JSON.parse(fs.readFileSync(messageRoute, 'utf-8') || '[]');
            messages.push({ fecha: new Date().toISOString(), message });
            fs.writeFileSync(messageRoute, JSON.stringify(messages, null, 2), 'utf-8');
            socket.write('Mensaje guardado');
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.on('error', (err) => {
    console.error('Error en el servidor:', err);
});

server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});