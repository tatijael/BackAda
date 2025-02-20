const net = require('net');

// Crear el cliente TCP
const cliente = net.createConnection({ port: 5000 }, () => {
    console.log('Conectado al servidor');
    cliente.write('Hola, servidor!');

    cliente.on('data', (data) => {
      console.log(`Mensaje del servidor: ${data}`);
    });


      cliente.on('error', (err) => {
        console.error(`Error en la conexión: ${err.message}`);
  });


  cliente.on('end', () => {
    console.log('Desconectado del servidor');
  });
  
});

