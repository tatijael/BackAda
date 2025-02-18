// Ejercicio 10: ¡Haz un respaldo de tus metas!
// Consigna:
// Nunca está de más guardar una copia de seguridad. Escribe un programa
// que copie el contenido de metas.json en un archivo llamado
// respaldo_metas.json.
// Pista: Usa el método fs.copyFile para copiar archivos de manera
// sencilla.

const fs = require('fs');

const filePath = '../Ejercicio6/goals.json';
const backupPath = './backup_goals.json';

fs.copyFile(filePath, backupPath, (err) => {
  if (err) {
    console.error('Error copying file:', err);
    return;
  }

  console.log('File copied successfully');
});

