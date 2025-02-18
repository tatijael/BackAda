// Ejercicio 4: ¿Existe tu perfil?
// Consigna:
// Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
// existe. Si no existe, crea uno nuevo con un perfil básico.
// Pista: Usa fs.existsSync para verificar la existencia del archivo.

const fs = require('fs');

const filePath = '../Ejercicio1/profile.json';

if (fs.existsSync(filePath)) {
  console.log('File exists');
} else {  
  const perfil = {
    name: 'Juan',
    age: 25,
    city: 'Buenos Aires'
  };

  const perfilJSON = JSON.stringify(perfil, null, 2);

  fs.writeFileSync(filePath, perfilJSON, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File written successfully');
  });
}