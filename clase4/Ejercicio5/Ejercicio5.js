// Ejercicio 5: ¡Despídete de tu perfil!
// Consigna:
// ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
// Verifica que el archivo existe antes de intentar borrarlo.
// Pista: Usa fs.unlink para eliminar archivos

const fs = require('fs');

const filePath = '../Ejercicio1/profile.json';

if (fs.existsSync(filePath)) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return;
    }

    console.log('File deleted successfully');
  });
} else {  
  console.log('File does not exist');
}

