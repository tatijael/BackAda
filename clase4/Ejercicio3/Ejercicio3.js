// Ejercicio 3: ¡Actualiza tu estilo!
// Consigna:
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
// tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
// en el archivo perfil.json.
// Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a
// escribirlo.

const fs = require('fs');

const filePath = '../Ejercicio1/profile.json';

fs.readFile(filePath, 'utf-8', (err, data) => { 

  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const perfil = JSON.parse(data);

  perfil.hobby = 'Escuchar música';

  const perfilJSON = JSON.stringify(perfil, null, 2);

  fs.writeFileSync(filePath, perfilJSON, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File written successfully');
  });
});