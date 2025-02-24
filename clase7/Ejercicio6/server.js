// Ejercicio 6: Servidor de Comandos
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar comandos
// simples. Dependiendo del comando recibido, el servidor debe realizar
// una acción específica:
// • Si el cliente envía "fecha", el servidor debe responder con la fecha y
// hora actual.
// • Si el cliente envía "ip", el servidor debe responder con la dirección
// IP del cliente.
// • Si el cliente envía "salir", el servidor debe cerrar la conexión.
// • Para cualquier otro comando, el servidor debe responder
// "Comando no reconocido".
// Requisitos:
// • Usa el evento data para recibir y procesar los comandos.
// • Usa el método socket.write() para enviar respuestas.
// • Usa el método socket.end() para cerrar la conexión cuando el
// cliente envíe "salir".

const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  socket.on('data', (data) => {
    const command = data.toString().trim();
    if (command === 'fecha') {
      const currentDate = new Date();
      socket.write(currentDate.toISOString());
    } else if (command === 'ip') {
      const clientIP = socket.remoteAddress;
      socket.write(clientIP);
    } else if (command === 'salir') {
      socket.write('Adiós!');
      socket.end();
    } else {
      socket.write('Comando no reconocido');
    }
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
  socket.on('close', () => {
    console.log('Conexión cerrada');
  });
  socket.on('error', (err) => {
    console.error(`Error en la conexión: ${err}`);
    socket.destroy();
  });
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

  

